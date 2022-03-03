import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Parent extends React.Component{
  render()
  {
    //return <div style={mystyle}>
    return <div className='header'>
      <h1>KL UNIVERSITY</h1>
      <h1>Dept Of Computer Science</h1>
      <h1>Login Form</h1>
      </div>
    
  }

}
class Child1 extends React.Component{
  render(){
//return <div style={mystyle1}>
return <div className='header'>
USER NAME:<br/><input type='text'/><br/>
<br/>
PASSWORD:<br/><input type='password'/><br/>
<br/>
<button>Submit</button>
</div>
  }
}
class Child2 extends React.Component{
  render(){
return <div className='header1'>
<p>Copyright@.......</p>
<li>contact us</li>
<li>feedback</li>
</div>
  }
}
class Child extends React.Component{
  render(){

return <div className='header2'>
  <Parent/>
<Child1/>
<Child2/>
<ul>footer</ul>
<ul>Unordered list</ul>
</div>
  }
}
ReactDOM.render(<Child/>,document.getElementById('root'));

