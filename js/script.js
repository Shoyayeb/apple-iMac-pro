// getting price from html
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deleveryCost = document.getElementById("delevery-cost");
const bestCost = document.getElementById("best-cost");
const totalCost = document.getElementById("total-cost");
const footerTotal = document.getElementById("footer-total");
// function to calculate total price
function getTotal() {
    const total = parseFloat(deleveryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(memoryCost.innerText) + parseFloat(bestCost.innerText);
    return total;
}
// function to set price on website
function totalCalc(option, price) {
    option.innerText = price;
    const total = getTotal()
    totalCost.innerText = total;
    footerTotal.innerText = total;
}
// promo-code handling
document.getElementById("promo-apply").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code");
    if (promoCode.value == "stevekaku") {
        const promoUsedPrice = parseInt(totalCost.innerText) - (parseInt(totalCost.innerText) * .20);
        footerTotal.innerText = promoUsedPrice;
        document.getElementById("promo-apply").classList.remove("hover:bg-red-600");
        document.getElementById("promo-error").style.display = "none";
    } else {
        document.getElementById("promo-error").style.display = "block";
    }
    promoCode.value = '';
});
const img = document.getElementById("macColorImg");
function changeColor(color) {
    const src = `images/` + color + `Mac.jpg`
    img.src = src;
    document.getElementById("macColorText").innerText = color;
}