const myImg = document.getElementById("anakin");

console.log(myImg)

myImg.addEventListener("mouseover", (e) =>{
    const mySrc = myImg.getAttribute("src");
    if(mySrc==="https://lumiere-a.akamaihd.net/v1/images/anakin_skywalker_004_a316c9cb.jpeg?region=154,0,813,813"){
        myImg.setAttribute("src","https://stickersmag.com/wp-content/uploads/2018/03/s-l500.jpg" )
    }
    else{
        myImg.setAttribute("src", "https://lumiere-a.akamaihd.net/v1/images/anakin_skywalker_004_a316c9cb.jpeg?region=154,0,813,813")
    }
}
)