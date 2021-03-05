let image = document.getElementById('image')
let array = ["Alea_1.png" , "Alea_2.png" , "Alea_3.png" , "Alea_4.png" , "Alea_5.png" , "Alea_6.png"]
let rotate = 0
image.addEventListener('click' , function(){
    let random = getRandom()
     rotate = rotate + 360

    image.style.transform = "rotate(" + rotate + "deg)"
    image.style.transform = "rotateZ(" + rotate + "deg)"
    image.src = random

})

function getRandom(){
    let rand = Math.floor(Math.random()*6)

    return array[rand]
}