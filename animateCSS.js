//.hide(), hide elements but html structure still remain
$("li:nth-child(2)").hide(3000);

//passing call back function, if element is hidden)
$("li:nth-child(2)").hide(3000,function(){
    console.log("element hidden");
});

//.show()


//.toggle() , combinatio of show() and hide()

//passing call back function, if element is hidden)
$("li:nth-child(2)").toggle(3000,function(){
    console.log("element toggled");
});

// ************ animate nay css attribute ***************
//.animate() , it can only animate element attribute with numeric value


//.delay() , adds delay nefore or after animation


//Animation does not work with color , so add jqueryUI to do color based animations