import Ember from 'ember';

export default Ember.Route.extend({
	layout: Ember.inject.service(),

	activate() {
		this.set('layout.onIndex', true);
	},
	deactivate() {
		this.set('layout.onIndex', false);
	},
	// Refresh the model hook whenever the category changes.
	queryParams: {
		category: {
			refreshModel: true
		},
		tag: {
			refreshModel: true
		}
	},

	model(params) {
		console.log(params);
		return this.store.query('post', {filter: {category_name: params.category, term: params.tag}, async: true});
	}
});
