import React, { Component } from 'react';
//import '../css/App.css';

import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';

class InputParameters_CoolingMode extends Component {

  onChangeForm (propName, e) {
    let {
      requiredCoolingCapacity,
      tExternal,
      tLiquidInlet, tLiquidOutlet,
      liquidType, percentage,
      delta,
      //...
    } = this.props.obj.inputDataCoolingMode;
    //console.log(requiredCoolingCapacity);
    //console.log(e.target.value);
    switch(propName){
      case 'requiredCoolingCapacity': requiredCoolingCapacity = Number(e.target.value); break;
      case 'tExternal': tExternal = e.target.value; break;
      case 'tLiquidInlet': tLiquidInlet = e.target.value; break;
      case 'tLiquidOutlet':
        tLiquidOutlet = e.target.value;
        tLiquidInlet = Number((e.target.value)) + Number(delta);
        break;
      case 'liquidType':
        liquidType = e.target.value;
        percentage = Number((e.target.value).split(' ')[1]);
        break;
      case 'delta':
        delta = Number(e.target.value);
        tLiquidInlet = Number(tLiquidOutlet) + Number(delta);
        break;
      default: break;
    }
    this.props.updateInputParameters_CoolingMode({
      requiredCoolingCapacity,
      tExternal,
      tLiquidInlet, tLiquidOutlet,
      liquidType, percentage,
      delta,
      //...
    });
  }
  render () {
    let {
      requiredCoolingCapacity,
      tExternal,
      tLiquidInlet, tLiquidOutlet,
      liquidType, percentage,
      delta,
      //...
    } = this.props.obj.inputDataCoolingMode;
    return (
      <div>
        <h4 style={{textAlign:'left'}}>Input Data</h4>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <input className='mdl-textfield__input'
            value={tExternal}
            onChange={this.onChangeForm.bind(this, 'tExternal')}
            type='number'
            required
          />
          <label className='mdl-textfield__label'>t External, C</label>
        </div>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <input className='mdl-textfield__input'
            value={tLiquidInlet}
            onChange={this.onChangeForm.bind(this, 'tLiquidInlet')}
            type='number'
            required
            disabled={true}
          />
          <label className='mdl-textfield__label'>t Liquid Inlet, C</label>
        </div>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <input className='mdl-textfield__input'
            value={tLiquidOutlet}
            onChange={this.onChangeForm.bind(this, 'tLiquidOutlet')}
            type='number'
            required
          />
          <label className='mdl-textfield__label'>t Liquid Outlet, C</label>
        </div>
        <br />
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <select className='mdl-textfield__input'
            defaultValue={liquidType}
            onChange={this.onChangeForm.bind(this, 'liquidType')}
            disabled={false}
          >
            <option value='WATER 100'>WATER</option>

            <option value='MEG 5'>MEG 5</option>
            <option value='MEG 10'>MEG 10</option>
            <option value='MEG 15'>MEG 15</option>
            <option value='MEG 20'>MEG 20</option>
            <option value='MEG 25'>MEG 25</option>
            <option value='MEG 30'>MEG 30</option>
            <option value='MEG 35'>MEG 35</option>
            <option value='MEG 40'>MEG 40</option>
            <option value='MEG 45'>MEG 45</option>
            <option value='MEG 50'>MEG 50</option>

            <option value='MPG 5'>MPG 5</option>
            <option value='MPG 10'>MPG 10</option>
            <option value='MPG 15'>MPG 15</option>
            <option value='MPG 20'>MPG 20</option>
            <option value='MPG 25'>MPG 25</option>
            <option value='MPG 30'>MPG 30</option>
            <option value='MPG 35'>MPG 35</option>
            <option value='MPG 40'>MPG 40</option>
            <option value='MPG 45'>MPG 45</option>
            <option value='MPG 50'>MPG 50</option>
            {/*<option value='MPG 10' disabled={true}>MPG 10</option>*/}
          </select>
          <label className='mdl-textfield__label'>Liquid Type</label>
        </div>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <select className='mdl-textfield__input'
            defaultValue={delta}
            onChange={this.onChangeForm.bind(this, 'delta')}
            disabled={false}
          >
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </select>
          <label className='mdl-textfield__label'>Delta t, C</label>{/* &#x0394; */}
        </div>

      </div>
    )
  }
}

export default InputParameters_CoolingMode;
