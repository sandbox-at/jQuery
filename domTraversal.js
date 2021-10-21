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

//.filter() , Add programmatic criteria for element to be selected.
//Below code selects search bar element and check if any user has entered any text or not . If not changes border to red.

$(".search-bar").filter(function(i,element){
    return $(element).val().length === 0 }).css("border","1px solid red");

    //or
    $('h3').filter(function(i,element){
        return $(element).text().includes('Privacy');
    })

    //.has() selects the element and narrow down based on argument passed
    ('div').has('h3'); //THis selects all the div on page which contains h3 element

    //.is() , used to test the element
    $('button').click(function(){
        if ($(this).is(':even'))
        {console.log("i am even")}
        else{
            console.log("I am odd");
        }
    })

    //get parent of first h3 element
    $('h3:first').parent();

     $('h3:first').siblings();

     $('div').find('li')