import React, {Component} from 'react'
import axios from 'axios'
import {Md5} from 'ts-md5/dist/md5'
import Button from './Button'

const ENDPOINT = 'http://gateway.marvel.com/v1/public/'
const PUBLIC_KEY = ''
const PRIVATE_KEY = ''
const TS = Number(new Date())

// md5(ts+privateKey+publicKey)
const HASH = Md5.hashStr(TS + PRIVATE_KEY + PUBLIC_KEY)

class Marvel extends Component {

    constructor(props) {
        super(props)
        this.handleGet = this.handleGet.bind(this)
    }

    handleGet() {
        axios.get(ENDPOINT+'characters', {
            params: {
                ts: TS,
                apikey: PUBLIC_KEY,
                hash: HASH
            }
        }).then(resp => {
            resp.data.data.results.forEach(line =>(
                console.log(line)
            ))
        }).catch(function (error) {
            console.log(error);
          });
        
    }

    render() {
        return (
            <div>
              <Button handleGet={this.handleGet} text='Botão Lindo'/>               
            </div>
        )
    }
}

export default Marvel