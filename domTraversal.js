//.find() method is used when already selected an element and wnat to search through their descendents to find some other elements
//Selects element with class name todolist and then traverse through to find list element
$(".todolist").find('li');

//.children() returns all the child of selected element
$("div").childen();

//.parent() to retun immediate parent element or .parents() to return all ancestor parent elements

//.each()
$.each($('h3'),function(i,element){
    console.log($(element).text());})

    //Output of this , will get text of each h3 element one by one e.g : 
    //Shop
    //Policies

$("h3").text();
//This wil return all the ext together i.e ShopPolicies