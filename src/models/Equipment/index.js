import interpolate from 'interpolate-by-pravosleva';

class Equipment {
  constructor(arg){
    let {
      model, advanced, data,
    } = arg;
    this.model = model;
    this.advanced = advanced;

    this.data = data;
  }
  get(field){ return this[field] }
  set(field, value){ this[field] = value }
  getQ(arg){
    let {
      inputDataCoolingMode,
      //inputDataHeatingMode,
    } = arg,
    coefflist = this.getCorrectiveCoefficientlist({
      inputDataCoolingMode,
      //inputDataHeatingMode,
    }),
    Qc = interpolate.byInternalTable({
      x: inputDataCoolingMode.tExternal,// C
      y: inputDataCoolingMode.tLiquidOutlet,// C
      tableAsDoubleArray: this.data.capacityTables_Qc
    }) * coefflist.coolingMode.Qc,
    Qh = 0;
    return { Qc, Qh }
  }
  getCorrectiveCoefficientlist(arg){
    let {
        inputDataCoolingMode,
        //inputDataHeatingMode,
      } = arg,
      dataObj_MEG = [
        [0.0, 0.0,    10.0,   20.0,   30.0,   40.0,   50.0  ],
        [1,   1.000,  0.984,  0.973,  0.965,  0.960,  0.950 ], // coolingCapacityModification
        [2,   1.000,  0.998,  0.995,  0.992,  0.989,  0.983 ], // powerModification
        [3,   1.000,  1.118,  1.268,  1.482,  1.791,  2.100 ], // waterResistance
        [4,   1.000,  1.019,  1.051,  1.092,  1.145,  1.200 ], // waterFlowModification
        [5,   0.0,    -4.0,   -9.0,   -16.0,  -23.0,  -37.0 ], // freezingPoint, C
      ],
      dataObj_MPG = [
        [0.0, 0.0,    10.0,   20.0,   30.0,   40.0,   50.0  ],
        [1,   1.000,  0.976,  0.961,  0.948,  0.938,  0.925 ], // coolingCapacityModification
        [2,   1.000,  0.996,  0.992,  0.988,  0.984,  0.975 ], // powerModification
        [3,   1.000,  1.071,  1.189,  1.380,  1.728,  2.150 ], // waterResistance
        [4,   1.000,  1.000,  1.016,  1.034,  1.078,  1.125 ], // waterFlowModification
        [5,   0.0,    -3.0,   -7.0,   -13.0,  -22.0,  -35.0 ], // freezingPoint, C
      ],
      Qc_coeff;
    switch(inputDataCoolingMode.liquidType.split(' ')[0]){
      case 'MEG':
        Qc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataCoolingMode.percentage,
          y: 1 });
          //...
        break;
      case 'MPG':
        Qc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataCoolingMode.percentage,
          y: 1 });
        //...
        break;
      default: // WATER
        Qc_coeff = 1.000;
        //...
    }
    return {
      coolingMode: {
        Qc: Qc_coeff,
        //...
      }
    }
  }
};

export { Equipment };
