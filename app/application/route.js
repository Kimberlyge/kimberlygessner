import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
	layout: Ember.inject.service(),

	model(params) {
		return this.store.query('post', {filter: {category_name: params.category, term: params.tag}});
	}
});
