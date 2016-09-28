import Ember from 'ember';

const {on} = Ember;

export default Ember.Controller.extend({
	init: on('didInsertElement', function() {

	})
});
