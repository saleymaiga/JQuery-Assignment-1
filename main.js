$(document).ready(function(){
	$(".jquery_list").hide();
	$(".click_me").click(function(){
			$(".section3,.section4").hide();
			$(".section1").animate({width:"500px",height:"600px"},2000)
			$(".jquery_list").fadeIn(4000);
			$(".click_me").fadeOut();
			$(".show").fadeIn(2000);
	});
	$(".show").click(function(){
		$(".section1").animate({width:"450px",height:"650px",},1300, function(){
			$(".section3,.section4").fadeIn(3000);
			$(".jquery_list").fadeOut();
			$(".show").hide();
			$(".click_me").fadeIn(2000);

		});
	});
	
})
