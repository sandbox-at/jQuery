//e.target. events target property contains element that a given even is happening to.
//E.g: If talking about click event , target will be the element click is happening to. Best usecase: get the current value of text input when user is typing
$("p").click(function(event){
    console.log(event);
})


//e.pageX and epageY , where on the page given event occured


//e.timeStamp , when event is occured on the page. Gives unix timestamp of when event is occured.


//e.which , which is possible key is responsible for triggering the events(from key events)

//e.stopPropogation , prevent the event from bubbling up to the surrounding elements.