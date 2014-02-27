//To include Jquery library: (Goes in the head section)
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>



//Selecting elements in the DOM with jQuery: we use the same css selector that we put into quote 
    $("body"), $("p"),(".header")

//The $(document).ready() snippet :
	$(document).ready(function(){
		$(".header").fadeOut(7000);  // will fade out the header once the document is loaded.
	})

//anonymous function : function(){alert(“message that will be displayed”);}
	var x = function() {
	    alert('Saley said hello');
	};
	 
    x();

 
 //show and Hide  
	 $(document).ready(function(){
	 	$("h1").hide();    // will hide the h1 tilte JQUERY
	 })

	 $(document).ready(function(){
	 	$("h1").show(4000);    // will show the h1 tilte JQUERY after 4seconds
	 })

//Fade in and Fade out
	$(document).ready(function(){
			$(".main").fadeOut(2000); // will Fade out the element ".main" after 2sec when page is loaded
	})	
	$(document).ready(function(){
			$(".main").fadeIn(5000);  // will fade back in the element ".main" after 5sec
	})	


//sliding
    $(document).ready(function(){
    	$("h1").slideUp(3000)  //will slide up the h1 element after 3 sec
    })
    $(document).ready(function(){
    	$("h1").slideDown(5000)  //will slide down the h1 element after 3 sec
    })




// Animating css
    $(document).ready(function(){
          	$(".main").animate({width:"500px",height:"100px"},2000); //will resize the height and width of the ".main" element
    })



//The Click Event : The click event occurs when an element is clicked. 
    $(document).ready(function(){
       $(".hide").click(function(){  //will hide the entire body of the page once clicked
	     $("body").hide();
	   });
    })





























