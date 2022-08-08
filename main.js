//excersise 1 and 2
const firstName = "Jordan";
let lastName = "Lockwood";
var age = 27;
let excercise1 = document.getElementById("excercise1")
excercise1.innerHTML = `First name:${firstName}`+`<br/>`+
`Last name:${lastName}`+ `<br/>`+
`Age:${age}`
//e3
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;
let e3 = document.getElementById("e3")
e3.innerHTML = `Code language: ${language}` + `<br/>` +
`Created year: ${createdYear}` + `<br/>`+
`Is it case sensitive: ${isCaseSensitive}`
//e4
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let instock = false;
let selectedSize = "M";
let e4 = document.getElementById("e4")
e4.innerHTML = `Price: ${price}` + `<br/>` +
`Is it on sale: ${isOnSale}` + `<br/>` +
`Is it in stock: ${instock}` + `<br/>` +
`Selected size: ${selectedSize}`

//e5
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;
let e5 = document.getElementById("e5")
e5.innerHTML = `Title: ${title}`+`<br/>`+
`Author: ${author}` + `<br/>` +
`Page count: ${pageCount}` + `<br/>` +
`Bookmarked page: ${bookmark}` + `<br/>`+
`Has this been read: ${hasRead}`