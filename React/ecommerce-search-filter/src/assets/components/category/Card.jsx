
import { TiShoppingBag } from "react-icons/ti";
function Card({img, title, star, reviews, newPrice, prevPrice }){
    return(
        <div className="card-Container border p-5 h-auto">
            <div className="pro-img h-36">
                <img className=" object-contain w-[100%] h-[100%]" src={img} alt="" />
            </div>
            <div className="card-info pt-2">
                <p className="name">{title}</p>
                <div className="rating-content pt-2 flex items-center">
                    <div className="star w-[60px]">
                        <img src={star} alt="" />
                    </div>
                    <div className="reviews pl-6 text-sm text-gray-400">{reviews}</div>
                </div>
            </div>
            <div className="card-footer pt-2 flex items-center justify-between">
                <div className="price text-sm flex w-[50%] justify-between">
                    <p className="prev-price line-through text-gray-400">{prevPrice}</p>
                    <p className="new-price">${newPrice}</p>
                </div>
                <TiShoppingBag />
            </div>
        </div>
    )
}
export default Card;