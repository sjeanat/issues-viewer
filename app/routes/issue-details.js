import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      details: Ember.$.getJSON(`https://api.github.com/repos/npm/npm/issues/${params.issueId}`),
      comments: Ember.$.getJSON(`https://api.github.com/repos/npm/npm/issues/${params.issueId}/comments`)
    });
  }
});
