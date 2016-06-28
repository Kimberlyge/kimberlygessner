/* global TimelineMax, TweenMax, Linear, Bounce */
import gsap from 'npm:gsap';
import {TweenMax} from 'npm:gsap';
import ScrollMagic from 'npm:scrollmagic';
import gsapAnimation from 'npm:scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import ScrollMagicIndicators from 'npm:scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import Ember from 'ember';

const {$} = Ember;

export default Ember.Controller.extend({

	init() {
		// console.log('init');
		// $(() => {
		// 	$('.Device').fadeIn(500);
		// });

		// init controller
		const pipe = $('.Detail');
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0, duration: "200%"}});

		// build scenes
		new ScrollMagic.Scene({triggerElement: pipe})
			.setTween(".Detail-wrap", {y: "80%", ease: Linear.easeNone})
			.addIndicators()
			.addTo(controller);
	}

});
