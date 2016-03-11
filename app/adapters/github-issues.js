import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  find: function(store, type, id, snapshot) {
    return Ember.$.getJSON('https://api.github.com/repos/npm/npm/issues/${id}')
    .then(function(data) {
      return {
        issue: {
          id: data.number,
          login: data.login,
          avatarUrl: data.avatar_url
        }
      }
    });
  }

});
