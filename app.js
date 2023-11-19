function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    if (!isNaN(billAmount)) {
        var tip20 = billAmount * 0.2;
        var total20 = billAmount + tip20;

        var tip18 = billAmount * 0.18;
        var total18 = billAmount + tip18;

        var tip15 = billAmount * 0.15;
        var total15 = billAmount + tip15;

        document.getElementById('tip20').textContent = tip20.toFixed(2);
        document.getElementById('total20').textContent = total20.toFixed(2);
        
        document.getElementById('tip18').textContent = tip18.toFixed(2);
        document.getElementById('total18').textContent = total18.toFixed(2);
        
        document.getElementById('tip15').textContent = tip15.toFixed(2);
        document.getElementById('total15').textContent = total15.toFixed(2);
    } else {
        alert('Please enter a valid bill amount');
    }
}