var today = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').html(today)

// console.log(currentHour)

$('.saveBtn').on('click', function () {
    var timeBlock = $(this).parent().attr('id')
    var textInput = $(this).siblings('textarea').val()
    localStorage.setItem(timeBlock, textInput)
})


var currentHour = moment().format('h');

function timeUpdate() {
    var nowTime = moment().hour();
    console.log(nowTime)

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("time")[1])


        if (timeBlock < nowTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === nowTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

$('#time9 textarea').val(localStorage.getItem("time9"))
$('#time10 textarea').val(localStorage.getItem("time10"))
$('#time11 textarea').val(localStorage.getItem("time11"))
$('#time12 textarea').val(localStorage.getItem("time12"))
$('#time13 textarea').val(localStorage.getItem("time13"))
$('#time14 textarea').val(localStorage.getItem("time14"))
$('#time15 textarea').val(localStorage.getItem("time15"))
$('#time16 textarea').val(localStorage.getItem("time16"))
$('#time17 textarea').val(localStorage.getItem("time17"))


timeUpdate()