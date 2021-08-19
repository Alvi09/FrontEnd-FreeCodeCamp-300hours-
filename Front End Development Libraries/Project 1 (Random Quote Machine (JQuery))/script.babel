var currQuote = '';
var currAuthor = '';
let parsedData;

const color_Array = [
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function Parse_List_of_Quotes() {
  return $.ajax({
    url: "https://type.fit/api/quotes",
    success: function(jsonResult) {
      if (typeof jsonResult === 'string') {
        parsedData = JSON.parse(jsonResult);
      }
    }
  })
}

function get_Random_Quote() {
  return parsedData[Math.floor(Math.random() * parsedData.length)];
}

function check_if_avail_auth(text, author) {
    if (text && author != null) {
      $("#span-text").text(text);
      $("#span-author").text(author);
    }
    else {
      $("#span-text").text(text);
      $("#span-author").text("Unknown person");
    }
}

function updateQuote_Author() {
  let getRandomQuote = get_Random_Quote();
  let currQuote = getRandomQuote.text;
  let currAuthor = getRandomQuote.author;
  
  // Makes opacity go from 0 to 1 and updates text (i.e can't see text twice)
  $("#text").animate({opacity: 0}, 450, function() {
    $(this).animate({opacity: 1}, 450);
      check_if_avail_auth(currQuote, currAuthor)
    });
  
  $("#author").animate({opacity: 0}, 450, function() {
    $(this).animate({opacity: 1}, 450);
      check_if_avail_auth(currQuote, currAuthor)
    });

    if (currAuthor != null) {
      $("#tweet-quote").attr("href", encodeURI("http://www.twitter.com/intent/tweet?text=" + '"' + currQuote + '"' + " - " + currAuthor))
    }
    
    else {
      $("#tweet-quote").attr("href", encodeURI("http://www.twitter.com/intent/tweet?text=" + '"' + currQuote + '"' + " - " + "Unknown author"))
    }

  var randomColor_Index = Math.floor(Math.random() * color_Array.length);
  
  $("body").animate({
    backgroundColor: color_Array[randomColor_Index],
    color: color_Array[randomColor_Index]
  },
  1100)
}

/* 
  Need ready function bc w/o it, code may run before HTML is rendered (i.e errors)
  Can also put other functions inside curly braces and call on events
*/
$(document).ready(function() {
  Parse_List_of_Quotes().then(() => {
    updateQuote_Author();
  });
  
  $("#new-quote").on("click", updateQuote_Author);
})
