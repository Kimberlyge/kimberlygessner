/* global TimelineMax, TweenMax, Linear, Bounce */
import ScrollMagic from 'npm:scrollmagic';
import gsap from 'npm:gsap';
import Ember from 'ember';

const {Component, $, on} = Ember;

export default Component.extend({
	sticky: on('didRender', function() {
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onEnter",
			duration: "200%"
			}
		});
		// build scenes
		new ScrollMagic.Scene({
			triggerElement: ".Device--mobile"
		})
		.setTween(".Device--mobile > iframe", {
			y: "50%"
		})
		.addTo(controller);
	})

});
