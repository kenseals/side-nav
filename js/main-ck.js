jQuery(function(e){sideNav()});sideNav=function(){function i(){state.open===!1?this.open():this.close()}function s(e){return e.substr(7,e.length-8).split(", ")}var e=$("#burger-btn"),t=$(".side-nav"),n=$(".app"),r=t.width();$content=$(".content-pane");state={open:!1};this.open=function(){console.log("open");$("body").removeClass("nav-closed").addClass("nav-open");if(Modernizr.csstransforms){n.css("transform","translate("+r+"px,0)");n.css("-webkit-transition","0.2s ease-out")}else n.css("left",r+"px");$content.unbind("tap drag dragend");$content.hammer().on("tap drag dragend",function(e){if(e.type==="tap"){console.log("tap!");i()}if(e.type==="dragend"){console.log("released");if(Math.abs(e.gesture.deltaX)>r/2){console.log("more than 50%");if(Modernizr.csstransforms){n.css("transform","translate(0px,0)");n.css("-webkit-transition","0.2s ease-out")}else n.css("left","0px");i()}else if(Modernizr.csstransforms){n.css("transform","translate("+r+"px,0)");n.css("-webkit-transition","0.2s ease-out")}else n.css("left",r+"px")}if(e.type==="drag"){e.gesture.preventDefault();var t=e.gesture.center.pageX,s=e.gesture.startEvent.center.pageX,o=t-(s-r);u(o);function u(e){Modernizr.csstransforms3d?n.css("transform","translate3d("+e+"px,0,0)"):Modernizr.csstransforms?n.css("transform","translate("+e+"px,0)"):n.css("left",e+"px");n.css("-webkit-transition","0s ease-in")}}});state.open=!0};this.close=function(){console.log("close");$("body").removeClass("nav-open").addClass("nav-closed");if(Modernizr.csstransforms){n.css("transform","translate(0px,0)");n.css("-webkit-transition","0.2s ease-out")}else n.css("left","0px");$content.unbind("tap drag dragend");state.open=!1};this.listen=function(){var t=Hammer(document.body,{drag_lock_to_axis:!0});e.hammer().on("tap",function(e){i()});console.log("listening")};this.listen()};