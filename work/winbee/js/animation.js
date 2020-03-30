var isScrolling=!1;function throttleScroll(e){0==isScrolling&&window.requestAnimationFrame(function(){scrolling(e),isScrolling=!1}),isScrolling=!0}window.addEventListener("scroll",throttleScroll,!1),document.addEventListener("DOMContentLoaded",scrolling,!1);var listItemsGames=document.querySelectorAll(".list-games .list-games__item"),sectionHeader=document.querySelector(".section-header"),descriptionGameInfoHeader=document.querySelector(".description-game__info-header"),descriptionGameInfoText=document.querySelector(".description-game__info-text"),listItemsAdvantages=document.querySelectorAll(".list-advantages .list-advantages__item"),sociaHeader=document.querySelector(".social__header"),socialDescription=document.querySelector(".social__description"),listSocial=document.querySelector(".list-social_disable"),videoHeader=document.querySelector(".video__header_disable"),listItemsVideo=document.querySelectorAll(".list-video .list-video__item_disable"),appealHeader=document.querySelector(".appeal__header_disable"),appealButton=document.querySelector(".appeal__link-button_disable");function scrolling(e){isFullyVisible(sectionHeader)&&sectionHeader.classList.add("section-header_active");for(var i=0;i<listItemsGames.length;i++){var t=listItemsGames[i];isPartiallyVisible(t)&&t.classList.add("list-games__item_active")}isFullyVisible(descriptionGameInfoHeader)&&descriptionGameInfoHeader.classList.add("description-game__info-header_active"),isPartiallyVisible(descriptionGameInfoText)&&descriptionGameInfoText.classList.add("description-game__info-text_active");for(i=0;i<listItemsAdvantages.length;i++){var s=listItemsAdvantages[i];isPartiallyVisible(s)&&s.classList.add("list-advantages__item_active")}isFullyVisible(sociaHeader)&&sociaHeader.classList.add("social__header_active"),isFullyVisible(socialDescription)&&socialDescription.classList.add("social__description_active"),isFullyVisible(listSocial)&&listSocial.classList.add("list-social_active"),isFullyVisible(videoHeader)&&videoHeader.classList.add("video__header_active");for(i=0;i<listItemsVideo.length;i++){var a=listItemsVideo[i];isPartiallyVisible(a)&&a.classList.add("list-video__item_active")}isFullyVisible(appealHeader)&&appealHeader.classList.add("appeal__header_active"),isFullyVisible(appealButton)&&appealButton.classList.add("appeal__link-button_active")}function isPartiallyVisible(e){var i=e.getBoundingClientRect(),t=i.top,s=i.bottom,a=i.height;return 0<=t+a&&a+window.innerHeight>=s}function isFullyVisible(e){var i=e.getBoundingClientRect(),t=i.top,s=i.bottom;return 0<=t&&s<=window.innerHeight}