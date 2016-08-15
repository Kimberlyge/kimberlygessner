import Ember from 'ember';

const {Component, inject, on, $} = Ember;

export default Component.extend({
	didRender() {
		function showMoreLess() {
			return $(`<a href="mailto:mail@kimberlygessner.com" class="Teaser-wrap Teaser-wrap--last lazyloaded">
				<div>
					<p class="Link">More projects on request.</p>
				</div>
				<figure class="Teaser-media">
					<span></span>
				</figure>
			</a>`);
		};

		const anchors = document.getElementsByClassName("Teaser-wrap");
		const lastAnchor = anchors[(anchors.length - 1)];

		const $text = showMoreLess();

		$($text).insertAfter(lastAnchor)
	}
});
