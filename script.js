var today = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').html(today)


var currentHour = moment().format('h');
console.log(currentHour)

$('.saveBtn').on('click', function () {
    var timeBlock = $(this).parent().attr('id')
    var textInput = $(this).siblings('textarea').val()
    localStorage.setItem(timeBlock, textInput)
})

$('#time9 textarea').val(localStorage.getItem("time9"))



// Local Storage

// ar key = "stringkey";
// var value = "value";
// v
// localStorage.setItem(key, value);
// console.log(localStorage.getItem("stringkey"));

// // Can only store Strings
// localStorage.setItem(key, JSON.stringify(value));
// console.log(JSON.parse(localStorage.getItem("stringkey")));