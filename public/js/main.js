document.addEventListener("DOMContentLoaded", function() {

let scroll = new SmoothScroll('a[data-scroll]');

$('[data-fancybox]').fancybox({
	autoFocus: false
})

$('[data-to-popup]').click(function () {
	$.fancybox.close();
	$.fancybox.open([
	{
		src: $(this).attr('href')
	}],
	{
		autoFocus: false
	});
	return false;
})

svg4everybody();
$('select').selectric();
});

window.addEventListener("load", function () {

	AOS.init({
		once: true
	});

});
