
import ProductItem from '../../components/ProductCard/ProductItem'
import './product.css'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd'
import useProduct from '../../hooks/useProduct';
import Categories from '../../components/CategoryCard/Categories';


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

  const favoritesUrl = ``

const Product = () => {
    const { products, setProducts } = useProduct()

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

  return (
    <section className="favorites-section">
        <div className="products-info">
            <p>Showing 1 - 9 of {products.length} results</p>
            <h1>Products</h1>
            <Dropdown menu={{ items, onClick,}}>
                <a onClick={(e) => e.preventDefault()} href={favoritesUrl} id="dropdown-link">
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
              <div className="favorites-div">
              { 
                  products.map((product, index) => 
                      <ProductItem product={ product } key={index} isEditable={false}/>
              )}
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