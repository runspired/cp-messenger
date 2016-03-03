import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('index', { path: '/' });

  this.route('conversations', function() {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('single', { path: '/:id' });
  });

});

export default Router;
