//import logo from './logo.svg';

import goodmorning from './goodmorning.jpg';
import goodevening from './goodevening.jpg';
import goodafternoon from './goodafternoon.jpg';
import goodnight from './goodnight.jpg';

import React, { useState } from 'react';

//import './App.css';

const bgimages = {
  gm: goodmorning,
  ga: goodafternoon,
  ge: goodevening,
  gn: goodnight
};

function App() {		
	
		//let MySystemTime = new Date().toLocaleString();
		
		var today = new Date(),
		time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	
	
		//var today = new Date();
		var hours = today.getHours();
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		
		var ampm = hours >= 12 ? 'pm' : 'am';
		
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+ minutes : minutes;
		
		var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

		//var strTime = hours + ampm;
		var strTime = hours;
				
		const [newtime, setnewTime] = useState(time);
		
		const Click = () => {
			setnewTime(clockTime);
			console.log("your system time is", clockTime);
		}
		
		if(ampm === "am"){
			
			if( strTime >= 4 && strTime <= 11 ){
			return (
				<div style={{background:`url(${bgimages.gm})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100vh'}}>
					<h1 style={{textAlign:'center',color:'#fff'}}>Hello Vichitra Choudhary,<br/> Good Morning</h1>
					<p style={{textAlign:'center',color:'#fff'}}>You system time is: {newtime}</p>
					<button style={{textAlign:'center',margin:'0 auto',display:'block'}} onClick={Click}>Click me</button>
				</div>
				);
			}

			if( (strTime === 12 || strTime >= 1) && (strTime <= 3) ){
			return (
				<div style={{background:`url(${bgimages.gm})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100vh'}}>
					<h1 style={{textAlign:'center',color:'#fff'}}>Hello Vichitra Choudhary,<br/> Too early Good Morning</h1>
					<p style={{textAlign:'center',color:'#fff'}}>You system time is: {newtime}</p>
					<button style={{textAlign:'center',margin:'0 auto',display:'block'}} onClick={Click}>Click me</button>
				</div>
				);
			}
		}
		
		if(ampm === "pm"){
			
			if( strTime >= 12 ){
			
			return (
				<div style={{background:`url(${bgimages.ga})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100vh'}}>
					<h1 style={{textAlign:'center',color:'#fff'}}>Hello Vichitra Choudhary,<br/> Good Afternoon at sharp noon</h1>
					<p style={{textAlign:'center',color:'#fff'}}>You system time is: {newtime}</p>
					<button style={{textAlign:'center',margin:'0 auto',display:'block'}} onClick={Click}>Click me</button>
				</div>
				);
				
			}
			
			if( (strTime >= 1 && strTime <= 4) ){
			
			return (
				<div style={{background:`url(${bgimages.ga})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100vh'}}>
					<h1 style={{textAlign:'center',color:'#fff'}}>Hello Vichitra Choudhary,<br/> Good Afternoon</h1>
					<p style={{textAlign:'center',color:'#fff'}}>You system time is: {newtime}</p>
					<button style={{textAlign:'center',margin:'0 auto',display:'block'}} onClick={Click}>Click me</button>
				</div>
				);
				
			}

			if( strTime >= 5 && strTime <= 8 ) {
			
			return (
				<div style={{background:`url(${bgimages.ge})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100vh'}}>
					<h1 style={{textAlign:'center',color:'#fff'}}>Hello Vichitra Choudhary,<br/> Good Evening</h1>
					<p style={{textAlign:'center',color:'#fff'}}>You system time is: {newtime}</p>
					<button style={{textAlign:'center',margin:'0 auto',display:'block'}} onClick={Click}>Click me</button>
				</div>
				);
				
			}
				
			if( strTime >= 9 && strTime <= 11 ) {
			
			return (
				<div style={{background:`url(${bgimages.gn})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100vh'}}>
					<h1 style={{textAlign:'center',color:'#fff'}}>Hello Vichitra Choudhary,<br/> Good Night</h1>
					<p style={{textAlign:'center',color:'#fff'}}>You system time is: {newtime}</p>
					<button style={{textAlign:'center',margin:'0 auto',display:'block'}} onClick={Click}>Click me</button>
				</div>
				);
				
			}	
			
		}	
		
	/*
	return (
		<div className="App">
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			  Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Your system clock is {strTime}
			</a>
		  </header>
		</div>
	);*/
	
}

export default App;
