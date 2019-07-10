 /*
 var product = {
     name: "shoes",
     brand: "Nike",
     size :" 8",
     colour :"Black"
 }
 console.log(product.name);
*/

// product.size
var product = [      

    [{
    type: "shoes",
    brand: "Nike",
    size :["6","7","8"],
    colour :["Black","white","red","blue"],
    onStock: "20"
}]
];
console.log(product[0][0].onStock)

 console.log(product);

for ( var sizeA = 0; sizeA < product[0][0].size.length; sizeA++){
    console.log("hjhj", product[0][0].size[sizeA]);
}

for ( var colourA = 0; colourA< product[0][0].colour.length; colourA++){
    console.log(product[0][0].colour[colourA]);
}

/*
for (var sizeA = 0; sizeA<product.size.length; sizeA++){
    console.log(product.size[sizeA]);
}
*/

var prod =
    [{
        name: "roshan",
        dob: "jan 19 1990"
    }]
;
console.log(prod);