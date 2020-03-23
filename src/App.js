import React from 'react';
import axios from 'axios' ;
import './App.css';

class App extends React.Component{
    state = { advice: '' };

    componentDidMount(){
        this.fetchAdvice();}

    fetchAdvice = ()=>{
         axios.get('https://api.adviceslip.com/advice')
            .then( (response)=>{
                const {advice} = response.data.slip;
                const {slip_id} = response.data.slip;
                console.log(slip_id);  
                this.setState({ advice:advice})   ;        
            } )
            .catch( (error)=>{
                console.error(error);
            }
            )
     
    }

    render(){
        const {advice} = this.state;
        return (
            <div className="app">
            <div className="card"> 
                <h1 className="heading">
                    {advice}
                </h1>
                <button className="button" onClick={this.fetchAdvice}>
                    <span className="txt">Tell me somthing</span></button>
            </div>
            <footer>Made With <span>&#10084;</span> By Fedi Sarray</footer> 
            </div>
        );
    }

}

export default App;