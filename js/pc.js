define([],function(){var t=function(){var t=$(".tips-box");return{show:function(){t.removeClass("hide")},hide:function(){t.addClass("hide")},init:function(){}}}(),i=function(t){var i=$(".switch-wrap"),e=["-webkit-transform: translate(-"+100*t+"%, 0);","-moz-transform: translate(-"+100*t+"%, 0);","-o-transform: translate(-"+100*t+"%, 0);","-ms-transform: translate(-"+100*t+"%, 0);","transform: translate(-"+100*t+"%, 0);"];i[0].style.cssText=e.join(""),$(".icon-wrap").addClass("hide"),$(".icon-wrap").eq(t).removeClass("hide")},e=function(){var e=$("#myonoffswitch"),n=$(".second-part"),o=$(".first-part");e.click(function(){e.hasClass("clicked")?(e.removeClass("clicked"),n.removeClass("turn-left"),o.removeClass("turn-left")):(e.addClass("clicked"),n.addClass("turn-left"),o.addClass("turn-left"),resetTags())});var c=!1,s=!1;$(".icon").bind("mouseenter",function(){c=!0,t.show()}).bind("mouseleave",function(){c=!1,setTimeout(function(){s||t.hide()},100)}),$(".tips-box").bind("mouseenter",function(){s=!0,t.show()}).bind("mouseleave",function(){s=!1,setTimeout(function(){c||t.hide()},100)}),$(".tips-inner li").bind("click",function(){var e=$(this).index();3==e?$("#my_signature").length<=0&&$("#bee_div").append("<img id='my_signature' src='/img/bee.png' />"):4==e&&window.open("/footprint/"),4!=e&&(i(e),t.hide())}),$(".QQ").bind("click",function(){$("#my_qq").length<=0&&($("#qq_div").append("<img id='my_qq' src='/img/qq.png' style='cursor:pointer; margin-top:-8px;' />"),$("#my_qq").bind("click",function(){$("#my_wechat").length<=0&&($("#wechat_div").append("<img id='my_wechat' src='/img/wechat.png' style='cursor:pointer; margin-left:12px;' />"),$("#my_wechat").bind("click",function(){i(5),t.hide()})),i(6),t.hide()})),i(5),t.hide()}),$(".WeChat").bind("click",function(){$("#my_wechat").length<=0&&($("#wechat_div").append("<img id='my_wechat' src='/img/wechat.png' style='cursor:pointer; margin-left:12px;' />"),$("#my_wechat").bind("click",function(){$("#my_qq").length<=0&&($("#qq_div").append("<img id='my_qq' src='/img/qq.png' style='cursor:pointer; margin-top:-8px;' />"),$("#my_qq").bind("click",function(){i(6),t.hide()})),i(5),t.hide()})),i(6),t.hide()})};return function(){yiliaConfig.isPost&&($(".post-list").addClass("toc-article"),$("#post-nav-button > a:nth-child(2)").click(function(){$("#post-nav-button .fa-bars,#post-nav-button .fa-times").toggle(),$(".post-list").toggle(300),$(".toc").length>0?$("#toc, #tocButton").toggle(200,function(){$(".switch-area").is(":visible")&&($("#toc, .switch-btn, .switch-area").toggle(),$("#tocButton").attr("value",yiliaConfig.toc[0]))}):$(".switch-btn, .switch-area").fadeToggle(300)}))}(),yiliaConfig.jquery_ui[0]&&!function(){require([yiliaConfig.jquery_ui[1]],function(){var t=function(t,i){var e=document.createElement("link");e.rel="stylesheet",e.href=t;var n=document.querySelector("head");n.insertBefore(e,n.childNodes[i])};t(yiliaConfig.jquery_ui[2],25),$().tooltip&&(navigator.userAgent.match(/(iPhone|iPad|Android|ios|PlayBook|Touch)/i)||($("[title]").tooltip({show:{effect:"blind",delay:250,duration:55}}),$("#scroll").tooltip({show:{effect:"clip",delay:600,duration:50}}),$("#tocButton, #comments").tooltip({show:{delay:1200}}),$(".ds-replybox form").off("tooltip"),$("#post-nav-button").tooltip({show:{effect:"clip",delay:280,duration:65}}),$("#post-nav-button > a:nth-child(2)").tooltip({show:{delay:1500}}),$(".social").tooltip({show:{effect:"scale",delay:350,duration:70}})))})}(),yiliaConfig.search&&!function(){require([yiliaConfig.rootUrl+"js/search.js"],function(){var t=document.querySelector("#local-search-input"),i=$("#toc, #tocButton, .post-list, #post-nav-button a:nth-child(2)"),e=$("#search-form .button"),n=$("#local-search-result"),o=function(){var t="search.xml",i=yiliaConfig.rootUrl+t;searchFunc(i,"local-search-input","local-search-result")},c=t.getAttribute("searchonload");yiliaConfig.search&&"true"===c?o():t.onfocus=function(){o()};var s=function(){i.css("visibility","hidden"),e.show()};t.oninput=function(){s()},t.onkeydown=function(){if(13==event.keyCode)return!1},resetSearch=function(){i.css("visibility","initial"),n.html(""),document.querySelector("#search-form").reset(),e.hide(),$(".no-result").hide(),$("#left_col_div").css("overflow-y","hidden")},$(function(){$("#local-search-input").bind("input propertychange",function(){$("#result").html($(this).val().length+" characters");var t=$(this).val().length;if(t<=0){var i=document.getElementById("search-delete");i.click()}})}),n.bind("DOMNodeRemoved DOMNodeInserted",function(t){$(t.target).text()?($(".no-result").hide(),$("#left_col_div").css("overflow-y","auto").css("overflow-x","hidden")):($(".no-result").show(200),$("#left_col_div").css("overflow-y","hidden"))})})}(),{init:function(){e(),t.init()}}});