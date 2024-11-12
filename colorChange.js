const redSet=document.querySelector("#redSet")
const greenSet=document.querySelector("#greenSet")
const blueSet=document.querySelector("#blueSet")
const rgbValue=document.querySelector("#rgbValue")
const rgbBox=document.querySelector("#rgbBox")

redSet.addEventListener("input",RedValueChange)
function RedValueChange(){
    let redValue=redSet.value
    document.querySelector("#redValue").innerHTML=redValue

    ColorDisplay(ColorMix())
    RgbBox(ColorMix())
    Kontraszt(ColorMix())
}


greenSet.addEventListener("input",GreenValueChange)
function GreenValueChange(){
    let greenValue=greenSet.value
    document.querySelector("#greenValue").innerHTML=greenValue

    ColorDisplay(ColorMix())
    RgbBox(ColorMix())
    Kontraszt(ColorMix())
}


blueSet.addEventListener("input",BlueValueChange)
function BlueValueChange(){
    let blueValue=blueSet.value
    document.querySelector("#blueValue").innerHTML=blueValue

    ColorDisplay(ColorMix())
    RgbBox(ColorMix())
    Kontraszt(ColorMix())
}


function ColorMix(){
    let r=redSet.value
    let g=greenSet.value
    let b=blueSet.value

    let colorObject={
        red:r,
        green:g,
        blue:b
    }

    return colorObject
}


function ColorDisplay(color){
    let newColor=`rgb(${color.red},${color.green},${color.blue})`
    rgbBox.style.backgroundColor=newColor
}


function RgbBox(color){
    rgbValue.innerHTML=`rgb(${color.red},${color.green},${color.blue})`
}



function Kontraszt(color){
    if(color.red>120 || color.green>120 || color.blue>120){
        rgbValue.style.color="black"
    }
    else{
        rgbValue.style.color="white"
    }
}