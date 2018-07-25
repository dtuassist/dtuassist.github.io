$(document).ready(function(){

	console.log("Hello World");
	
	var open = 0;
	
	$('.dropb').click(function(){
		if(open==0){
		$('.tags').css('max-height', '110000px');
			open = 1;
		}
		else{
			$('.tags').css('max-height', '0px');
			open = 0;
		}
	});


	$(window).scroll(function(){

		i = $(window).scrollTop();

		if(i>0)
		{
			$('header').css('background','url(cover.png)');
			$('header').css('border-bottom','4px solid #42526217');
		}

		else if(i==0)
		{
			$('header').css('background','');
			$('header').css('border-bottom','0px');
		}

	});
	
	$('.link1').click(function(){
		x = $('.home').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link2').click(function(){
		x = $('.societies').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link3').click(function(){
		x = $('.academics').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link4').click(function(){
		x = $('.events').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});

	$('.link5').click(function(){
		x = $('.placements').offset().top;
		console.log(x);
		$('html,body').animate({scrollTop: x},1000);
		$('.tags').css('max-height', '0px');
			open = 0;
	});
});
