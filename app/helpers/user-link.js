import Ember from 'ember';

export function userLink(text, truncate) {
  if (text!="") {
    let text_body = text;
    if (truncate.truncate=="name") {
      text_body = "@" + text_body;
      text_body = text_body.split(" ");
    }
    if (truncate.truncate == "title" && text_body[0].length > 70) {
      text_body = jQuery.trim(text_body).substring(0, 70) + "...";
      text_body = text_body.split(" ");
    }
    if (truncate.truncate == "body" && text_body[0].length > 140) {
      // text_body = jQuery.trim(text_body).substring(0, 140).split(" ").slice(0, -1).join(" ") + "...";
      text_body = jQuery.trim(text_body).substring(0, 140) + "...";
      text_body = text_body.split(" ");
    }

    for (var term in text_body) {
      if (text_body[term][0]=="@") {
        let tmp = text_body[term];
        text_body[term]="<a href='https://github.com/" + tmp.substring(1) + "'>" + tmp + "</a>";
      }
    }
    let linked_text_body = text_body.join(" ");
    return new Ember.Handlebars.SafeString(linked_text_body);
  }
}
export default Ember.Helper.helper(userLink);
