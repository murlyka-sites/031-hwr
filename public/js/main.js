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

$("[data-toggle-disabled]").change(function() {
	let $btn = $($(this).data("toggle-disabled"))

	if($(this).prop("checked")) {
		$btn.prop("disabled", false);
		$btn.removeClass("button_disabled");
	} else {
		$btn.prop("disabled", true);
		$btn.addClass("button_disabled");
	}
});

});

window.addEventListener("load", function () {

	AOS.init({
		once: true
	});

});
