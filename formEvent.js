//.focus(), event fired whenever element gets focus. Element used : text input
$(".myinput").focus(function(){
    console.log("gained focus");
})

//.change() , triggered when one of the form element changes
$(".myinput").chane(function(e){
    const newValue=e.target.value;
    if(newValue.length >5){
        $(e.target).val(newValue.substring(0,5));
    }
})
//submit() ,use it whn form is submitted
//Add input element
$("li:last").append('<input type="text" id="fname" name="fname">')

//Display console message if user entered in to text box element
$("input").focus(function(){console.log("message added");})

//calls when user updates/changes input text box and clicks out
$("input").change(function(){console.log("change added");})


//.val() to get/set value of input element
$("input").val();
$("input").val("Hello");

//.blur() , It happens when user removes the focus from an element
$("input").blur(function (){console.log("text input lost focus");});

//user selects text inside input box , selected text inside input box gets dispayed
$("input").select(function (){console.log(window.getSelection().toString());});

