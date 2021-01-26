
// login area
const logit = document.getElementById("login");
logit.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const hiDe = document.getElementById('hiddenDepositPart');
    hiDe.style.display = 'block';
})
// deposit area
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener("click", function () {

    const depositNumber = updateInput("depositAmount")

    innnerSpanText('currentDeposit', depositNumber);
    innnerSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";
})
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener("click", function () {
    const newUpdateInput = updateInput("withdrawAmountNumber")
    innnerSpanText("withdrawAmount", newUpdateInput);
    innnerSpanText('currentBalance', -1 * newUpdateInput);

    document.getElementById('withdrawAmountNumber').value = "";
})
function updateInput(id) {
    const convertInt = document.getElementById(id).value;
    const convertIntNumber = parseFloat(convertInt);
    return convertIntNumber;
}
function innnerSpanText(id, deposit) {
    const currentvalue = document.getElementById(id).innerText;
    const convertDepositNumber = parseFloat(currentvalue);
    const total = deposit + convertDepositNumber;
    document.getElementById(id).innerText = total;
}