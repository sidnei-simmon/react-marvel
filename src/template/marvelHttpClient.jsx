import React, {Component} from 'react'
import axios from 'axios'
import {Md5} from 'ts-md5/dist/md5'

const ENDPOINT = 'http://gateway.marvel.com/v1/public/'
const PUBLIC_KEY = '556e76e33c76074846608cbed570347b'
const PRIVATE_KEY = '435b5e5b3e5ad35c051e60d28257c4fd4308ae00'
const TS = Number(new Date())

// md5(ts+privateKey+publicKey)
const HASH = Md5.hashStr(TS + PRIVATE_KEY + PUBLIC_KEY)

class Marvel extends Component {

    constructor(props) {
        super(props)       
        this.handleRequest = this.handleRequest.bind(this)
    }


    handleRequest({field=null, value=null}){
        
        // Parametros padrão da requisição
        const params = {            
            ts: TS,
            apikey: PUBLIC_KEY,
            hash: HASH
        }

       if(field!== null){
        params[field] = value
       }

       return axios.get(ENDPOINT+'characters', {
            params: params
        }).then(resp => (
            resp.data
        )).catch(error => error);
        
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Marvel