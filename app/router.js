import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function () {
  this.route('index', {path: '/'});
  // this.route('detail', {path: '/detail/:slug'});
  this.route('about', {path: 'about'});

  this.route('404', {path: '/*wildcard'});
});

export default Router;
