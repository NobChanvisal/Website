const plusBTN = document.querySelector(".plus");
const minusBTN = document.querySelector(".minus");
const Num = document.querySelector(".num");
const Price = document.querySelector(".Price");
const PriceDiscount = document.querySelector(".PriceDiscount");
const Add = document.querySelector(".BTNAdd");
const OrderQTY = document.querySelector(".Order");

var i = 0;
var ProductPrice = 126.99;
var ProductPriceOG = 215.11;
plusBTN.addEventListener("click", () => {
    i++;
    Num.innerHTML = i;
    console.log("+");
    Price.innerHTML = (ProductPrice * i).toFixed(2) + "$";
    PriceDiscount.innerHTML = (ProductPriceOG * i).toFixed(2) + "$";
});
minusBTN.addEventListener('click', () => {
    if (i > 1) {
        i--;
        Num.innerHTML = i;
        Price.innerHTML = (ProductPrice * i).toFixed(2) + "$";
        PriceDiscount.innerHTML = (ProductPriceOG * i).toFixed(2) + "$";
    }
    console.log("-");
});
Add.addEventListener("click", () =>{
    OrderQTY.innerHTML = Num.innerHTML;
});
