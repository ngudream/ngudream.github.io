require([],function(){function t(t,i){var e=i.parentNode;e.lastChild==i?e.appendChild(t):e.insertBefore(t,i.nextSibling)}var i=!1,e=function(){require([yiliaConfig.rootUrl+"js/mobile.js"],function(t){t.init(),i=!0})},a=!1,n=function(){require([yiliaConfig.rootUrl+"js/pc.js"],function(t){t.init(),a=!0})},r={versions:function(){var t=window.navigator.userAgent;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&t.indexOf("KHTML")==-1,mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1||t.indexOf("Mac")>-1,iPad:t.indexOf("iPad")>-1,webApp:t.indexOf("Safari")==-1,weixin:t.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&a)return void $(window).unbind("resize");var t=$(window).width();t>=700?n():e()}),r.versions.mobile||$(window).width()<800?e():n(),resetTags=function(){for(var t=$(".tagcloud a"),i=0;i<t.length;i++){var e=Math.floor(7*Math.random());t.eq(i).addClass("color"+e)}$(".article-category a:nth-child(-n+2)").attr("class","color0")},yiliaConfig.fancybox&&require([yiliaConfig.fancybox_js],function(t){var i=$(".isFancy");if(0!=i.length){for(var e=$(".article-inner img"),a=0,n=e.length;a<n;a++){var r=e.eq(a).attr("src"),o=e.eq(a).attr("alt");if("undefined"==typeof o)var o=e.eq(a).attr("title");var l=e.eq(a).attr("width"),c=e.eq(a).attr("height");e.eq(a).replaceWith("<a href='"+r+"' title='"+o+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+r+"' width="+l+" height="+c+" title='"+o+"' alt='"+o+"'></a>")}$(".article-inner .fancy-ctn").fancybox({type:"image"})}}),yiliaConfig.animate&&(yiliaConfig.isHome?require([yiliaConfig.scrollreveal],function(t){function i(){$(".article").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")?($(this).removeClass("hidden").addClass("show"),$(this).addClass("is-hiddened")):$(this).hasClass("is-hiddened")||$(this).addClass("hidden")})}var e=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn","bounceInRight","bounceInUp","flipInY","rotateIn","rotateInUpLeft","rotateInUpRight","slideInRight","rollIn"],a=e.length,n=e[Math.ceil(Math.random()*a)-1];if(!window.requestAnimationFrame)return $(".body-wrap > article").css({opacity:1}),void(navigator.userAgent.match(/Safari/i)&&($(window).on("scroll",function(){i()}),i()));var r=".body-wrap > article",o=$(".body-wrap > article:first-child");if(o.height()>$(window).height()){var r=".body-wrap > article:not(:first-child)";o.css({opacity:1})}t({duration:100,afterReveal:function(t){$(t).addClass("animated "+n).css({opacity:1})}}).reveal(r)}):$(".body-wrap > article").css({opacity:1})),yiliaConfig.toc&&require(["toc"],function(){});var o=["#6da336","#ff945c","#66CC66","#99CC99","#CC6666","#76becc","#c99979","#918597","#4d4d4d"],l=Math.ceil(Math.random()*(o.length-1));$("#container .left-col .overlay").css({"background-color":o[l],opacity:.5}),$("#container #mobile-nav .overlay").css({"background-color":o[l],opacity:.7});var c=matrix.width,s=matrix.height,d=Array(256).join(1).split(""),f=["rgba(109,163,54,0.05)","rgba(255,148,92, 0.05)","rgba(102,204,102,0.05)","rgba(153,204,153,0.05)","rgba(204,102,102,0.05)","rgba(118,190,204,0.05)","rgba(201,153,121,0.05)","rgba(145,133,151,0.05)","rgba(77,77,77,0.05)"],h=["#ffffff","#000000","#000000","#000080","#000000","#FFFF00","#000000","#0F0","#0F0"],g=function(){matrix.getContext("2d").globalAlpha=1,matrix.getContext("2d").fillStyle=f[l],matrix.getContext("2d").fillRect(0,0,c,s),matrix.getContext("2d").fillStyle=h[l],matrix.getContext("2d").font="10pt Calibri",d.map(function(t,i){text=String.fromCharCode(65+33*Math.random()),x_pos=10*i,matrix.getContext("2d").fillText(text,x_pos,t),d[i]=t>180+1e4*Math.random()?0:t+10})};setInterval(g,33);for(var p=(new Clipboard(".copyspan"),document.getElementsByTagName("pre")),u=$(window).width(),m=0;m<p.length;m++){var y=p[m],b=document.createElement("span");b.className="copyspan",b.style.width="100%",b.style.textAlign="right";var x=document.createElement("i");x.style.cursor="pointer",x.style.float="right",x.style.marginRight="10px",x.className="fa fa-clipboard",x.setAttribute("title","●'◡'●点我复制"),b.setAttribute("data-clipboard-text",y.innerText),b.appendChild(x);var s=y.offsetHeight;u>700?s>100&&(x.style.marginTop="5px",y.insertBefore(b,y.firstChild)):s>100&&t(b,y.firstChild)}for(var C=document.getElementsByClassName("body-wrap"),m=0;m<C.length;m++){var w=C[m];u>=1900?w.style.maxWidth="85em":u>=1550&&u<1900&&(w.style.maxWidth="70em")}$("table").wrap("<div class='table-area'></div>"),$(document).ready(function(){$("#comments").length<1&&$("#scroll > a:nth-child(2)").hide()}),(yiliaConfig.isArchive||yiliaConfig.isTag||yiliaConfig.isCategory)&&$(document).ready(function(){$("#footer").after("<button class='hide-labels'>TAGS</button>"),$(".hide-labels").click(function(){$(".article-info").toggle(200)})}),$("ul > li").each(function(){function t(t,i){var e=["disabled",""];r.html(r.html().replace(t,"<input type='checkbox' "+i+" "+e[1]+" >"))}var i={field:this.textContent.substring(0,2),check:function(t){var i=new RegExp(t);return this.field.match(i)}},e=["[ ]",["[x]","checked"]],a=i.check(e[1][0]),n=i.check(e[0]),r=$(this);(a||n)&&(this.classList.add("task-list"),a?(t(e[1][0],e[1][1]),this.classList.add("check")):t(e[0],""))})});