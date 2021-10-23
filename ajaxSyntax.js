//ajax success request

$.ajax({
    URL:'api.mysite.com/path',
    success : function(result){
        //do something
    },
})

// ajax error request

$.ajax({
    //other properties
    error:function(jqXHR, textStatus, errorThrown){
        //handle the error
    },
})

//type property returns the type of request , we are sending for the ajax call
$.ajax({
    type:'GET', //load data from server i.e by default GET rquest . POST used to crate new data on server. 
    //PUT request for updating data on server ,DELETE request for deleting server data
})

//Data property is used to send the extra data alsong with the request in the form of request body. When passing JSON convert to string and send
$.ajax({
    data : JSON.stringify({ }),
})

//Pass contentType e.g : for  JSON pass application/json
$.ajax({
    contentType : 'application/json',
})

//Shorthand notation
$.get(
    'api.mysite.com',
    function(result){
        //do something

    },
);

//post method
$.post(
    'api.mysite.com',
    {a:1,b:2},
    function(result){
        //do something
    },

);