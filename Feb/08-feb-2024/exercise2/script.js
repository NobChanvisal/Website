const BtnShow = document.querySelector(".BtnShow");

BtnShow.addEventListener("click",Display);


function Sum(x,y)
{
    var sum = x+y;
    if(sum >= 50)return "The Result is Pass";
    else return "The Result is false";
}

function Display(){
    alert(Sum(100,100));
}


