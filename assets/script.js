// Tell the app to make a variable called search term when search button is clicked
$('search-button').on("click", function(){
    // Search Term will be equal to value inputted into text-field
    var searchTerm =$("#search-input").val();
    // afterwards it iwll empty the input field 
    $("search-input").val("");
    climSearchfun(searchTerm);


})

// climate search function
