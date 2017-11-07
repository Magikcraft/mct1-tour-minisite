$(document).ready(function() {
	$('#fullpage').fullpage({
			menu:            '#navbar',
			anchors:        ['0page', '1page', '2page', '3page', '4page', '5page', '6page', '7page', '8page', '9page', '10page'],
			sectionsColor:  ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black' ],
            autoScrolling: false,
            keyboardScrolling: true,
    });

    var hash = getHash();
    if(redirects[hash]) {
        replaceHash(redirects[hash]);
    }
});

function getHash() {
    return window.location.hash.toLowerCase();
}

function replaceHash(hash) {
    window.location.hash = hash;
}

var redirects = {
    "#tutorial-eatfood":"#8page",
    "#tutorial-takeinsulin":"#9page"
};
