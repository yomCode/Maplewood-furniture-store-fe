import CategoryItem from '../../components/CategoryCard/CategoryItem';
import Card from '../../components/Card/Card'


const Categories = () => {
  return (
    <div className="div">
        <div className="category-inner-div">
        <h4>PRODUCT CATEGORIES</h4>
        <div className="cat-div">
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
        </div>
    </div>

    <div className="card-div">
        <Card title="NEW ARRIVAL" pName="WOODEN" image="../images/wooden.png" /> 
    </div>
  </div>
  )
}

export default Categories