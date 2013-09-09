$(document).ready(function(){
	$('#about').click(function(){
		animate("About", "about.html");
	});
	$('#projects').click(function(){
		animate("Projects", "projects.html");
	});
	$('#me').click(function(){
		animate("ME", "me.html");
	});
	$('#code').click(function(){
		animate("Code", "code.html");
	});
});
function animate(headertext, page){
	$('#header').text(headertext);//so the animation header text reads what you clicked on.
	$('#name').animate({left:"+=600px",
		fontSize:"50px"}, 700);
	$('#header').animate({fontSize:"40px"}, 700);
	$('#line').animate({width:"1000px"}, 700);
	$('.button').animate({marginTop:"-=140px",
		width:"100px",
		height:"50px",
		fontSize:"25px",
		borderWidth:"3px",
		lineHeight:"50px"}, 700,
		function(){		//after the animation runs then it directs the page.
			document.location.href = page;
	});
}
