import Ember from 'ember';

export function formatLabels(label) {
  let formattedLabel = "";
  for (var i=0; i<label[0].length; i++){
    formattedLabel += '<button class="btn-success btn-xs labels">' + label[0][i]["name"] + '</button>';
  }
  return new Ember.Handlebars.SafeString(formattedLabel);
}

export default Ember.Helper.helper(formatLabels);
