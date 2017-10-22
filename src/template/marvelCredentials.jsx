import React from 'react'
import {Md5} from 'ts-md5/dist/md5'

const ENDPOINT = 'http://gateway.marvel.com/v1/public/'
const PUBLIC_KEY = '556e76e33c76074846608cbed570347b'
const PRIVATE_KEY = '435b5e5b3e5ad35c051e60d28257c4fd4308ae00'
const TS = Number(new Date())
// md5(ts+privateKey+publicKey)
const HASH = Md5.hashStr(TS + PRIVATE_KEY + PUBLIC_KEY)

const params = props =>{
   // Parametros padrão da requisição
    const params = {            
        ts: TS,
        apikey: PUBLIC_KEY,
        hash: HASH
    }
    return params
}

export default params