const myCheckBox = document.getElementById('myCheckBox')
const myRadioVisa = document.getElementById('myRadioVisa')
const myRadioMaster = document.getElementById('myRadioMaster')
const myRadioPaypal = document.getElementById('myRadioPaypal')
const submit = document.getElementById('submit')
const subResult = document.getElementById('subResult')
const paymentResult = document.getElementById('paymentResult')

submit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.innerHTML = 'You have subscribed successfully'

        if (myRadioVisa.checked) {
            paymentResult.innerHTML = 'You have selected Visa'
        }
        else if (myRadioMaster.checked) {
            paymentResult.innerHTML = 'You have selected Master'
        }
        else if (myRadioPaypal.checked) {
            paymentResult.innerHTML = 'You have selected Paypal'
        }
        else {
            paymentResult.innerHTML = 'You have not selected any payment method'
        }
    }
    else {
        subResult.innerHTML = 'You have not subscribed'
    }

    
    
}