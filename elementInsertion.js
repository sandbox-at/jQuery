// Three types of element insertion : 1. "inside" insertion 2. "outside" insertion 3."around" insertion
//"inside" insertion: Add new element inside the SELECTED element . .append() , .prepend()
//"outside" insertion : Add element BEFORE or AFTER the SELECTED element. .before(), .after
//"Around" insertion :  Insert new content surrounding existing content. .wrap() , .wrapAll()
//For html use : https://www.adobe.com/in/ or any site
//Add text within cmp-text class at the end
$(".cmp-text").append("Mukund")

//Add text within cmp-text class at the begining
$(".cmp-text").prepend("Greetings !!");

// Outside insertion using .before()
$(".hero-image .row .sub-header-text").before('<div><p>Check the version</p></div>')

// Outside insertion using .after()
$(".hero-image .row .sub-header-text").after('<button>CLICK HERE to </button>')

//wrap div with button element for every div

$("p").wrap('<button>CLICK HERE to </button>')