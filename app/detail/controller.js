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
		// init controller
		const elem = $('.Detail');
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0, duration: "200%"}});

		// build scenes
		new ScrollMagic.Scene({triggerElement: elem})
			.setTween(".Detail-wrap > div", {y: "80%", ease: Linear.easeNone})
			.addIndicators()
			.addTo(controller);
	}

});
