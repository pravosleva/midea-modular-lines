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
    capacityTables_Pac: [// kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  10.13,  10.44,  10.76,  11.10,  11.65,  12.23],
      [ 6.0,  10.29,  10.60,  10.93,  11.27,  11.83,  12.43],
      [ 7.0,  10.50,  10.82,  11.16,  11.50,  12.08,  12.68],
      [ 8.0,  10.81,  11.14,  11.49,  11.85,  12.44,  13.06],
      [ 9.0,  10.92,  11.25,  11.60,  11.96,  12.56,  13.19],
      [ 10.0, 11.08,  11.42,  11.78,  12.14,  12.75,  13.38],
      [ 11.0, 11.19,  11.53,  11.89,  12.26,  12.87,  13.52],
      [ 12.0, 11.35,  11.70,  12.07,  12.44,  13.06,  13.71],
      [ 13.0, 11.44,  11.80,  12.16,  12.54,  13.16,  13.82],
      [ 14.0, 11.52,  11.88,  12.25,  12.62,  13.26,  13.92],
      [ 15.0, 11.58,  11.94,  12.31,  12.69,  13.32,  13.99],
      [ 16.0, 11.70,  12.06,  12.43,  12.81,  13.46,  14.13],
      [ 17.0, 11.75,  12.12,  12.49,  12.88,  13.52,  14.20],
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
let model2 = new Equipment ({
  model: "MC-SS65/RN1L",
  advanced: {
    heatingMode: true,
  },
  data: {
    capacityTables_Qc: [// coolingMode, kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  72.77,  68.52,  64.64,  61.10,  57.25,  52.67],
      [ 6.0,  75.23,  70.77,  66.70,  62.99,  59.08,  54.41],
      [ 7.0,  77.85,  73.17,  68.90,  65.00,  61.04,  56.27],
      [ 8.0,  80.26,  75.36,  70.90,  66.82,  62.81,  57.97],
      [ 9.0,  82.52,  77.41,  72.76,  68.51,  64.47,  59.57],
      [ 10.0, 85.65,  80.27,  75.38,  70.91,  66.80,  61.79],
      [ 11.0, 88.04,  82.44,  77.33,  72.68,  68.54,  63.47],
      [ 12.0, 90.06,  84.24,  78.95,  74.13,  69.98,  23.17],
      [ 13.0, 91.66,  85.67,  80.21,  75.25,  71.11,  65.99],
      [ 14.0, 93.94,  87.72,  82.05,  76.90,  72.75,  67.58],
      [ 15.0, 95.15,  88.76,  82.95,  77.67,  73.55,  68.41],
      [ 16.0, 97.52,  90.88,  84.86,  79.38,  75.25,  70.06],
      [ 17.0, 98.77,  91.96,  85.79,  80.17,  76.08,  70.91],
    ],
    capacityTables_Qh: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 42.80,  53.51,  62.95,  69.94,  76.02,  85.15,  97.92 ],
      [ 41.0, 41.45,  51.87,  61.10,  67.96,  73.95,  82.68,  94.92 ],
      [ 42.0, 40.25,  50.44,  59.48,  66.23,  72.15,  80.52,  92.28 ],
      [ 43.0, 39.28,  49.28,  58.18,  64.86,  70.74,  78.80,  90.15 ],
      [ 44.0, 38.52,  48.39,  57.20,  63.84,  69.69,  77.50,  88.50 ],
      [ 45.0, 37.96,  47.75,  56.51,  63.14,  69.00,  76.59,  87.31 ],
      [ 46.0, 37.22,  46.87,  55.54,  62.12,  67.97,  75.31,  85.70 ],
      [ 47.0, 36.12,  45.54,  54.03,  60.50,  66.27,  73.29,  83.26 ],
      [ 48.0, 34.69,  43.80,  52.02,  58.32,  63.95,  70.60,  80.06 ],
      [ 49.0, 32.80,  41.47,  49.31,  55.34,  60.75,  66.95,  75.78 ],
      [ 50.0, 30.69,  38.85,  46.25,  51.96,  57.10,  62.81,  70.98 ],
    ],
    capacityTables_Pac: [// kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  17.97,  18.52,  19.10,  19.69,  20.67,  21.70],
      [ 6.0,  18.25,  18.81,  19.39,  19.99,  20.99,  22.04],
      [ 7.0,  18.62,  19.19,  19.79,  20.40,  21.42,  22.49],
      [ 8.0,  19.18,  19.77,  20.38,  21.01,  22.06,  23.17],
      [ 9.0,  19.36,  19.96,  20.58,  21.22,  22.28,  23.39],
      [ 10.0, 19.65,  20.26,  20.89,  21.53,  22.61,  23.74],
      [ 11.0, 19.85,  20.46,  21.09,  21.75,  22.83,  23.98],
      [ 12.0, 20.14,  20.76,  21.40,  22.06,  23.17,  24.33],
      [ 13.0, 20.30,  20.93,  21.57,  22.24,  23.35,  24.52],
      [ 14.0, 20.44,  21.07,  21.72,  22.40,  23.52,  24.69],
      [ 15.0, 20.54,  21.18,  21.83,  22.51,  23.63,  24.81],
      [ 16.0, 20.75,  21.39,  22.05,  22.73,  23.87,  25.06],
      [ 17.0, 20.85,  21.49,  22.16,  22.84,  23.99,  25.18],
    ],
    nominal: {
      coolingCapacity: 65, // kW
      heatingCapacity: 69, // kW
      powerInput: {
        cooling: 20.4, // kW
        coolingRatedCurrent: 36.5, // A
        heating: 21.5, // kW
        heatingRatedCurrent: 37.2, // kW
      },
      EER: 3.19, // kW/kW
      COP: 3.21, // kW/kW
      powerSupply: {
        params: '380-415/3/50', // V/Ph/Hz
        manualSwitch: 125, // A
        fuse: 100, // A
      },
      maxInputConsumption: 29, // kW
      ratedCurrent: 54.5, // A
      maxStartedCurrent: 260, // A
      compressor: {
        type: 'Scroll (fixed speed)',
        brand: 'Danfoss',
        model: 'CH290A4BBA',
        quantity: 1, // pcs
        input: 20.4, // kW
        rateLoadAmpsRLA: 44.3, // A
        lockedRotorAmpLRA: 260.0, // A
        refrigerantOil: 6700, // ml
      },
      refrigerant: {
        type: 'R410A',
        refrigerantControl: 'EXV + capillary',
        weight: 11.5, // kg
      },
      condenser: {
        type: 'Fin-coil',
        numberOfRows: 2, // pcs
        fanMotorModel: 'YDK550-6E',
        quantityOfFanMotor: 2, // pcs
        airFlow: 27.0, // x1000 m3/h
        fanMotorRatedCurrent: 3.7, // A
        fanMotorInput: 0.8, // kW
      },
      evaporator: {
        type: 'Double-pipe',
        waterPressureDrop: 30.0, // kPa
        volume: 35.0, // l
        waterConnections: 'DN65',
        waterFlow: 11.2, // m3/h
        maxDesignPressure: 1.0, // MPa
        waterPipeConnectionType: 'Flexible join (flange)',
      },
      dimension: {
        net: { length: 2000.0, width: 1770.0, height: 960.0 },
        packingSize: { length: 2090.0, width: 1890.0, height: 1030.0 },
      },
      weight: { net: 530.0, operation: 590.0 },
      //...
      noiseLevel: 67.0, // dB
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
modellist.push(model2);


export {
  modellist
};
