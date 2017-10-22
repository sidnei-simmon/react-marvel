import React, {Component} from 'react'
import FormSeachHero from './formSearchHero'

export default props => (
  <div>
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">       
          <FormSeachHero initialValue='Teste'/>         
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
// this.handleRequest({field:'name', 'value':'Spider-Man'}).then(resp  =>
// console.log(resp))