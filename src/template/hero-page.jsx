import React from 'react'
import MarvelHttpClient from './marvelHttpClient'

class HeroPage extends MarvelHttpClient {

  constructor(props) {
    super(props)
  }

  render() {

    this.handleRequest({field:'name', 'value':'Spider-Man'})

    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3"/>
                <label className="mdl-textfield__label" htmlFor="sample3">Pesquisar heróis:</label>
              </div>
              <button
                className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                <i className="material-icons">search</i>
              </button>
            </form>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">Update</h2>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a
                  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates
                </a>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet">4 (6 tablet)</div>
          <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2 (4 phone)</div>
        </div>
      </div>
    )
  }
}

export default HeroPage