function getInputValue (inputId){
    
    const inputItem = document.getElementById(inputId);
    const inputAmountText = inputItem.value;
    const amountValue = parseFloat(inputAmountText);
    inputItem.value = '';
    return amountValue;

}   


function updateTotalField(totalFieldId, amount) {
    // debugger
    const totalElement = document.getElementById(totalFieldId);
    const totalTaxt = totalElement.innerText;
    const previousTotal = parseFloat(totalTaxt);
    totalElement.innerText = previousTotal + amount;
}


function getCurrentBalance(){
     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalText);
    return preBalanceTotal;
}



function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal =  getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}



//  handle Deposit  button
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount)
    updateBalance(depositAmount, true);
    }
})



// handle withdraw  button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount =getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 &&  withdrawAmount < currentBalance){
    updateTotalField('withdraw-total', withdrawAmount)
    updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
})