
// document.getElementById('btn-discount').addEventListener('click', function () {

//     const discount = document.getElementById('price');
//     const getInnerText = discount.innerText;
//     discount.innerText = `Wow!! You Got 30% discount: 
//                             (Pay: 700 Taka)`;

//     const discountDisplay = document.getElementById('discount-display');
//     const displeyHide = discountDisplay.innerText;
//     discountDisplay.innerText = "";
// })


document.getElementById('coupon-btn').addEventListener('click', function () {

    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;
    if (couponInputValue === "") {
        alert("Please input Coupon Number")
        return;
    }

    if (couponInputValue === "DISC30") {
        const addDiscount = document.getElementById('add-discount');
        const addDiscountValue = addDiscount.innerText;
        addDiscount.innerText = `Wow!! You get 30% discount
                                 (Paid: 700)`;
        addDiscount.style.color = "green"
    }
    else {
        const addDiscount = document.getElementById('add-discount');
        const addDiscountValue = addDiscount.innerText;
        addDiscount.innerText = "Invalid Coupon";
        addDiscount.style.color = "red"
    }

})