//to look at the entire outline of the document
console.dir(document);
// gives the domain of the web page hosted
console.log(document.domain);
//gives the url of the web page.
console.log(document.url)
// the document attribute can access the doc title
console.log(document.title)
// Access what type of document it is
console.log(document.doctype)
// this going to show me everything on the header. (access the head)
console.log(document.head)

// access the body
console.log(document)

//shows specific section of index 
console.log(document.all[10]);

//access the document attribute allows us to go in and change a particular thing through JS
document.all[10].textContent= "I just changed the header "

//to figure out how many forms are there in the document
console.log(document.forms);

//to access the links and images in the document
console.log (document.links);
console.log (document.images);

///////////////////////////////
///GetElementByID

// shows the property of 
console.log(document.getElementById('header-title'));

// creating a variable
let headerTitle = document.getElementById('header-title')

console.log(headerTitle);

//change the header text
headerTitle.textcontent= "changed the title again"
headerTitle.innerText="hello changed you again"
// change the color of the header
headerTitle.style.color='hotpink'


////////////////////////////////////////////
///////////////////GetElementByClassName

var items = document.getElementsByClassName('list-group-item')

console.log(items);
//changing the style by manipulating the Index number and make change to it
// reference particular through index
// item 1
items[1].style.backgroundcolor='pink'
items[1].style.fontWeight='bold'
items[1].textContent='Man-united'
items[1].style.color='green'

// item 0
items[0].style.backgroundcolor='red'
items[0].style.fontWeight='bold'
items[0].textContent='liverpool'
items[0].style.color='red'

// item 2
items[2].style.backgroundcolor='pink'
items[2].style.fontWeight='bold'
items[2].textContent='Arsenal'
items[2].style.color='blue'

//creating a for loop. it checks the variable and if we'er at the end of length then it increments the value
for(let i=1; i <=10; i++   ){

    console. log(i);

}

// creating a for loop with a fixed increment value 
for(let i=1; i <=20; i+=2  ){

    console.log(i);
}

// creating a for loop
for(let i=100; i >=0; i-=2  ){
    console.log(i);
}

const myDiamonds= ['snacky','scary','Lily','IttyBitty','Pinchie','Lanky','Nibbles','Kibbles'];
for(let i=0; i<myDiamonds.length;i++){

    console.log(i,myDiamonds[i]);
}

//creat the for loop and the varible to put 

for(var i=0; i< items.length; i++){

    items[i].style.backgroundcolor='gray';
    items[i].textContent="changing the list Items";
    items[i].style.color='white';
}

///////////////////////////////////////////////////////////////////////
////////////getElementByTagName

//CREATING A VARIABLE OBJ to put it by index list

var li= document.getElementsByTagName('li');
// pass into console.log
console.log(li);
// call an index
console.log(li[1]);

// call variable and manipulate particular elements
li[1].textContent="Hello 2 now";
li[1].style.fontWeight='bold';
li[1].style.backgroundcolor='green';
li[1].style.color ='white';

// created another for loop that does through the array
for(var i=0; i < li.length; i++){
     // pass in header
     // call variable and manipulate element
    li[i].style.backgroundcolor='lightgrey';
    li[i].textcontent="I changed the Items from the Dom";
    li[i].style.color='White';
}    

/////////////////////////////////////////////////////////////////////////////////
///////////////////////Query Selector

//creating object

var header = document.querySelector('#main-header');
// call header and manipulate
header.style.boaderBottom='solid 4px hotpink';
// change value of text box
var input = document.querySelector('input');
input.value ="I just changed the text value in the input box.";

//submit variable
var submit= document.querySelector('input[type="submit"]');
submit.value= "HELLO BUTTON";
// calling last item
var lastItem = document.querySelector('.list-group-item:last-child');
//change last item
lastItem.style.color = 'blue';
// created another  variable. called list group class
// this returns specific index
var OtherItem = document.querySelector('.list-group-item:ntn-child(2)');
OtherItem.style.color= 'coral'//

////////////////////////////////////////////////////////////////////////////////
// calling the class "title"
var titles = document.querySelectorAll('.title');
// pass through console.log. there are only 2 elements
console.log(titles);

// change variable. called title and changed the title
titles[0].textContent='Hello I just changed the Title';


//create two variable. one for odd and one for  even (n-th child)

var odd= document.querySelector('li:nth-child(odd)');
var even= document.querySelector('li:nth-child(even)');

// for loop that iterates through odd
for(var i=0; i< odd.length; i++) {

    odd[i].style.backgroundcolor='grey';
    even[i].style.backgroundcolor='green';
    even[i].style.color= 'whitesmoke';
    odd[i].style.color= 'whitesmoke';
}