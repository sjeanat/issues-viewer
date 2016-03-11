import Ember from 'ember';

export function formatDate(date) {
  let splitDate = date[0].split("T"),
      day = splitDate[0].split("-"),
      time = splitDate[1].split(/:|Z/g);
      if (time[0]>12) {
        time[0] = time[0]-12;
        time[2] += "pm";
      }
      else{
        time[2] += "am";
      }
      time = time.join(":");
      let formattedTime = time.substring(0, time.length-1),
          formattedDay = day[1] + "/" + day[2] + "/" + day[0],
          formattedDate = formattedDay + " " + formattedTime;
  return formattedDate;
}

export default Ember.Helper.helper(formatDate);
