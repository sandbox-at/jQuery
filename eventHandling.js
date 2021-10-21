//Events : click button, scroll the page , mouse click and so on. Event come from page such as : page finished loading
//browser window resized
//.on("event",callback) Example below:
function sayHi(){
    alert("Hi")
}
$("p").on("click",sayHi);

//on click chnge the color of a paragraph
$("p").on("click",function(){
    $(this).css("color","red");
});

//multiple event handling with same statement
//.on("mouseenter mouseleave",callback) i.e separate two events by a space as here

//.trigger() method
// triggers a given element on selected element or elements

$("some element").trigger(click);

//Remove event handler from element , use .off() method
// Without argument i.e , Removes all element handler from selected element
$('p').off();

//with argument(specific event)
$('p').off("click");

//Event propogation or Event bubbling, If element is wrapped within div and event is triggered on element . It automatically
//clicks and triggers even on around divs(elements)

//Events coming from page or browser
//.ready() This event is used when page is done loading and all the DOM elements have been rendered in to browsers.
//In real time , all the script should be inside DOM ready script as need to ensure if element is loaded
//

$(document).ready(function(){
    console.log("Dom is ready");
})

//Above is same as
$(function() {
console.log("Dom is ready");
});

// .resize(callback) method
$(window).resize(function(){
    console.log("Window resized");
})

//.scroll() when scroll up or down
// $(window).scroll(function(){
//     console.log("Window resized");
// })

// or 
$(function() {
$(window).scroll(function(){
    console.log("Window scrolled checked ready func");
})
});