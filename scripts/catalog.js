var l = i => document.getElementById(i);

var totals = [0,0,0,0];
var total = 0;

function getPrice(row, rowNumber) {
    totals[rowNumber] = row.children[2].innerHTML.substring(1).replace(/\$/g,'').replace(/,/g,'') * row.children[0].children[0].value;
    total = 0;
    for(var i = 0; i < totals.length; i++) {
        total += totals[i];
    }
    l('total').innerHTML = "Total: " + (total).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

var catalog = l('catalog');
for(var i = 0; i < catalog.children[0].children.length; i++) {
    var listing = catalog.children[0].children[i];
    (function(row, rowNumber) {
        row.children[0].children[0].addEventListener("change", function() {
            getPrice(row, rowNumber);
        }, false);
    })(listing, i);
}
