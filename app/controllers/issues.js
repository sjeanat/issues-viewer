import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['currentPage', 'search'],
  search: "",
  currentPage: 1,
  old: "",
  show: true,
  totalPageNums: 0,
  totalPages: 0,
  issues: "",
  getIssues: function() {
    var issues = this.get('model').issues,
        formattedIssues = [],
        searchTerms = this.get('search'),
        old = this.get('old');
    if (searchTerms!="") {
      this.set('show', false);
    }
    if (searchTerms=="") {
      this.set('show', true);
    }
    if (searchTerms!=old) {
      this.set('old', searchTerms);
      this.set('currentPage', 1)
      for (var i=0; i<30; i++) {
        if ((issues[i]['title'].toLowerCase().indexOf(searchTerms.toLowerCase()) > -1)||(issues[i]['body'].indexOf(searchTerms.toLowerCase()) > -1)||(issues[i]['user']['login'].indexOf(searchTerms.toLowerCase()) > -1)) {
          formattedIssues.push(issues[i]);
        }
      }
    }
    else {
      this.set('show', true);
      for (var j=0; j<30; i++) {
        formattedIssues.push(issues[i]);
      }
    }
    this.set('issues', formattedIssues);
    // var pages = [];
    // this.set('listIssues', listIssuesUpdate);
    // for (var i=0; i<this.get('numPages'); i++) {
    //   pages.push(i+1);
    // }
    var model = this.get('model'),
        currentPage = this.get('currentPage'),
        totalPages = Math.ceil((model.totalPages['open_issues_count'])/30),
        totalPageNums;
        if (currentPage==1) {
          totalPageNums = [currentPage, currentPage+1];
        }
        if (currentPage==totalPages) {
          totalPageNums = [currentPage-1, currentPage];
        }
        if ((currentPage > 1) && (currentPage < totalPages)){
          totalPageNums = [currentPage-1, currentPage, currentPage+1];
        }
    this.set('totalPages', totalPages);
    this.set('totalPageNums', totalPageNums);
}.property('search', 'currentPage', 'model', 'show'),

  showNums: function() {
    return this.get('show')===true;
  }.property('show'),

  actions: {
    next() {
      var current = this.get('currentPage');
      var next = current+1;
      if (current<this.get('totalPages')) {
        this.set('currentPage', next);
      }
    },
    prev() {
      var current = this.get('currentPage');
      var prev = current-1;
      if (current>1) {
        this.set('currentPage', prev);
      }
    },
    pageJump(number) {
      this.set('currentPage', number);
    }
  }

});
