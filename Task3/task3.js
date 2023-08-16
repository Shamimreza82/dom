

document.getElementById('bold').addEventListener('click', function (event) {
    const bold = document.getElementById('testArea');
    const textValue = bold.value;
    bold.value = textValue;
    bold.style.fontWeight = "bold"
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

document.getElementById('colorBtn').addEventListener('click', function () {

    const colorPicker = document.getElementById('testArea');
    const colorPickerValue = colorPicker.value;

    const color = document.getElementById('color');
    const textValue = color.value;
    color.value = colorPickerValue;


})






