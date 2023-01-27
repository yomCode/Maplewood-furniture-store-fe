import { useState } from 'react'
import { productColumns } from './personTableData'
import DrawerForm from '../Forms/DrawerForm'
import ReactPaginate from 'react-paginate';
import { ArrowLeftTwoTone, ArrowRightAltOutlined,  } from '@mui/icons-material';
import AddProductForm from '../Forms/AddProductForm'

import {
  UserAddOutlined,
  LoadingOutlined
} from '@ant-design/icons';

import { Table, Spin, Empty } from 'antd';
import usePerson from '../../../hooks/usePerson'
import useProduct from '../../../hooks/useProduct';
const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

  const PersonTableView = ({ tableTitle }) => {
    const { setHeaderTitle, headerTitle } = useProduct()
    const {persons, personTotalPages, setPersonPageNumber, personFetching, personTotalElements } = usePerson()

    const changePage = ({ selected }) => setPersonPageNumber(selected)
    const[showDrawer, setShowDrawer] = useState(false)

    const handleShowDrawer = () => {
      setHeaderTitle("Add New Product")
      // setShowDrawer(!showDrawer);
    }

    return (
        <section className="table-data-section">
          <DrawerForm
            title={headerTitle}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            formLayout={<AddProductForm 
            setShowDrawer={ setShowDrawer } 
            />}
          />
          {personFetching ? 
            <div style={{ width: "100vw", display: "flex", height:"100%", alignItems: "center", justifyContent: "center", }}>
                <Spin indicator={antIcon} style={{ color: "rgb(218, 196, 161)" }}/>
            </div>
            :
            <Table 
            dataSource={ persons }
            rowkey={ person => person.email } 
            bordered
            pagination={false}
            scroll={{ x: '400px', y: 600 }}  
            columns={productColumns} 
            title={() => 
              <div className="title-head"> 
                <div className='title-sub-head'>
                    <button style={{padding: "15px 30px"}}
                      className="btn-count">{personTotalElements}
                    </button>
                </div>
                <h2 className='"layout-h2-header'>{tableTitle}</h2>

                <ReactPaginate 
                  previousLabel={<ArrowLeftTwoTone />}
                  nextLabel={<ArrowRightAltOutlined />}
                  pageCount={personTotalPages} 
                  onPageChange={changePage}
                  containerClassName={"paginationBtns"}
                  previousLinkClassName={"prevBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>                
            }
        />
          }

          { persons?.length === 0 && !personFetching && <Empty /> }
        </section>
    )
  }

  export default PersonTableView