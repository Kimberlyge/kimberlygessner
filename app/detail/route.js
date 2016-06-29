import Ember from 'ember';

export default Ember.Route.extend({
	layout: Ember.inject.service(),

	activate() {
		this.set('layout.onDetail', true);
	},
	deactivate() {
		this.set('layout.onDetail', false);
	},

	model(params) {
		// console.log(params);
		return this.store.query('post', {
			filter: {name: params.slug}
		}).then(models => models.get('firstObject'));
	}
});
