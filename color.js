let inputColor = document.getElementById("input-color");
let alterColor = document.getElementById("altercolor");
let alterColorText = document.getElementById("altercolortext");
let hexInput = document.getElementById("hex-input");

hexInput.addEventListener("keyup",function(){

const hex = hexInput.value
if(!isvalidHex(hex))return;

const strippedhex = hex.replace('#','');
inputColor.style.backgroundColor += hex;

})


const isvalidHex = (hex) => {

    if(!hex) return false;

    const strippedhex= hex.replace('#','');
    return strippedhex.length == 3 || strippedhex.length == 6;

}


function convertHextoRGB(hex){

if(!isvalidHex(hex)) return null;

const strippedhex = hex.replace('#','');

if(strippedhex === 3){
strippedhex= strippedhex[0]+ strippedhex[0]
+strippedhex[1] + strippedhex[1] 
+strippedhex[2] + strippedhex[2]

}

const r = parseInt(strippedhex.substring(0,2),16);
const g = parseInt(strippedhex.substring(2,4),16);
const b = parseInt(strippedhex.substring(4,6),16);
 
return{r,g,b};

}
console.log(convertHextoRGB("fff"));


function convertRGBtoHex(r,g,b){
    const firstPair = ("0" + r.toString(16)).slice(-2);
    const secondPair = ("0" + g.toString(16)).slice(-2);
    const thirdPair = ("0" + b.toString(16)).slice(-2);

    const hex= `#${firstPair}${secondPair}${thirdPair}`;

    return hex;
}
console.log(convertRGBtoHex('11','0','11'));


let mySlider= document.getElementById("my-slider");
let slider = document.getElementById("slider");

 


const alterColor = (hex,percentage) => {
    const {r,g,b}= convertHextoRGB(hex);

    const amount= Math.floor((percentage/100 )*255);

    const newR = increasewithin0To255(r,amount);
    const newG = increasewithin0To255(g,amount);
    const newB = increasewithin0To255(b,amount);
    console.log({newR, newG, newB});
   
}


const increasewithin0To255 = (hex,amount) => {
     
    const newHex = hex + amount;
     
    if(newHex > 255) return 255;
    if(newHex < 0) return 0;
    return newHex;
}
alterColor('000',10)
console.log(alterColor('fff', 10));

mySlider.addEventListener("input",function(){

    if(!isvalidHex(hexInput.value)) return;


    slider.textContent ="range: " + mySlider.value + "%";

    const alteredHex=alterColor(hexInput.value,slider.value);
    alterColor.style.backgroundColor = alteredHex;
    alterColorText.innerText = `Altered Color ${alteredHex}`; 

})