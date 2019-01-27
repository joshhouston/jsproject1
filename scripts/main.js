// ********* Getting the date and putting it in the DOM *************
document.getElementById('theDate');

var today = new Date();
var dd =  31//today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
theDate.innerHTML = today;

// *********** Subtracting the start date from current date ****************** //
document.getElementById('dayCounter');
dayCounter.innerHTML = dd - 20;

if (today) {
  console.log(mm + 2);
}
