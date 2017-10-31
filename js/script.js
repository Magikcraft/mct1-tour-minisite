$(document).ready(function() {
	$('#fullpage').fullpage({
			menu: '#menu',
			anchors: ['firstPage', 'secondPage', '3rdPage', 'fourthPage'],
			sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', 'red'],
			autoScrolling: false,
	});
});