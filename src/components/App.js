import React, { Component } from 'react';

import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

import InputParameters_CoolingMode from './InputData_CoolingMode';

import '../css/App.css';

import { modellist } from '../models';

class App extends Component {
  render() {
    let { obj } = this.props,
      { inputDataCoolingMode } = obj;
    return (
      <div className="container">
        <header className="block-header">
          <h1>Midea Modular</h1>
        </header>

        <main className='block-body mdl-color-text--grey-600'>
          <div className='block-body-container'>
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div className="mdl-tabs__tab-bar">
                <a href="#inputC" className="mdl-tabs__tab is-active">
                  <span className='displayed-for-large-only'>Cooling Mode</span>
                  <span className='displayed-for-small-only'>Cooling</span>
                </a>
                <a href="#inputT" className="mdl-tabs__tab">
                  <span className='displayed-for-large-only'>Tech Specifications</span>
                  <span className='displayed-for-small-only'>Tech</span>
                </a>

              </div>
              <div className="mdl-tabs__panel is-active" id="inputC" style={{textAlign:'center'}}>
                <InputParameters_CoolingMode {...this.props} />
              </div>
              <div className="mdl-tabs__panel" id="inputT" style={{textAlign:'center'}}>
                <h4 style={{textAlign:'left'}}>Not Allowed</h4>
              </div>

            </div>

            <ul className='mdl-list'>
              {
                obj.modellist.map((e, i, a) => {
                  let capacityTable = e.getQ({
                      inputDataCoolingMode,
                      //inputDataHeatingMode
                    }),
                    Qc = capacityTable.Qc;
                  return(
                    <li key={i} className='mdl-list__item mdl-list__item--three-line'>
                      <span className="mdl-list__item-primary-content">
                        <strong>{e.model}</strong> Qc= {Qc.toFixed(1)} kW
                      </span>
                    </li>
                  )
                })
              }
            </ul>

          </div>
        </main>

        <footer className='block-footer'>
          <a style={{color:'inherit'}} href={`${atob('bWFpbHRvOnNlbGVjdGlvbjR0ZXN0QGdtYWlsLmNvbQ==')}`}>{atob('c2VsZWN0aW9uNHRlc3RAZ21haWwuY29t')}</a>
        </footer>

      </div>
    );
  }
}

export default App;
