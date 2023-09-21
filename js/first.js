// varibals
var productNameInb = document.getElementById("productNameInput");
var productPriceInb = document.getElementById("productPriceInput");
var productCategoryInb = document.getElementById("productCategoryInput");
var productDescInb = document.getElementById("productDescInput");

// array of objects
var productCantainer=[];

// console.log(productNameInb);
// console.log(productPriceInb);
// console.log(productCategoryInb);
// console.log(productDescInb);

// function to creat object
function addProduct()
{
    var product =
    {
        name:productNameInb.value,
        price:productPriceInb.value,
        category:productCategoryInb.value,
        desc:productDescInb.value
    }
    productCantainer.push(product);
    displyproducts();
};

// function to add object in table

 function displyproducts()
 {
     var cartona="";
     for( var i= 0 ; i<productCantainer.length ; i++ )
     {
         cartona+=`<tr>
         <td>`+productCantainer[i].name+`</td>
         <td>`+productCantainer[i].price+`</td>
         <td>`+productCantainer[i].category+`</td>
         <td>`+productCantainer[i].desc+`</td></tr>`;

     }
     document.getElementById("tableBody").innerHTML=cartona;
 };
 
