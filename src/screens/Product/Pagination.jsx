import ReactPaginate from 'react-paginate';
import { ArrowLeftTwoTone, ArrowRightAltOutlined,  } 
from '@mui/icons-material';
import useProduct from '../../hooks/useProduct';
import ProductItem from '../../components/ProductCard/ProductItem'



const Pagination = ({ url, isEditable }) => {
    const { totalPages, setPageNumber, products } = useProduct()
    const changePage = ({ selected }) => setPageNumber(selected)

  return (
    <div>

      { products?.length > 0 &&
        <div className="this-product-container">
          <div className="favorites-div">
            { 
                products.map((product, index) => 
                        <ProductItem key={index} product={ product } url={url} isEditable={isEditable} /> 
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

  { products?.length === 0 &&
    <div className="favorites-div" style={{minHeight: "40vh"}}>
      "No data"
    </div>
  }
  </div>
  )
}

export default Pagination