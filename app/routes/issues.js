import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend({

  queryParams: {
    currentPage: {
      // Opt into full transition
      refreshModel: true
    },
    search: {
      // Opt into full transition
      refreshModel: true
    }
  },

  model: function(params) {
    var page = params.currentPage,
        results="[]",
        pagesUrl = 'https://api.github.com/repos/npm/npm',
        url = 'https://api.github.com/repos/npm/npm/issues?page=' + page;
    url = Ember.$.getJSON(url);
    pagesUrl = Ember.$.getJSON(pagesUrl);
    return Ember.RSVP.hash({
              issues: url,
              issuesList: url,
              searchResults: results,
              totalPages: pagesUrl,
              currentPage: page
            })
  }
  // model: function(params) {
  //   var end = (params.currentPage)*10,
  //       start = end-10,
  //       url = Ember.$.getJSON(`https://api.github.com/repos/npm/npm/issues\?state\=all`);
  //   if (params.search!="") {
  //     var searchPhrase = params.search;
  //     // this.transitionTo('/issues/?search='+params.search);
  //     return url.then(function(data){
  //       var searchResults = [];
  //       for (var i=0; i<data.length; i++) {
  //         var result = data[i];
  //         if ((result.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1) || (result.body.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1) || (result.user.login.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1)) {
  //           searchResults.push(result);
  //         }
  //       }
  //       data = searchResults;
  //       var results = searchResults.length;
  //       if (data.length>10) {
  //         data = data.slice(start, end);
  //         return Ember.RSVP.hash({
  //           issues: url,
  //           issuesList: data,
  //           searchResults: results
  //         })
  //       }
  //       return Ember.RSVP.hash({
  //         issues: url,
  //         issuesList: data,
  //         searchResults: results
  //       })
  //     });
  //   }
  //   else{
  //     return url.then(function(data){
  //       return Ember.RSVP.hash({
  //         issues: url,
  //         issuesList: data.slice(start,end)
  //       })
  //     });
  //   }
  //   // console.log(issues.find({params.currentPage}));
  //   // return url.then(function(data){
  //   //   return Ember.RSVP.hash({
  //   //     issues: url,
  //   //     issuesList: data.slice(start,end)
  //   //   })
  //   // });
  // },
  // actions: {
  //       pagination(currentPage) {
  //         console.log(this.get('currentPage'))
  //           this.transitionTo({
  //               queryParams: {
  //                   currentPage: currentPage
  //               }
  //           });
  //       }
  //   }
});
