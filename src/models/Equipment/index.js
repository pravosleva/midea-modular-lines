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
    let { inputDataCoolingMode, inputDataHeatingMode } = arg,
    coefflist = this.getCorrectiveCoefficientlist({ inputDataCoolingMode, inputDataHeatingMode }),
    Qc = interpolate.byInternalTable({
      x: inputDataCoolingMode.tExternal,// C
      y: inputDataCoolingMode.tLiquidOutlet,// C
      tableAsDoubleArray: this.data.capacityTables_Qc
    }) * coefflist.coolingMode.Qc * coefflist.coolingMode.foulingFactor_Qc,
    Qh = interpolate.byInternalTable({
      x: inputDataHeatingMode.tExternal,// C
      y: inputDataHeatingMode.tLiquidOutlet,// C
      tableAsDoubleArray: this.data.capacityTables_Qh
    }) * coefflist.heatingMode.Qh * coefflist.heatingMode.foulingFactor_Qh;
    //console.log(coefflist.heatingMode.Qh);
    return { Qc, Qh }
  }
  getCorrectiveCoefficientlist(arg){
    let { inputDataCoolingMode, inputDataHeatingMode } = arg,
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
      Qc_coeff, Qh_coeff,
      dPwc_coeff, dPwh_coeff,
      dataObj_foulingFactor_0086_coolingCapacity = [
        [-1.0,   3.0,    4.0,    5.0,    6.0   ],
        [0.0,   0.991,  0.994,  1.000,  1.004 ],
        [600.0, 0.980,  0.983,  0.989,  0.998 ],
        [1200.0,0.969,  0.971,  0.979,  0.987 ],
        [1800.0,0.959,  0.962,  0.968,  0.974 ]
      ],
      foulingFactorC_coeff, foulingFactorH_coeff,
      Lfc_coeff, Lfh_coeff,
      Pac_coeff, Pah_coeff;
    // COOLING
    switch(inputDataCoolingMode.liquidType.split(' ')[0]){
      case 'MEG':
        Qc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataCoolingMode.percentage, y: 1 });
        Pac_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataCoolingMode.percentage, y: 2 });
        dPwc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataCoolingMode.percentage, y: 3 });
        Lfc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataCoolingMode.percentage, y: 4 });
        //...
        break;
      case 'MPG':
        Qc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataCoolingMode.percentage, y: 1 });
        Pac_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataCoolingMode.percentage, y: 2 });
        dPwc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataCoolingMode.percentage, y: 3 });
        Lfc_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataCoolingMode.percentage, y: 4 });
        //...
        break;
      default: // WATER
        Qc_coeff = 1.000;
        dPwc_coeff = 1.000;
        Lfc_coeff = 1.000;
        Pac_coeff = 1.000;
        //...
        break;
    }
    switch (inputDataCoolingMode.foulingFactor) {
      //case 0.018:
      //case 0.044:
      case 0.086: foulingFactorC_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_foulingFactor_0086_coolingCapacity, x: inputDataCoolingMode.delta, y: inputDataCoolingMode.seaLevel }); break;
      //case 0.172:
      default: foulingFactorC_coeff = 1.0; break;
    }
    // HEATING
    switch(inputDataHeatingMode.liquidType.split(' ')[0]){
      case 'MEG':
        Qh_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataHeatingMode.percentage, y: 1 });
        Pah_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataHeatingMode.percentage, y: 2 });
        dPwh_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataHeatingMode.percentage, y: 3 });
        Lfh_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MEG, x: inputDataHeatingMode.percentage, y: 4 });
        //...
        break;
      case 'MPG':
        Qh_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataHeatingMode.percentage, y: 1 });
        Pah_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataHeatingMode.percentage, y: 2 });
        dPwh_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataHeatingMode.percentage, y: 3 });
        Lfh_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_MPG, x: inputDataHeatingMode.percentage, y: 4 });
        //...
        break;
      default: // WATER
        Qh_coeff = 1.000;
        Pah_coeff = 1.000;
        dPwh_coeff = 1.000;
        Lfh_coeff = 1.000;
        //...
        break;
    }
    switch (inputDataHeatingMode.foulingFactor) {
      //case 0.018:
      //case 0.044:
      case 0.086: foulingFactorH_coeff = interpolate.byInternalTable({ tableAsDoubleArray: dataObj_foulingFactor_0086_coolingCapacity, x: inputDataHeatingMode.delta, y: inputDataHeatingMode.seaLevel }); break;
      //case 0.172:
      default: foulingFactorH_coeff = 1.0; break;
    }
    return {
      coolingMode: {
        Qc: Qc_coeff,
        Pac: Pac_coeff,
        dPw: dPwc_coeff,
        foulingFactor_Qc: foulingFactorC_coeff,
        Lf: Lfc_coeff,
        //...
      },
      heatingMode: {
        Qh: Qh_coeff,
        Pah: Pah_coeff,
        dPw: dPwh_coeff,
        foulingFactor_Qh: foulingFactorH_coeff,
        Lf: Lfh_coeff,
        //...
      },
    }
  }
  getPressureDrop(arg) {
    let { inputDataCoolingMode, inputDataHeatingMode } = arg,
    coefflist = this.getCorrectiveCoefficientlist({ inputDataCoolingMode, inputDataHeatingMode });
    return { dPwc: (this.data.nominal.evaporator.waterPressureDrop * coefflist.coolingMode.dPw) }
  }
  getLiquidFlow(arg) {
    let { inputDataCoolingMode, inputDataHeatingMode } = arg,
    coefflist = this.getCorrectiveCoefficientlist({ inputDataCoolingMode, inputDataHeatingMode });
    return { Lfc: (this.data.nominal.evaporator.waterFlow * coefflist.coolingMode.Lf) }
  }
  getPowerInput(arg) {
    let { inputDataCoolingMode, inputDataHeatingMode } = arg,
    coefflist = this.getCorrectiveCoefficientlist({ inputDataCoolingMode, inputDataHeatingMode }),
    Pac = interpolate.byInternalTable({
      x: inputDataCoolingMode.tExternal,// C
      y: inputDataCoolingMode.tLiquidOutlet,// C
      tableAsDoubleArray: this.data.capacityTables_Pac
    }) * coefflist.coolingMode.Pac,
    Pah = interpolate.byInternalTable({
      x: inputDataHeatingMode.tExternal,// C
      y: inputDataHeatingMode.tLiquidOutlet,// C
      tableAsDoubleArray: this.data.capacityTables_Pah
    }) * coefflist.heatingMode.Pah;
    return { Pac, Pah }
  }
};

export { Equipment };
