var apiKey = "9e39551439ca30e9ab3c627e60e6e14a";

// Tell the app to make a variable called search term when search button is clicked
$("#search-button").on("click", function(){
    // Search Term will be equal to value inputted into text-field
    var searchTerm =$("#search-input").val();
    // afterwards it will empty the input field 
    $("#search-input").val("");
    climSearchfun(searchTerm);
    makeHistoryList(searchTerm);

})
// function to take 
function makeHistoryList(){
    var listItem = $('<li>').addClass("list-group-item history-item").text(searchTerm);
    $('#past-search').append(listItem);
    makeHistoryList();
}
// climate search function
function climSearchfun(){
    // fetch the API to the searched city with apiKey
    var uRl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&appid=9e39551439ca30e9ab3c627e60e6e14a&units=imperial";
    fetch(uRl);
}
// // weather API userkey 9e39551439ca30e9ab3c627e60e6e14a gonna need it to call the weather details