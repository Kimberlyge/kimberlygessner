import Ember from 'ember';

export default Ember.Route.extend({
	layout: Ember.inject.service(),

	activate() {
		this.set('layout.onAbout', true);
	},
	deactivate() {
		this.set('layout.onAbout', false);
	}
});
