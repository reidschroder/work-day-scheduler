$(".saveBtn").click(function(){
    var hour = $(this).siblings("textarea").attr("id")

    var text = $(this).siblings("textarea").val()
    
    localStorage.setItem(hour, text)
})

$("textarea").each(function(){
    var textareaHour = parseInt($(this).attr("id"))
    var currentHour = moment().hours()
    if (textareaHour === currentHour) {
        $(this).addClass("present")
    }
    else if (textareaHour < currentHour) {
        $(this).addClass("past")
    }
    else {
        $(this).addClass("future")
    }
    
})
// call local storage to return on refresh

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))




