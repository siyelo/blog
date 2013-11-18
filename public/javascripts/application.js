$(document).ready(function(){

	$(".show-comments").on('click', function(e){
		e.preventDefault();
		$('#disqus_thread').fadeToggle();
	});
});