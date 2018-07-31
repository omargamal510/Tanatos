/* Start POPUP nav */

$(document).ready(function() {
    $('.menu').click(function () {
        $('.popup').fadeIn();
    });

    $('#times').click(function () {
        $('.popup').fadeOut();
    })
});


/* End Popup nav */



/* Start Bx-slider */

$(document).ready(function () {

    $('.bxslider').bxSlider({
    controls:false,
    pager: true,
    pause:4000,
    auto: true,
    infiniteLoop : true,
    touchEnabled: false,
    autoDirection: 'next',    
});

});

/* End Bx-slider */


/* Start Our Team */

var team1 = document.getElementById('team1'),
    team2 = document.getElementById('team2'),
    team3 = document.getElementById('team3'),
    team4 = document.getElementById('team4'),
    dot1 = document.getElementById('dot1'),
    dot2 = document.getElementById('dot2'),
    dot3 = document.getElementById('dot3'),
    dot4 = document.getElementById('dot4'),
    team = document.querySelector('.team');

 function dot1color() {
     'use strict';
     dot1.setAttribute('style', 'background-color:#f7600e');
 }

 function dot1Uncolor() {
    'use strict';
    dot1.setAttribute('style', 'background-color:#CCC');
}

function dot2color() {
    'use strict';
    dot2.setAttribute('style', 'background-color:#f7600e');
}

function dot2Uncolor() {
   'use strict';
   dot2.setAttribute('style', 'background-color:#CCC');
}

function dot3color() {
    'use strict';
    dot3.setAttribute('style', 'background-color:#f7600e');
}

function dot3Uncolor() {
   'use strict';
   dot3.setAttribute('style', 'background-color:#CCC');
}

function dot4color() {
   'use strict';
   dot4.setAttribute('style', 'background-color:#f7600e');
}

function dot4Uncolor() {
  'use strict';
  dot4.setAttribute('style', 'background-color:#CCC');
}


/* End Our Team */



/* Start Scroll functions */

var feat = document.querySelector('.feat');
var feat1 = document.querySelector('.feat1');
var feat2 = document.querySelector('.feat2');
var feat3 = document.querySelector('.feat3');
var feat4 = document.querySelector('.feat4');
var ourWorks = document.querySelector('.our-works');
var contact = document.querySelector('.contact');

window.onscroll = function () {
    'use strict';
    if (pageYOffset >= feat.offsetTop - 120) {
        feat1.setAttribute('style', 'opacity:1;margin-left:0;');
        feat2.setAttribute('style', 'opacity:1;margin-top:80px;');
        feat3.setAttribute('style', 'opacity:1;margin-top:80px;');
        feat4.setAttribute('style', 'opacity:1;margin-right:0;');
    }

    if (pageYOffset >= ourWorks.offsetTop - 150 ) {
        ourWorks.setAttribute('style', 'opacity:1;');
    }

    if (pageYOffset >= team.offsetTop - 150) {
        team.setAttribute('style', 'opacity:1;');
    }

};

/* End scroll functions */
