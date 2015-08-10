

// globals
window.log = console.log.bind(console);
window.$body = $(document.body);
window.media = {sm: 768, md: 992, lg: 1200};

window.getMedia = function() {
	var width = innerWidth;
	if (width >= media.lg)
		return 'lg';
	if (width >= media.md)
		return 'md';
	if (width >= media.sm)
		return 'sm';
	else
		return 'xs';

}


var $intro = $('.filter, .nav, .profile, .expr, .github, .blog');

$intro.addClass('intro in')
//$intro.addClass('in');

$('.filter').on('transitionend webkitTransitionEnd', function() {
	$('.filter').off('transitionend webkitTransitionEnd');
	$intro.removeClass('intro');
})


