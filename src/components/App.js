import React, { Component } from 'react';

import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

import InputParameters_CoolingMode from './InputData_CoolingMode';

import '../css/App.css';

import { modellist } from '../models';

import LiquidParameters from 'liquid-parameters';

class App extends Component {
  render() {
    let { obj } = this.props,
      { inputDataCoolingMode } = obj,
      cpc = LiquidParameters.cp({ liquidType: inputDataCoolingMode.liquidType.split(' ')[0], percentage: inputDataCoolingMode.percentage, temperature: (inputDataCoolingMode.tLiquidInlet-inputDataCoolingMode.tLiquidOutlet)/2 }).result,
      densityC = LiquidParameters.density({ liquidType: inputDataCoolingMode.liquidType.split(' ')[0], percentage: inputDataCoolingMode.percentage, temperature: (inputDataCoolingMode.tLiquidInlet-inputDataCoolingMode.tLiquidOutlet)/2 }).result;
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
                {/*<a href="#inputT" className="mdl-tabs__tab">
                  <span className='displayed-for-large-only'>Tech Specifications</span>
                  <span className='displayed-for-small-only'>Tech</span>
                </a>*/}

              </div>
              <div className="mdl-tabs__panel is-active" id="inputC" style={{textAlign:'center'}}>
                <InputParameters_CoolingMode {...this.props} />
              </div>
              {/*<div className="mdl-tabs__panel" id="inputT" style={{textAlign:'center'}}>
                <h4 style={{textAlign:'left'}}>Not Allowed</h4>
              </div>*/}

            </div>

            <blockquote>
              cpc= {cpc.toFixed(2)} kJ/kg.K<br />
              densityC= {densityC.toFixed(2)} kg/m3<br />
              ~<code>liquid-parameters module</code>
            </blockquote>

            <h4 style={{textAlign:'left'}}>Modellist</h4>

            <ul className='mdl-list'>
              {
                obj.modellist.map((e, i, a) => {
                  let capacityTable = e.getQ({
                      inputDataCoolingMode,
                      //inputDataHeatingMode
                    }), Qc = capacityTable.Qc,
                    pressureDrop = e.getPressureDrop({
                      inputDataCoolingMode,
                      //inputDataHeatingMode
                    }), dPwc = pressureDrop.dPwc,
                    liquidFlow = e.getLiquidFlow({
                      inputDataCoolingMode,
                      //inputDataHeatingMode
                    }), Lfc = liquidFlow.Lfc,
                    //let Q = cp * volumetricFlowRate * density * (liquidTemperatureIn-liquidTemperatureOut) / 3600;
                    experimentalWaterFlow = Qc * 3600 / (cpc * densityC * (inputDataCoolingMode.tLiquidInlet-inputDataCoolingMode.tLiquidOutlet) ),
                    Pac = e.getPowerInput({
                      inputDataCoolingMode,
                      //inputDataHeatingMode
                    }).Pac;

                  return(
                    <li key={i}>

                      <h5><strong>{e.model}</strong> Qc= {Qc.toFixed(1)} kW</h5>
                      Lfc= {Lfc.toFixed(1)} m3/h <span style={{color:'lightgray'}}>(manufacturer data)</span><br />

                      <strong>Lfc= {experimentalWaterFlow.toFixed(1)} m3/h</strong> <span style={{color:'lightgray'}}>(experimental data from <code>liquid-parameters</code> module)</span><br />

                      <strong>dPwc= {dPwc.toFixed(1)} kPa</strong> <span style={{color:'lightgray'}}>(manufacturer data)</span><br />
                      <strong>Pac= {Pac.toFixed(1)} kW</strong> <span style={{color:'lightgray'}}>(manufacturer data)</span><br />

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
