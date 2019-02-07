export function getFlightByNum(flights, num) {
  var i;
  for (i = 0; i < flights.length; i++) {
      if(flights[i]['flight'] === num.join())
      return flights[i]
  }}

export function getFlightByDate(flights, date) {
    var i;
    for (i = 0; i < flights.length; i++) {
        if(flights[i]['date'] === date.join())
        return flights[i]
    }}