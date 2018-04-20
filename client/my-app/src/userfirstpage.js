import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";

class userfirstpage extends Component {
	

   clearLocalStorage()
   {
   	localStorage.clear();
   }

  render() {

    return (
      <div>
        <h2>USER-FIRSTPAGE</h2>
         
        </div>
    );
  }
}
export default userfirstpage;