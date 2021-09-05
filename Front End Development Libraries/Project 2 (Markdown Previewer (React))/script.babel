import ReactDOM from "https://cdn.skypack.dev/react-dom"
import React from "https://cdn.skypack.dev/react"

const placeholder = `Welcome to my markdown previewer! 

A markdown previewer allows you format headers onto plain text (like Github's readme file)
  
  # Header
  
  ## Sub-header
  
  [Link to website](https://codepen.io/alvi09)
  
  Inline code \`<div></div>\`
  
  Code block:
  \`\`\`
  function foo(a, b) {
    return a + b;
  }
  \`\`\`

  - -List item 1
  - -List item 2
  
  > -Block quote
  
  Random Image
  ![Mario-image](https://i.ytimg.com/vi/iorNgbIbEyU/maxresdefault.jpg)

  **Bolded text**
  
  Code: <pre><code> let x = 5; </code></pre>
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_text: placeholder,
    };
    
  // Bind stuff here if needed  
    this.handleChange = this.handleChange.bind(this)
  }
  
  // Class methods go here
  handleChange(event) {
    this.setState({
      input_text: event.target.value
    })
  }
  
  render() {
    return (
      <div id="App">
        <Editor 
          input_text={this.state.input_text}
          onChange={this.handleChange}
          />
        
        <Preview
          input_text={this.state.input_text}
          />
      </div>
    );
  }
}

const Editor = (props) => {
  // HTML editor
  return (
    <div className="row">
      <div className="editor-wrapper">
        <div className="editor-title"> 
          <i class="fas fa-glasses"></i> Editor
        </div>
       
        <textarea 
          id="editor" 
          onChange={props.onChange}
          value={props.input_text}>
        </textarea>
        
      </div>
    </div>
  )
}

const Preview = (props) => {
  // HTML preview
  return (
    <div className="row">
      <div className="preview-wrapper">
        <div className="preview-title"> 
          <i class="fas fa-glasses"></i> Preview 
        </div>
        
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.input_text, {breaks: true})}}> 
        </div>
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
