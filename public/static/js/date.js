var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');
var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

var test = document.createElement('input');

try {
  test.type = 'date';
} catch (e) {
  console.log(e.description);
}

if(test.type === 'text') {
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  var dayNum;

  if(month === '1' | month === '3' | month === '5' | month === '7' | month === '8' | month === '10' | month === '12') {
    dayNum = 31;
  } else if(month === '4' | month === '6' | month === '9' | month === '11') {
    dayNum = 30;
  } else {
  var isLeap = new Date(year, 1, 29).getMonth() == 1;
  isLeap ? dayNum = 29 : dayNum = 28;
  }

  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  if(previousDay) {
    daySelect.value = previousDay;

    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  var date = new Date();
  var year = date.getFullYear();

  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

var previousDay;

daySelect.onchange = function() {
  previousDay = daySelect.value;
}