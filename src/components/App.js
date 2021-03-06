import React, { Component } from 'react';

import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

import InputParameters_CoolingMode from './InputData_CoolingMode';
import InputParameters_HeatingMode from './InputData_HeatingMode';

import '../css/App.css';
import '../css/blockquote.css';

import { modellist } from '../models';

import LiquidParameters from 'liquid-parameters';

let _getRequiredPSCModules = (arg) => {
  let { eachUnitCoolingCapacity, requiredCoolingCapacity, maximumCombinationQuantity } = arg,
    result = 0, msg = 'No comment';
  for(let i=1, max=maximumCombinationQuantity; i<max; i++){
    if(eachUnitCoolingCapacity*i >= requiredCoolingCapacity){
      result = i;
      break;
    }
  }
  if(result===0){ msg= `We have not result to have ${requiredCoolingCapacity} kW` }
  return { result, msg };
}

class App extends Component {
  componentWillMount () {
    let { inputDataCoolingMode } = this.props.obj,
      _qc = Number(localStorage.getItem('coolingCapacity')) || 0;
    inputDataCoolingMode.requiredCoolingCapacity = _qc.toFixed(0);
    this.props.updateInputParameters_CoolingMode(inputDataCoolingMode);
  }
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
              cp cooling = {cpc.toFixed(2)} kJ/kg.K<br />
              cp heating = {cph.toFixed(2)} kJ/kg.K
              <footer>
                <cite><code>liquid-parameters</code> module*</cite>
              </footer>
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
                    Pah = powerInput.Pah,
                    _requirements = _getRequiredPSCModules({ eachUnitCoolingCapacity:Qc, requiredCoolingCapacity:inputDataCoolingMode.requiredCoolingCapacity, maximumCombinationQuantity:e.data.nominal.maximumCombinationQuantity });

                  return(
                    <div className="flex-block" key={i} style={{position: 'relative', paddingTop: '15px', paddingBottom: '40px'}}>
                      <strong style={{
                        position: 'absolute',
                        fontSize: '2em',
                        top: '15px', left: '5px',
                        opacity: '.3',
                      }}>{e.model}</strong>

                      <h5><strong>Each Unit</strong></h5>
                      <strong>Qc <span className='txt-muted'>/ Qh</span> = {Qc.toFixed(1)} <span className='txt-muted'>/ {Qh.toFixed(1)}</span> kW</strong><br />

                      <strong>Lfc* (Lfc) <span className='txt-muted'>/ Lfh</span> = {experimentalWaterFlowC.toFixed(1)} ({Lfc.toFixed(1)}) <span className='txt-muted'>/ {experimentalWaterFlowH.toFixed(1)}</span> m3/h</strong><br />

                      <strong>dPwc = {dPwc.toFixed(1)} kPa</strong><br />
                      <strong>Pac <span className='txt-muted'>/ Pah</span> = {Pac.toFixed(1)} <span className='txt-muted'>/ {Pah.toFixed(1)}</span> kW</strong>

                      <h5><strong>Requirements</strong></h5>
                      <strong>
                        {_requirements.msg}.<br />
                        Qc <span className='txt-muted'>/ Qh</span> x{_requirements.result} [of {e.data.nominal.maximumCombinationQuantity}] pcs = {(Qc*_requirements.result).toFixed(1)} <span className='txt-muted'>/ {(Qh*_requirements.result).toFixed(1)}</span> kW
                      </strong>

                      <strong style={{
                        position: 'absolute',
                        fontSize: '2em',
                        bottom: '10px', right: '5px',
                        opacity: '.3',
                        textAlign: 'right',
                        lineHeight: '30px',
                      }}>
                        <span className='displayed-for-small-only'>
                          {/*
                            sge_oe.name.length > 32 ?
                            `${sge_oe.name.substring(0, 32)}...`
                            :
                            sge_oe.name
                          */}
                          MAX<br />{(Qc*e.data.nominal.maximumCombinationQuantity).toFixed(1)} <span className='txt-muted'>/ {(Qh*e.data.nominal.maximumCombinationQuantity).toFixed(1)}</span> kW
                        </span>
                        <span className='displayed-for-large-only'>
                          Qc max <span className='txt-muted'>/ Qh max</span> = {(Qc*e.data.nominal.maximumCombinationQuantity).toFixed(1)} <span className='txt-muted'>/ {(Qh*e.data.nominal.maximumCombinationQuantity).toFixed(1)}</span> kW
                        </span>

                      </strong><br />

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
