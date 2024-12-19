import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { removeFromCart } from "../redux/cartSlice"; // Ensure correct path
import Input from "../Category/Input";

export const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); // Add dispatch here

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id })); // Correctly dispatch the action
  };

  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.qty * item.salePrice,
    0
  );
  const taxRate = 0.01;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <section className="w-full max-w-5xl mt-40 mx-auto px-10">
      <div className="flex justify-center flex-col items-center">
        <h2 className="pb-14 uppercase text-[30px] tracking-[2px] font-semibold">
          Shopping Cart
        </h2>
        {cartItems.length > 0 && (
          <div className="w-full pb-1 border-bottom grid grid-cols-7 gap-x-4">
            <p className="col-span-3">Product</p>
            <p className="pl-3">Qty</p>
            <p>Colors</p>
            <p>Price</p>
            <p>Total</p>
          </div>
        )}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item w-full border-bottom grid grid-cols-7 gap-x-4 items-center"
            >
              <div className="py-3 justify-self-start col-span-3 flex flex-row">
                <div className="product-img max-w-[180px]">
                  <img
                    className="w-fit h-fit border"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="pro-info pl-5 flex flex-col justify-between">
                  <div>
                    <p className=" text-sm pb-1">{item.brand}</p>
                    <p>{item.title}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)} // Pass item ID here
                    className="uppercase text-start underline text-[10px] tracking-[2px] hover:text-red-500"
                  >
                    remove
                  </button>
                </div>
              </div>
              <p className="pl-3">{item.qty}</p>
              <p
                className="w-5 h-5 rounded-full border border-black"
                style={{ backgroundColor: item.colors }}
              ></p>
              <p>${(item.salePrice / 100).toFixed(2)}</p>
              <p>${((item.qty * item.salePrice) / 100).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className=" mt-10 text-[20px]">Your cart is empty!</p>
        )}
        {cartItems.length > 0 && (
          <div className=" w-full mt-4 grid grid-cols-2">
            <div className="">
              <h2 className=" font-serif text-uppercase text-[13px]">
                Shipping Method
              </h2>
              <div className=" mt-3">
                <Input
                  title="In Stock Pickup - Free"
                  name="shipping"
                  color="black"
                />
                <Input
                  title="Standard Shipping - $9.5"
                  name="shipping"
                  color="black"
                />
                <Input
                  title="Priority Shipping - $19.5"
                  name="shipping"
                  color="black"
                />
              </div>
            </div>
            <div>
              {cartItems.length > 0 && (
                <div className="order-summary w-full max-w-md">
                  <div className="flex justify-between uppercase pb-2">
                    <p>Total Items:</p>
                    <p>{totalItems}</p>
                  </div>
                  <div className="flex justify-between text-uppercase pb-2">
                    <p>Subtotal:</p>
                    <p>${(subtotal / 100).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-uppercase pb-2">
                    <p>Tax (1%):</p>
                    <p>${(tax / 100).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between font-bold text-uppercase mt-4">
                    <p>Total:</p>
                    <p>${(total / 100).toFixed(2)}</p>
                  </div>
                  <button className="mt-5 w-full uppercase tracking-[2px] bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Checkout
                  </button>
                  <div className=" w-full text-center pt-2">
                    <a
                      className=" text-sm uppercase tracking-[1.5px] underline text-center hover:text-slate-400"
                      href="/store"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};