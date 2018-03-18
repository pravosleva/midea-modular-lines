import { Equipment } from './Equipment';

let modellist = [];

let model1 = new Equipment ({
  model: "MC-SS35/RN1L",
  advanced: {
    heatingMode: true,
  },
  data: {
    capacityTables_Qc: [// coolingMode, kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  39.18,  36.90,  34.81,  32.90,  30.83,  28.36],
      [ 6.0,  40.51,  38.11,  35.92,  33.92,  31.81,  29.30],
      [ 7.0,  41.92,  39.40,  37.10,  35.00,  32.87,  30.30],
      [ 8.0,  43.22,  40.58,  38.17,  35.98,  33.82,  31.22],
      [ 9.0,  44.44,  41.68,  39.18,  36.89,  34.71,  32.08],
      [ 10.0, 46.12,  43.22,  40.59,  38.12,  35.97,  33.27],
      [ 11.0, 47.41,  44.39,  41.64,  39.14,  36.90,  34.17],
      [ 12.0, 48.49,  45.36,  42.51,  39.92,  37.68,  34.93],
      [ 13.0, 49.36,  46.13,  43.19,  40.52,  38.29,  35.53],
      [ 14.0, 50.58,  47.23,  44.18,  41.41,  39.17,  36.39],
      [ 15.0, 51.23,  47.79,  44.67,  41.82,  39.61,  36.83],
      [ 16.0, 52.51,  48.94,  45.69,  42.74,  40.52,  37.72],
      [ 17.0, 53.18,  49.52,  46.19,  43.17,  40.97,  38.18],
    ],
    capacityTables_Qh: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 22.95,  28.69,  33.75,  37.51,  40.77,  45.66,  52.51 ],
      [ 41.0, 22.23,  27.82,  32.76,  36.44,  39.66,  44.34,  50.90 ],
      [ 42.0, 21.58,  27.05,  31.89,  35.52,  38.69,  43.18,  49.48 ],
      [ 43.0, 21.06,  26.43,  31.20,  34.78,  37.93,  42.25,  48.34 ],
      [ 44.0, 20.65,  25.95,  30.67,  34.23,  37.37,  41.56,  47.46 ],
      [ 45.0, 20.35,  25.60,  30.30,  33.86,  37.00,  41.07,  46.82 ],
      [ 46.0, 19.96,  25.13,  29.78,  33.31,  36.45,  40.38,  45.95 ],
      [ 47.0, 19.37,  24.42,  28.97,  32.44,  35.53,  39.30,  44.65 ],
      [ 48.0, 18.60,  23.49,  27.90,  31.27,  34.29,  37.86,  42.93 ],
      [ 49.0, 17.59,  22.24,  26.44,  29.68,  32.58,  35.90,  40.64 ],
      [ 50.0, 16.46,  20.83,  24.80,  27.87,  30.62,  33.68,  38.06 ],
    ],
    nominal: {
      coolingCapacity: 35, // kW
      heatingCapacity: 37, // kW
      powerInput: {
        cooling: 11.5, // kW
        coolingRatedCurrent: 19.0, // A
        heating: 11.3, // kW
        heatingRatedCurrent: 20.0, // kW
      },
      EER: 3.04, // kW/kW
      COP: 3.27, // kW/kW
      powerSupply: {
        params: '380-415/3/50', // V/Ph/Hz
        manualSwitch: 50, // A
        fuse: 36, // A
      },
      maxInputConsumption: 14, // kW
      ratedCurrent: 27, // A
      maxStartedCurrent: 177, // A
      compressor: {
        type: 'Scroll (fixed speed)',
        brand: 'Danfoss',
        model: 'SH140A4ALC',
        quantity: 1, // pcs
        input: 11.3, // kW
        rateLoadAmpsRLA: 21.4, // A
        lockedRotorAmpLRA: 147.0, // A
        refrigerantOil: 3300, // ml
      },
      refrigerant: {
        type: 'R410A',
        refrigerantControl: 'EXV + capillary',
        weight: 5.4, // kg
      },
      condenser: {
        type: 'Fin-coil',
        numberOfRows: 2, // pcs
        fanMotorModel: 'YDK550-6E',
        quantityOfFanMotor: 1, // pcs
        airFlow: 13.5, // x1000 m3/h
        fanMotorRatedCurrent: 3.7, // A
        fanMotorInput: 0.8, // kW
      },
      evaporator: {
        type: 'Double-pipe',
        waterPressureDrop: 55.0, // kPa
        volume: 10.0, // l
        waterConnections: 'DN40',
        waterFlow: 6.0, // m3/h
        maxDesignPressure: 1.0, // MPa
        waterPipeConnectionType: 'Flexible join (flange)',
      },
      dimension: {
        net: { length: 1020.0, width: 1770.0, height: 980.0 },
        packingSize: { length: 1070.0, width: 1900.0, height: 1030.0 },
      },
      weight: { net: 320.0, operation: 330.0 },
      //...
      noiseLevel: 65.0, // dB
      operationWaterTemperature: {
        cooling: { min: 5.0, max: 17.0 },
        heating: { min: 25.0, max: 50.0 },
        comment: 'Antifreeze should be added for less than 5 C in cooling mode',
      },
      ambientTemperature: {
        cooling: { min: -10.0, max: 46.0 },
        heating: { min: -15.0, max: 24.0 },
      }
    }
  }
});

modellist.push(model1);

console.log(model1.get('model'));

export {
  modellist
};
