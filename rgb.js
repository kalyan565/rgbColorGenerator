const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const spanRedValue = document.getElementById('redValue');
const spanGreenValue = document.getElementById('greenValue');
const spanBlueValue = document.getElementById('blueValue');

const colorBox = document.getElementById('colorBox');
const copyButton = document.getElementById('copyButton');
const inputTypeRGBvalue = document.getElementById('inputType');

redSlider.addEventListener('input',updateColor); //here we are taking the input form the slider 
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyButton.addEventListener('click',copyRGBvalue);

function updateColor(){
    const redValue = redSlider.value; //here we are retiving the user value to the varable
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    //console.log(redValue,greenValue,blueValue);

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`; //here we are collecting all the sliders values

    colorBox.style.backgroundColor = rgbColor;  //here we are assign inth the retiverd slider values to the color box so that the color changes
    spanRedValue.textContent = redValue;// here we areupdatin the values beside the slider
    spanGreenValue.textContent=greenValue;
    spanBlueValue.textContent=blueValue; 

    inputTypeRGBvalue.textContent = rgbColor;
}
updateColor();
function copyRGBvalue(){
    const redValue = redSlider.value; //here we are retiving the user value to the varable
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("Rgb color is copied to clip board : "+rgbColor);
    })
    .catch((error)=>{
        console.log("failed to copy the rgb value ",error);
    });
}