import { modellist } from '../models';

export default (
  state = {
    modellist,
    inputDataCoolingMode: {
      requiredCoolingCapacity: 10.0,
      tExternal: 35.0,
      tLiquidInlet: 12.0,
      tLiquidOutlet: 7.0,
      liquidType: 'WATER 100',
      percentage: 100.0,
      delta: 5.0,

      seaLevel: 0.0, foulingFactor: 0.086,
      //...
    },
    inputDataHeatingMode: {
      requiredCoolingCapacity: 0.0,
      tExternal: 7.0,
      tLiquidInlet: 40.0,
      tLiquidOutlet: 45.0,
      liquidType: 'WATER 100',
      percentage: 100.0,
      delta: 5.0,

      seaLevel: 0.0, foulingFactor: 0.086,
      //...
    },
    //...
  },
  action
) => {
  //console.log(action)
  switch (action.type) {
    case 'UPDATE_INPUT_DATA_COOLING_MODE': state.inputDataCoolingMode = action.inputDataCoolingMode; return state;
    case 'UPDATE_INPUT_DATA_HEATING_MODE': state.inputDataHeatingMode = action.inputDataHeatingMode; return state;
    default: return state;
  }
};
