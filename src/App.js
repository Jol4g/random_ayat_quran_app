import React from 'react';
import axios from 'axios' ;
import './App.css';

class App extends React.Component{
    state = { text: '' };

    componentDidMount(){
        this.fetchAdvice();}

    fetchAdvice = ()=>{
         const verse = Math.floor(Math.random()*6236)+1
         axios.get('http://api.alquran.cloud/v1/ayah/'+verse)
            .then( (response)=>{
                const {text} = response.data.data;
                console.log(text);
                this.setState({ text:text})   ;        
            } )
            .catch( (error)=>{
                console.error(error);
            }
            )
     
    }

    render(){
        const {text} = this.state;
        return (
            <div className="app">
            <div className="card"> 
                <h1 className="heading">
                    {text}
                </h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span > بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</span></button>
            </div>
            <footer><div>Happy Birthday Imen</div>Made With <span>&#10084;</span> By Fedi Sarray</footer> 
            </div>
        );
    }

}

export default App;