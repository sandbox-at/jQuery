$(document).ready(function(){
//   $("button").click(function(){
//     $("p").css("color", "red");
//   });

//1. a. Add list event listener , which will store many list event handler in memory. Not correct way as it requires more memory
//    $("li").click(function(){
//        $(this).fadeOut();
//         console.log("call");
//    })
  //1.b. Add Event listener on parent and parameterise the element on which event to be fired. Better way
  // $("ul").on("click","li",function(){
  //   $(this).fadeOut(400);
  //   console.log("call");
  // })

  // $("ul").on("click","li:even",function(){
  //   $(this).css("color","red");
  // })

  //Add element to paragraph
  var para1 = $("p");
  var check= para1.indexOf("This");
  console.log(check);
});