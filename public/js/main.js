
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

svg4everybody();
// 
// $("[data-svg-fallback]").each(function() {
// 	let src = $(this).attr('src').replace('.svg', '.png');
//
// 	$(this).attr('src', src);
//
// });
