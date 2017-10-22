import React, {Component} from 'react'
import MarvelCredentials from './marvelCredentials'
import axios from 'axios'

class FormSeachHero extends Component{
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    handleSubmit(){
        console.log(MarvelCredentials)
        /*
        axios.get(ENDPOINT+'characters', {
            params: MarvelCredentials.params
        }).then(resp => (
            resp.data
        )).catch(error => error);

       // this.handleRequest({field:'name', value:this.state.value})   
       */  
    }

    render() {
        return (
        <div>
            <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input"  onChange={this.handleChange} value={this.state.value} type="text" id="sample3"/>
                  <label className="mdl-textfield__label"  htmlFor="sample3">Pesquisar heróis:</label>
                </div>
                <button  onClick={this.handleSubmit} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                 <i className="material-icons">search</i>
               </button>
            </form>
        </div>
        )
    }

}

export default FormSeachHero