

document.getElementById('bold').addEventListener('click', function (event) {
    const bold = document.getElementById('testArea');
    const textValue = bold.value;
    bold.value = textValue;
    bold.style.fontWeight = "bold"
    return;
})

document.getElementById('italic').addEventListener('click', function (event) {
    const italic = document.getElementById('testArea');
    const textValue = italic.value;
    italic.value = textValue;
    italic.style.fontStyle = "italic";
})

document.getElementById('underline').addEventListener('click', function (event) {
    const underline = document.getElementById('testArea');
    const textValue = underline.value;
    underline.value = textValue;
    underline.style.textDecoration = "underline";
})

document.getElementById('left').addEventListener('click', function (event) {
    const left = document.getElementById('testArea');
    const textValue = left.value;
    left.value = textValue;
    left.style.textAlign = "left";
})



document.getElementById('center').addEventListener('click', function (event) {
    const center = document.getElementById('testArea');
    const textValue = center.value;
    center.value = textValue;
    center.style.textAlign = "center";
})


document.getElementById('right').addEventListener('click', function () {
    const right = document.getElementById('testArea');
    // const textValue = right.value;
    // right.value = textValue;
    right.style.textAlign = "right";
})

document.getElementById('text-decoration').addEventListener('click', function () {
    const textDecoration = document.getElementById('testArea');
    // const textValue = right.value;
    // right.value = textValue;
    textDecoration.style.textTransform = "uppercase";
})

document.getElementById('justify').addEventListener('click', function () {
    const justify = document.getElementById('testArea');
    // const textValue = right.value;
    // right.value = textValue;
    justify.style.textAlign = "justify";
})



const textElement = document.getElementById('textElement');
const increaseSizeButton = document.getElementById('increaseSizeButton');



increaseSizeButton.addEventListener('click', function () {

});
