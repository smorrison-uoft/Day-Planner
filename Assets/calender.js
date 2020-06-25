$(document).ready(function(){
    $(".savebutton").on("click",function(){
        var activity = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, activity);
        console.log(localStorage)

    });

    $(".row").each(function(){
        var ourHour = $(this).attr("id").split("-")[1];
        console.log(ourHour);
        // var hour = moment().hour();
        // if statement comparing ourHour to moment's hour.
        //addClass of past, present or future
       $(this).children(".description").addClass("present")
       $(this).children(".description").addClass("past")
       $(this).children(".description").addClass("future")
    })
    
   

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    
})
$("#currentDay").text(moment().format('ddd, MMM YYYY'));






