import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('issues');
  this.route('issue-details', {path: '/issue-details/:issueId'});
});

export default Router;

// export default Ember.Route.extend({
//   model: function(params, transition) {
//     return Ember.RSVP.hash({
//       user: this.get('store').find('user', params.userId),
//     })
//   }
// })
