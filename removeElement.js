// To remove elemenet , use .remove() . It only removes the selected element and not the child element/nodes
$('h1').remove();

// To remove element from one location and insert at another location, use .detach()
//For html use https://musebeam.com/
$("#collection-rows--collection-row-1").detach().insertBefore(".grid-uniform")

//.empty() delete all the content from selected element or elements. Remove child nodes nested inside parent or selected element

$("#collection-rows--collection-row-1").empty(); 

//.unwrap() removes element surrounded to selected element/elements
$("#collection-rows--collection-row-1").unwrap(); 

//.replaceWith() replaces the selected element to what element entered in arguments
