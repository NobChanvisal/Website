import { Link } from 'react-router-dom';

const ProductCard = ({ id, img, title, brand, stars, reviews,qty, category, model,colors, prevPrice, salePrice }) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="productprops-card w-full relative outline outline-transparent hover:outline-1 hover:outline-slate-500">
        <a>
          <img className="w-fit h-fit" src={img} alt={title} />
        </a>
        <div className="productprops-info flex flex-col pt-4 pl-1">
          {prevPrice > 0 && (
            <span className="discount absolute right-0 top-0 px-3 my-2 mx-3 bg-red-500 text-white rounded-sm">
              Sale
            </span>
          )}
          <span className="brand mr-auto uppercase text-[#0656b6] font-semibold mb-2">
            {brand}
          </span>
          <a>{title}</a>
          <p className="category text-[14px] text-[#676d75] pb-2">
            {category}
          </p>
          <div className="rating w-[20%] pb-2">
            <img src={stars} alt={`${stars} stars`} />
          </div>
          <div className="price-content flex pb-2">
            <p className="new-price text-[#191919] pr-3">${(salePrice / 100).toFixed(2)}</p>
            {prevPrice > 0 && (
              <p className="prev-price line-through text-[#676d75]">
                ${(prevPrice / 100).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
