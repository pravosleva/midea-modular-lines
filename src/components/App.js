import React, { Component } from 'react';

import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

import InputParameters_CoolingMode from './InputData_CoolingMode';
import InputParameters_HeatingMode from './InputData_HeatingMode';

import '../css/App.css';

import { modellist } from '../models';

import LiquidParameters from 'liquid-parameters';

class App extends Component {
  render() {
    let { obj } = this.props,
      { inputDataCoolingMode, inputDataHeatingMode } = obj,
      cpc = LiquidParameters.cp({ liquidType: inputDataCoolingMode.liquidType.split(' ')[0], percentage: inputDataCoolingMode.percentage, temperature: (inputDataCoolingMode.tLiquidInlet-inputDataCoolingMode.tLiquidOutlet)/2 }).result,
      cph = LiquidParameters.cp({ liquidType: inputDataHeatingMode.liquidType.split(' ')[0], percentage: inputDataHeatingMode.percentage, temperature: (inputDataHeatingMode.tLiquidInlet-inputDataHeatingMode.tLiquidOutlet)/2 }).result,
      densityC = LiquidParameters.density({ liquidType: inputDataCoolingMode.liquidType.split(' ')[0], percentage: inputDataCoolingMode.percentage, temperature: (inputDataCoolingMode.tLiquidInlet-inputDataCoolingMode.tLiquidOutlet)/2 }).result,
      densityH = LiquidParameters.density({ liquidType: inputDataHeatingMode.liquidType.split(' ')[0], percentage: inputDataHeatingMode.percentage, temperature: (inputDataHeatingMode.tLiquidInlet-inputDataHeatingMode.tLiquidOutlet)/2 }).result;
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
                <a href="#inputH" className="mdl-tabs__tab">
                  <span className='displayed-for-large-only'>Heating Mode</span>
                  <span className='displayed-for-small-only'>Heating</span>
                </a>

              </div>
              <div className="mdl-tabs__panel is-active" id="inputC" style={{textAlign:'center'}}>
                <InputParameters_CoolingMode {...this.props} />
              </div>
              <div className="mdl-tabs__panel" id="inputH" style={{textAlign:'center'}}>
                <InputParameters_HeatingMode {...this.props} />
              </div>

            </div>

            <blockquote>
              cpc= {cpc.toFixed(2)} kJ/kg.K <span className='txt-muted'>(densityC= {densityC.toFixed(2)} kg/m3)</span><br />
              cph= {cph.toFixed(2)} kJ/kg.K <span className='txt-muted'>(densityH= {densityH.toFixed(2)} kg/m3)</span><br />
              ~<code>liquid-parameters module</code>
            </blockquote>

            <h4 style={{textAlign:'left'}}>Modellist</h4>

            <div className="flex-container">
              {
                obj.modellist.map((e, i, a) => {
                  let capacityTable = e.getQ({ inputDataCoolingMode, inputDataHeatingMode }),
                    Qc = capacityTable.Qc,
                    Qh = capacityTable.Qh,
                    pressureDrop = e.getPressureDrop({ inputDataCoolingMode, inputDataHeatingMode }),
                    dPwc = pressureDrop.dPwc,
                    //dPwh = pressureDrop.dPwh,
                    liquidFlow = e.getLiquidFlow({ inputDataCoolingMode, inputDataHeatingMode }),
                    Lfc = liquidFlow.Lfc,
                    //Lfh = liquidFlow.Lfh,
                    //let Q = cp * volumetricFlowRate * density * (liquidTemperatureIn-liquidTemperatureOut) / 3600;
                    experimentalWaterFlowC = Qc * 3600 / (cpc * densityC * (inputDataCoolingMode.tLiquidInlet-inputDataCoolingMode.tLiquidOutlet) ),
                    experimentalWaterFlowH = Qh * 3600 / (cph * densityH * Math.abs(inputDataHeatingMode.tLiquidInlet-inputDataHeatingMode.tLiquidOutlet) ),
                    powerInput = e.getPowerInput({ inputDataCoolingMode, inputDataHeatingMode }),
                    Pac = powerInput.Pac,
                    Pah = powerInput.Pah;

                  return(
                    <div className="flex-block" key={i}>
                      <h5><strong>{e.model}</strong> Qc<span className='txt-muted'>/Qh</span>= {Qc.toFixed(1)}<span className='txt-muted'>/{Qh.toFixed(1)}</span> kW</h5>

                      <strong>Lfc<span className='txt-muted'>/Lfh</span>= {experimentalWaterFlowC.toFixed(1)}({Lfc.toFixed(1)})<span className='txt-muted'>/{experimentalWaterFlowH.toFixed(1)}</span> m3/h</strong> <span className='txt-muted'>by <code>liquid-parameters</code> module (& manufacturer data)</span><br />
                      <strong>Pac<span className='txt-muted'>/Pah</span>= {Pac.toFixed(1)}<span className='txt-muted'>/{Pah.toFixed(1)}</span> kW</strong> <span className='txt-muted'>manufacturer data</span><br />
                      <strong>dPwc= {dPwc.toFixed(1)} kPa</strong> <span className='txt-muted'>manufacturer data</span>

                    </div>
                  )
                })
              }
            </div>

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
