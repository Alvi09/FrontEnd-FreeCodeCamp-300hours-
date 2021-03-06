import ReactDOM from "https://cdn.skypack.dev/react-dom"
import React from "https://cdn.skypack.dev/react"

// Can't believe it was 'const' the whole time (no wonder array wouldn't change :/ )
var quotesArray;

const colorsArray = [
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

// Instead of setting API outside like this, it's recommended to put inside componentWillMount() (but doesn't work when I do it :/)
function fetch_and_return_data() {
  // Sets our quotesArray to the entire quotes (1000+) array via API 
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(parsed_JSON_Data) {
      quotesArray = parsed_JSON_Data;
    })
};  

fetch_and_return_data();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      color: ""
    };
    
    /* Bind returns a new function, where .this refers to something. (i.e way of saving current value of .this)*/
    this.change_Quote_Author_Color = this.change_Quote_Author_Color.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  
  change_Quote_Author_Color() {
    this.setState({
      // If I change this to getRandomQuote(), then my quotesArray is undefined (????)
      quote: quotesArray[this.getRandomNumber(quotesArray)].text,
      author: quotesArray[this.getRandomNumber(quotesArray)].author,
      color: colorsArray[this.getRandomNumber(colorsArray)],
    });
  }
  
  getRandomNumber(colors_or_quotes_array) {
    if (colors_or_quotes_array.length === quotesArray.length) {
      return (Math.floor(Math.random() * quotesArray.length))
    }
    else {
      return (Math.floor(Math.random() * colorsArray.length))
    }
  };
  
  render() {
    return(
      <QuoteBox quote={this.state.quote} 
                author={this.state.author !== null ? this.state.author : "Unknown Author"} 
                color={this.state.color}
                onClick={this.change_Quote_Author_Color}
        
      />
    );
  }
}

const QuoteBox = (props) => {
  // All HTML stored here
  document.body.style.backgroundColor = props.color;
  
  return (
    <div id="wrapper" class="container fluid" >
      <div id="quote-box">

        {/* Quote text area */}
        <div id="text">
          <i class="fa fa-quote-left"> </i> <span id="span-text" style={{color: props.color}}> {props.quote}</span>
        </div>

        {/* Author display */}
        <div id="author">- 
          <span id="span-author" style={{color: props.color}}> {props.author}</span>
        </div>

        {/* Buttons (i.e twitter and new quote) */}
        <div className = "buttons">
          <a class="button btn btn-primary" 
             id="tweet-quote" 
             target="_top" 
             title="Tweet this quote!" 
             href={encodeURI(`http://www.twitter.com/intent/tweet?text="${props.quote} - ${props.author}"`)}>
            <i class="fa fa-twitter"></i> 
            Tweet
          </a>

          <button class="button btn btn-primary" id="new-quote" onClick={props.onClick}>
            New quote 
          </button>
         </div>
       </div>
     </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
