function getInputByidFild(inputId){
    const inputFild = document.getElementById(inputId);
    const inputValueString = inputFild.value;
    const inputValue = parseFloat(inputValueString);
    inputFild.value = '';
    return inputValue;

}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

function setTextElementById(textId, newValue){
    const textElement = document.getElementById(textId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposite').addEventListener('click',function(){
    const newDeposieAmount = getInputByidFild('deposite-user');
    const perviousDepositeTotal = getElementValueById('deposite-total');
    const newDepositeTotal = perviousDepositeTotal + newDeposieAmount;
    setTextElementById('deposite-total', newDepositeTotal);

    const perviousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = perviousBalanceTotal + newDeposieAmount;
    setTextElementById('balance-total', newBalanceTotal);

})