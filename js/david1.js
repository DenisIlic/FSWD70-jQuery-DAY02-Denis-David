$(document).ready(function(){

	$('.img1').on('click', function(){
		document.getElementById('result').innerHTML = 'You clicked on the bell';

	})

	$('.img2').on('click', function(){
		document.getElementById('result').innerHTML = 'You clicked on the santa';
	})

	$('.img3').on('click', function(){
		document.getElementById('result').innerHTML = 'You clicked on the gift';
	})
})



$(document).ready(function(){
	$('.img2').on('click', function(){
		$('.img2').attr('src', 'img/santa.png').hide('slow');
	})
})