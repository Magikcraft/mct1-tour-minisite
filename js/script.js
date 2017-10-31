$(document).ready(function() {
	$('#fullpage').fullpage({
			menu: '#navbar',
			anchors: ['homePage', 'secondPage', 'thirdPage', 'fourthPage'],
			sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', 'red'],
            autoScrolling: false,
            keyboardScrolling: true,
	});
});