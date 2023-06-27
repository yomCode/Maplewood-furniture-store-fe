import "./category.css";

const CategoryItem = ({ category }) => {
  const { name, size, imageUrl } = category;

  return (
    <section className="category-item-section">
      <div className="cat-container">
        <img src={imageUrl} alt="thisThat" />

        <div className="info">
          <p className="title">
            {name.toUpperCase()} <span>({size ?? 2})</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryItem;
