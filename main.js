const hexBody = document.querySelector(".hexContainer");
const rgbBod = document.querySelector(".rgbContainer");
const hexButton = document.querySelector(".btnHex");
const hexColorValue = document.querySelector(".hexColorValue");
const hexCopy = document.querySelector(".hexCopy");

// hex
hexButton.addEventListener("click", () => {
  let allCharacter = "0123456789ABCDEF";
  let colorOutput = "";
  for (let i = 0; i < 6; i++) {
    colorOutput += allCharacter.charAt(Math.floor(Math.random() * 16));
  }
  hexColorValue.textContent = `#${colorOutput}`;
  hexBody.style.backgroundColor = `#${colorOutput}`;
  hexButton.style.color = `#${colorOutput}`;
});

function copyToClipBoardHexColorCode() {
  // initialized try catch what if  some problem occur
  try {
    navigator.clipboard.writeText(hexColorValue.textContent); // this line copies the hex value
    alert("Hex Color is Copied");
  } catch (error) {
    console.error("Failed to copy hex color:", error);
    alert("Failed to copy hex color. Please try again.");
  }
}
hexCopy.addEventListener("click", copyToClipBoardHexColorCode);

// *--------------------------------------------------------------------------------------------------------------------------------------------

//rgb
const rgbBody = document.querySelector(".rgbContainer");
const rgbButton = document.querySelector(".btnRgb");
const redInputValue = document.querySelector("#red");
const greenInputValue = document.querySelector("#green");
const blueInputValue = document.querySelector("#blue");
const rgbCopy = document.querySelector(".rgbCopy");
const rgbColorValue = document.querySelector(".rgbColorValue");

rgbButton.addEventListener("click", () => {
  let getRedValue = redInputValue.value;
  let getGreenValue = greenInputValue.value;
  let getBlueValue = blueInputValue.value;

  rgbColorValue.textContent = `rgb(${getRedValue}, ${getGreenValue}, ${getBlueValue})`;
  rgbBody.style.backgroundColor = `rgb(${getRedValue}, ${getGreenValue}, ${getBlueValue})`;
  rgbButton.style.color = `rgb(${getRedValue}, ${getGreenValue}, ${getBlueValue})`;
});

function copyToClipBoardRgbColorCode() {
  try{
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color is Copied");
  }catch(error){
    console.error("Failed to copy hex color:", error);
    alert("Failed to copy hex color. Please try again.");
  }
}

rgbCopy.addEventListener("click", copyToClipBoardRgbColorCode);
