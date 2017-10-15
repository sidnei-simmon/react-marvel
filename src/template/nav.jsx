import React from 'react'

export default props => (
    <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Marvel</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <a className="mdl-navigation__link" href="#/home">Inicio</a>
                        <a className="mdl-navigation__link" href="#/hero">Heróis</a>
                    </nav>
                </div>
            </header>
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Menu</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="#/home">Inicio</a>
                    <a className="mdl-navigation__link" href="#/hero">Heróis</a>
                </nav>
            </div>
            {props.children}
        </div>
    </div>
)