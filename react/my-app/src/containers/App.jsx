import React, { Component } from 'react';
import axios from 'axios';
import Character from '../components/Character'
import './App.css'

class App extends Component{

    constructor(){
        super();

        console.log('soy el Constructor')

        this.state = {
            characters: [],
            page: 1
        }
    }

    componentDidMount(){
        console.log('soy el ComponentDidMount')

        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
        .then( items => this.setState({
            characters: items.data.results
        }))
        .catch(err => console.error(err))
    }
    Atras = () =>{
        if(this.state.page >= 1){
            this.setState({ page : this.state.page + 1})
            axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
        .then( items => this.setState({
            characters: items.data.results
        }))
        .catch(err => console.error(err))
        }
        console.log('atras')
    }

    Adelante = () =>{
        this.setState({page: this.state.page - 1})

        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
        .then( items => this.setState({
            characters: items.data.results
        }))
        .catch(err => console.error(err))
        console.log('adelante')
    }


  render(){
      console.log('soy el Render')
      console.log(this.state.characters)
    return (
        <React.Fragment>
            <div>
                <button type='button' onClick={()=> this.Atras()}>Atras</button>
                <button type='button' onClick={()=>this.Adelante()}>Adelante</button>
            </div>
      <div className="grid">
        
         {this.state.characters.map(item => 
         <Character key={item.id} data={item} /> 
         )}
        </div>
        </React.Fragment>
    )
  }
}

export default App;
