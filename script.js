function white(){
    document.getElementById("imd").setAttribute("src","./Assert/white.jpeg")
}

function blue(){
    document.getElementById("imd").setAttribute("src","./Assert/blue.jpeg")
}

function black(){
    document.getElementById("imd").setAttribute("src","./Assert/black.jpeg")
}

const clk1=document.querySelector("#clk");
clk1.addEventListener("click",function(){
    clk1.textContent="Added to cart";
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
})