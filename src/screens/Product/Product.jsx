
import ProductItem from '../../components/ProductCard/ProductItem'
import './product.css'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd'
import useProduct from '../../hooks/useProduct';
import Categories from '../../components/CategoryCard/Categories';
import ReactPaginate from 'react-paginate';
import { ArrowLeftTwoTone, ArrowRightAltOutlined,  } 
from '@mui/icons-material';


const items = [
    {
      label: 'Sort By Name',
      key: '1',
    },
    {
      label: 'Sort By Image',
      key: '2',
    },
    {
      label: 'Sort By Price: Low to High',
      key: '3',
    },  
      {
      label: 'Sort By Price: High to Low',
      key: '4',
    },  
  ];

const Product = () => {
    const { products, setProducts, totalPages, pageElementSize,
            setPageNumber, pageNumber, totalElements, numOfElements 
          } = useProduct()

    const onClick = ({ key }) => {
        switch(key) {
            case '1':
                setProducts([...products.sort((a, b) => (a.name > b.name) ? 1 : -1)])
                return
          case '2':
                setProducts([...products.sort((a, b) => (a.imageUrl > b.imageUrl) ? 1 : -1)])
                return
            case '3':
                setProducts([...products.sort((a, b) => a.price - b.price)])
                return   
            case '4':
                setProducts([...products.sort((a, b) => b.price - a.price)])
                return
            default: 
                return products
        }
    };

    const changePage = ({ selected }) => setPageNumber(selected)

  return (
    <section className="favorites-section">
        <div className="products-info">
             {
              numOfElements < pageElementSize ?
              <p>Showing { (pageNumber * pageElementSize) + 1 } - { totalElements } of { totalElements }</p> :
              <p>Showing { numOfElements * (pageNumber) + 1 } - { numOfElements * (pageNumber + 1) } of {totalElements} results</p>
            }
            <h1>Products</h1>
            <Dropdown menu={{ items, onClick,}}>
                <a onClick={(e) => e.preventDefault()} href={"sorting"} id="dropdown-link">
                <Space>
                    Default Sorting
                    <DownOutlined />
                </Space>
                </a>
            </Dropdown>
        </div>

        <div className="encompassing-div">
          <Categories />

            { products.length > 0 &&
              <div className="this-product-container">

                <div className="favorites-div">
                { 
                    products.map((product, index) => 
                        <ProductItem product={ product } key={index} isEditable={false} />
                )}
                </div>
                <ReactPaginate 
                  previousLabel={<ArrowLeftTwoTone />}
                  nextLabel={<ArrowRightAltOutlined />}
                  pageCount={totalPages} 
                  onPageChange={changePage}
                  containerClassName={"paginationBtns"}
                  previousLinkClassName={"prevBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
                </div>
            }

        { products.length === 0 &&
          <div className="favorites-div" style={{minHeight: "40vh"}}>
            "No data"
          </div>
        }
        </div>
    </section>
  )
}

export default Product