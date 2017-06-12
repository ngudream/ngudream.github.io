
function main() {

(function () {
   'use strict';

   // Testimonial slider
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

  	$(document).ready(function() {
  	    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

	// skills chart
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;

	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		if(top<-400){
			if(index==0){

				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});

				}
			index++;
		}

	})
	//console.log(nagativeValue)
	});

	// counterUp
	$(document).ready(function( $ ) {
		if(!/mobile/gi.test(window.navigator.userAgent)){
			var videoBgStr = '<video id="intro-video" class="video" muted="" loop="" autoplay="">'+
			'<source src="http://7xljz9.com1.z0.glb.clouddn.com/demo-min.mp4" type="video/mp4">'+
		  '</video>';
		}
		var width = $(window).width();//1920X1080 ,1366X768,1440X900,1600X900
		$(videoBgStr).appendTo('.intro');
		var marginLeft = 0;
		var marginTop = 0;
		if(width >= 1900){
			marginLeft = 270;
			marginTop = 246;
			$("#enter_div_id").css("margin-top", "72px");
			$("#enter_div_id").show();
		} else if(width >= 1550){
			marginLeft = 115;
			marginTop = 106;
		} else if(width >= 1420){
			marginLeft = 50;
      var isSafari = window.navigator.userAgent.indexOf("Safari") > -1 && window.navigator.userAgent.indexOf("Chrome") < 1 ; //判断是否Safari
      if(isSafari){
        marginTop = 120;
      } else {
        marginTop = 106;
      }
		}
		$("#intro-video").css("margin-left", marginLeft).css("margin-top", marginTop);
		var aud = document.getElementById("intro-video");
		aud.oncanplaythrough = function() {
			$("#v4-pre-loaded").hide();
      $("#section_5_id").css("background", "url('./img/deng.jpg')").css("background-size", "100% 100%");
      $("#footer_span_id").css("color", "#B5B5B5")
		};
		$('.overwatch-warp').fadeOut();
		if($("span.count").length > 0){
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			    time: 1000 // the speed time in ms
			});
		}
	});

}());


}
main();
