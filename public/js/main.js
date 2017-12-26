
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

AOS.init();
