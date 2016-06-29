/* global TimelineMax, TweenMax, Linear, Bounce */
// import ScrollMagic from 'npm:scrollmagic';
// import gsap from 'npm:gsap';
import Parallax from 'npm:parallax.js';
import Ember from 'ember';

const {Component, $, on} = Ember;

export default Component.extend({
	sticky: on('didRender', function() {
		// var scene    = document.getElementById('.Detail-wrap');
		// var parallax = new Parallax(scene);

		// scene = document.getElementById('.Device');
		// parallax = new Parallax(scene);

		// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
		//
		// var bodywidth = $("body").width();
		// function mouse(evt) {
		// 	//getting mouse dimensions
		// 	var pageX = event.pageX;
		// 	var mobile = 2*(pageX - bodywidth/2)/bodywidth;
		// 	var tablet = 3*(pageX - bodywidth/2)/bodywidth;

		// 	$(".Device--mobile").css({
		// 		transform: 'rotate(' + mobile + 'deg)',
		// 		// transition: 'all 0.2s easing'
		// 	});
		// 	$(".Device--tablet").css({
		// 		transform: 'rotate(-' + tablet + 'deg)',
		// 		// transition: 'all 0.2s easing'
		// 	});
		// }
		// $("body").mousemove(mouse);

		// $('.Detail-wrap').mousemove(function(e){
		// 	var x = (e.pageX - this.offsetLeft) - 100;
		// 	var y = (e.pageY - this.offsetTop) - 100;
		// 	$('.Device--mobile').css({'top': x,'left': y, transition: 'all 2.5s ease-in-oout'});
		// });


		// anm.on();

		// var controller = new ScrollMagic.Controller({
		// 	globalSceneOptions: {
		// 		triggerHook: "onEnter",
		// 	duration: "200%"
		// 	}
		// });
		// // build scenes
		// new ScrollMagic.Scene({
		// 	triggerElement: ".Device--mobile"
		// })
		// .setTween(".Device--mobile > iframe", {
		// 	y: "50%"
		// })
		// .addTo(controller);
	})

});
