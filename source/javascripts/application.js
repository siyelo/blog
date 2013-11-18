$(document).ready(function(){
	alert(1);
	$(".show-comments").on('click', function(e){
		e.preventDefault();
		$('#disqus_thread').fadeToggle();
	});
});