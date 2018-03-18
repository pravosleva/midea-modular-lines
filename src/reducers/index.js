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
      //...
    },
    //...
  },
  action
) => {
  //console.log(action)
  switch (action.type) {
    case 'UPDATE_INPUT_DATA_COOLING_MODE': state.inputDataCoolingMode = action.inputDataCoolingMode; return state;
    case 'UPDATE_TAB_STATE': state.hevaTabState = action.hevaTabState; return state;
    default: return state;
  }
};
