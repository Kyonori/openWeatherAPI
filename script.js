var cityTerm

$("#Go").click(function() {

    cityTerm = $("#input").val();

    $.getJSON(

        "http://api.openweathermap.org/data/2.5/weather?q=" + cityTerm + "&units=imperial&appid=1a8973d871a7d4763499d364d0a781ed",

        function(response) {
            console.log(response);
            
        }


    
)});