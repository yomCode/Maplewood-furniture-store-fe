import './category.css'

const CategoryItem = ({ category }) => {
  return (
    <section className="category-item-section">
        <div className="cat-container">
            <img src="https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/Image-NAM2CS@2x-300x300.jpg" alt="thisThat" />

            <div className="info">
                <p className="title">WOODEN <span>({"4"})</span></p>
            </div>
        </div>
    </section>
  )
}

export default CategoryItem