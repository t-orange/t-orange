$(document).ready(function(){function i(){window.matchMedia("(max-width: 767px)").matches?($(".header").find(".header-img ").insertAfter(".header-info .page-header"),$(".description-game__info-text").insertAfter(".description-game .list-advantages")):($(".header-info").find(".header-img").insertAfter(".header .header-info"),$(".description-game__info-text").insertAfter(".description-game__info .description-game__info-header"))}i(),window.addEventListener("resize",i);var e=$(".list-advantages"),t=$(".list-video");function d(i,e){$(window).on("load resize",function(){if(!(767<$(window).width()))return i.hasClass("slick-initialized")?void 0:i.slick(e);i.hasClass("slick-initialized")&&i.slick("unslick")})}d(e,{mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1}),d(t,{mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:480,settings:{slidesToShow:1}}]}),$(function(){$(".list-video__youtube").each(function(){$(this).css("background-image","url(http://i.ytimg.com/vi/"+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{class:"play"})),$(document).delegate("#"+this.id,"click",function(){var i="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(i+="&"+$(this).data("params"));var e=$("<iframe/>",{frameborder:"0",src:i,width:$(this).width(),height:$(this).height()});$(this).replaceWith(e)})})})}),$(window).on("load",function(){$preloader=$(".preloader"),$loader=$preloader.find(".preloader__img"),$loader.fadeOut(),$preloader.delay(350).fadeOut("slow"),$("body").removeClass("body_fixed")});