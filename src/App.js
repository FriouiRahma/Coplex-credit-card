import React from 'react';
import logo from './logo.svg';
import './App.css';


class Credit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      code:"",
      name:"",
      date:""

    }
      
      }
      handelChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    
        }

  render() {
    var regex=/^[0-9\b]+$/
  
    return (
      <div className="gors">
        <div className="nav"><h2>Compnay name</h2>
        <h2>{regex.test(this.state.code) ?this.state.code.padEnd(16,"*").replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,''):"******************"}</h2>
        <h2>{this.state.name.toUpperCase()}</h2>
        <h2>{this.state.date.padEnd(4,"*").replace(/(\d{2})(\d{0})/,'$1/$2')}</h2>
        </div>
        <div>
        <input type="text"  name="code" onChange={this.handelChange} />
        <input type="text"  name="name" onChange={this.handelChange} />
        <input type="text"  name="date"  onChange={this.handelChange}  />

        </div>


      </div>

    );

  }

}


function App() {
  return (
    <div className="App">

      <Credit />

    </div>
  );
}

export default App;
