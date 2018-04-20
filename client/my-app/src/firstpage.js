import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './firstpage.css';
;

class Firstpage extends Component {
  constructor()
  {
    super();
    this.state={
      username:""
    }
  }
  componentWillMount()
  {debugger
    this.setState({
      username:this.props.userdisplay
    })
  }

  
  render() {
    debugger
    return (
      <div>
      
         <h1>Hello !</h1>
      <h6>{this.state.username.firstname}</h6>
        <h6>{this.state.username.email}</h6>
         <div id="body1" className="container">
    <div className="row">
      <div className="col-sm-4">
        <h1 id="timer"></h1>
      </div>
      <div className=" col-sm-2">
       <h1><b className="label label-default">SUDOKU</b></h1>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-4">
      <table id="grid" className="table table-bordered">
         <tbody>
        <tr>
          <td className="cell" id={1}></td>
          <td className="cell" id={2}></td>
          <td className="cell" id={3}></td>
          
          <td className="cell" id={4}></td>
          <td className="cell" id={5}></td>
          <td className="cell" id={6}></td>
          
          <td className="cell" id={7}></td>
          <td className="cell" id={8}></td>
          <td className="cell" id={9}></td>
        </tr>

        <tr >
          <td className="cell" id={10}></td>
          <td className="cell" id={11}></td>
          <td className="cell" id={12}></td>
          
          <td className="cell" id={13}></td>
          <td className="cell" id={14}></td>
          <td className="cell" id={15}></td>
          
          <td className="cell" id={16}></td>
          <td className="cell" id={17}></td>
          <td className="cell" id={18}></td>
        </tr>

        <tr>          
          <td className="cell" id={19}></td>
          <td className="cell" id={20}></td>
          <td className="cell" id={21}></td>
          
          <td className="cell" id={22}></td>
          <td className="cell" id={23}></td>
          <td className="cell" id={24}></td>
          
          <td className="cell" id={25}></td>
          <td className="cell" id={26}></td>
          <td className="cell" id={27}></td>
        </tr>

        <tr>          
          <td className="cell" id={28}></td>
          <td className="cell" id={29}></td>
          <td className="cell" id={30}></td>
          <td className="cell" id={31}></td>
          <td className="cell" id={32}></td>
          
          <td className="cell" id={33}></td>
          <td className="cell" id={34}></td>
          <td className="cell" id={35}></td>
          
          <td className="cell" id={36}></td>
          
        </tr>

        <tr>          
          <td className="cell" id={37}></td>
          <td className="cell" id={38}></td>
          <td className="cell" id={39}></td>
          <td className="cell" id={40}></td>
          <td className="cell" id={41}></td>
          
          <td className="cell" id={42}></td>
          <td className="cell" id={43}></td>
          <td className="cell" id={44}></td>
          
          <td className="cell" id={45}></td>
          
        </tr>

        <tr>
        <td className="cell" id={46}></td>
          <td className="cell" id={47}></td>          
          <td className="cell" id={48}></td>
          <td className="cell" id={49}></td>
          <td className="cell" id={50}></td>
          
          <td className="cell" id={51}></td>
          <td className="cell" id={52}></td>
          <td className="cell" id={53}></td>
          
          <td className="cell" id={54}></td>
        </tr>

        <tr>        

          <td className="cell" id={55}></td>
          <td className="cell" id={56}></td>  
          <td className="cell" id={57}></td>
          <td className="cell" id={58}></td>
          <td className="cell" id={59}></td>
          <td className="cell" id={60}></td>
          <td className="cell" id={61}></td>
          
          <td className="cell" id={62}></td>
          <td className="cell" id={63}></td>
          
        </tr>

        <tr>          

          <td className="cell" id={64}></td>
          
          <td className="cell" id={65}></td>
          <td className="cell" id={66}></td>
          <td className="cell" id={67}></td>
          <td className="cell" id={68}></td>
          <td className="cell" id={69}></td>
          <td className="cell" id={70}></td>
          
          <td className="cell" id={71}></td>
          <td className="cell" id={72}></td>
        </tr>

        <tr> 

          <td className="cell" id={73}></td>
          
          <td className="cell" id={74}></td>
          
        <td className="cell" id={75}></td>
          <td className="cell" id={76}></td>         
          <td className="cell" id={77}></td>
          <td className="cell" id={78}></td>
          <td className="cell" id={79}></td>
          
          <td className="cell" id={80}></td>
          <td className="cell" id={81}></td>
          
      </tr>
        </tbody>
      </table>

      <b>
        
      <button id="button1"  className="button btn  " value={1} >1</button>
      <button id="button2" className="button btn  " value={2}>2</button>
      <button id="button3" className="button btn " value={3}>3</button>
      <button id="button4" className="button btn " value={4}>4</button>
      <button id="button5" className="button btn " value={5}>5</button>
      <button id="button6" className="button btn " value={6}>6</button>
      <button id="button7" className="button btn" value={7}>7</button>
      <button id="button8" className="button btn " value={8}>8</button>
      <button id="button9" className="button btn " value={9}>9</button>
   
    </b>
      
   
   
       
        </div>
        </div>
        </div>
         <Link to={'/'} >LogOut</Link>
        </div>
      
    );
  }
}
export default Firstpage;