import React from 'react';
import ReactDOM from 'react-dom';
import {TableGen} from './timeTable/cellGen.js';
import './index.css';

// ========================================
/*
Add user setting later
*/
//
GenUI(){
	var UI = React.createElement("")
}


ReactDOM.render(
  <TableGen 
	//TODO
	//change Time format later!
  	TimeRange={[6, 11]}
  />,
  document.getElementById('root')
);
