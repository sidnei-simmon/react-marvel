import React, {Component} from 'react'
import axios from 'axios'
import {Md5} from 'ts-md5/dist/md5'
import Button from './Button'
import Icon from './Icon'

const ENDPOINT = 'http://gateway.marvel.com/v1/public/'
const PUBLIC_KEY = '556e76e33c76074846608cbed570347b'
const PRIVATE_KEY = '435b5e5b3e5ad35c051e60d28257c4fd4308ae00'
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
              <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                  <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Marvel</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                      <a className="mdl-navigation__link" href="">Link</a>
                      <a className="mdl-navigation__link" href="">Link</a>
                      <a className="mdl-navigation__link" href="">Link</a>
                      <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                  </div>
                </header>
                <div className="mdl-layout__drawer">
                  <span className="mdl-layout-title">Title</span>
                  <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                  </nav>
                </div>
                <main className="mdl-layout__content">
                  <div className="page-content">
                  
                  </div>
                </main>
              </div>   
            </div>
        )
    }
}

export default Marvel