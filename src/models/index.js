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
    capacityTables_Pah: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 7.07,   8.03,   8.93,   9.70,   10.21,  10.83,  11.69 ],
      [ 41.0, 7.21,   8.20,   9.11,   9.90,   10.42,  11.05,  11.93 ],
      [ 42.0, 7.36,   8.37,   9.30,   10.10,  10.64,  11.27,  12.18 ],
      [ 43.0, 7.51,   8.54,   9.49,   10.31,  10.85,  11.50,  12.42 ],
      [ 44.0, 7.67,   8.71,   9.68,   10.52,  11.07,  41.56,  47.46 ],
      [ 45.0, 7.82,   8.89,   9.88,   10.74,  11.3,   11.98,  12.94 ],
      [ 46.0, 7.90,   8.98,   9.97,   10.84,  11.41,  12.10,  13.07 ],
      [ 47.0, 8.06,   9.16,   10.17,  11.06,  11.64,  12.34,  13.33 ],
      [ 48.0, 8.30,   9.43,   10.48,  11.39,  11.99,  12.71,  13.73 ],
      [ 49.0, 8.63,   9.81,   10.90,  11.85,  12.47,  13.22,  14.28 ],
      [ 50.0, 9.06,   10.30,  11.44,  12.44,  13.09,  13.88,  14.99 ],
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
        circuitsNumber: 1,
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
      },
      maximumCombinationQuantity: 16,
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
    capacityTables_Pah: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 13.45,  15.29,  16.99,  18.46,  19.43,  20.60,  22.25 ],
      [ 41.0, 13.73,  15.60,  17.33,  18.84,  19.83,  21.02,  22.70 ],
      [ 42.0, 14.01,  15.92,  17.69,  19.22,  20.24,  21.45,  23.17 ],
      [ 43.0, 14.29,  16.24,  18.05,  19.62,  20.65,  21.89,  23.64 ],
      [ 44.0, 14.58,  16.57,  18.42,  20.02,  21.07,  22.33,  24.12 ],
      [ 45.0, 14.88,  16.91,  18.79,  20.43,  21.50,  22.79,  24.61 ],
      [ 46.0, 15.03,  17.08,  18.98,  20.63,  21.72,  23.02,  24.86 ],
      [ 47.0, 15.33,  17.42,  19.36,  21.04,  22.15,  23.48,  25.36 ],
      [ 48.0, 15.79,  17.95,  19.94,  21.67,  22.81,  24.18,  26.12 ],
      [ 49.0, 16.42,  18.66,  20.74,  22.54,  23.73,  25.15,  27.16 ],
      [ 50.0, 17.24,  19.60,  21.77,  23.67,  24.91,  26.41,  28.52 ],
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
        circuitsNumber: 1,
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
      },
      maximumCombinationQuantity: 16,
    }
  }
});
let model3 = new Equipment ({
  model: "MC-SS80/RN1L",
  advanced: {
    heatingMode: true,
  },
  data: {
    capacityTables_Qc: [// coolingMode, kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  89.56,  84.34,  79.56,  75.20,  70.46,  64.83],
      [ 6.0,  92.59,  87.10,  82.09,  77.52,  72.71,  66.97],
      [ 7.0,  95.82,  90.06,  84.80,  80.00,  75.12,  69.26],
      [ 8.0,  98.78,  92.75,  87.26,  82.24,  77.31,  71.35],
      [ 9.0,  101.57, 95.28,  89.55,  84.32,  79.35,  73.31],
      [ 10.0, 105.42, 98.80,  92.77,  87.27,  82.21,  76.04],
      [ 11.0, 108.36, 101.46, 95.18,  89.45,  84.35,  78.11],
      [ 12.0, 110.84, 103.68, 97.17,  91.24,  86.13,  79.84],
      [ 13.0, 112.82, 105.44, 98.72,  92.61,  87.52,  81.22],
      [ 14.0, 115.62, 107.96, 100.99, 94.65,  89.54,  83.18],
      [ 15.0, 117.11, 109.24, 102.10, 95.59,  90.53,  29.89],
      [ 16.0, 120.02, 111.85, 104.44, 97.70,  92.62,  86.23],
      [ 17.0, 121.56, 113.18, 105.58, 98.67,  93.64,  87.27],
    ],
    capacityTables_Qh: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 52.73,  65.91,  77.55,  86.16,  93.65,  104.89, 120.63 ],
      [ 41.0, 51.06,  63.90,  75.27,  83.72,  91.10,  101.85, 116.93 ],
      [ 42.0, 49.58,  62.13,  73.27,  81.59,  88.88,  99.19,  113.67 ],
      [ 43.0, 48.38,  60.71,  71.68,  79.91,  87.14,  97.07,  111.05 ],
      [ 44.0, 47.75,  59.61,  70.46,  78.64,  85.85,  95.47,  109.02 ],
      [ 45.0, 46.76,  58.82,  69.61,  77.78,  85.00,  94.35,  107.56 ],
      [ 46.0, 45.85,  57.74,  68.41,  76.52,  83.73,  92.77,  105.57 ],
      [ 47.0, 44.49,  56.11,  66.56,  74.53,  81.63,  90.28,  102.56 ],
      [ 48.0, 42.74,  53.96,  64.08,  71.84,  78.77,  86.97,  98.62 ],
      [ 49.0, 40.41,  51.09,  60.74,  68.18,  74.84,  82.47,  93.36 ],
      [ 50.0, 37.81,  47.86,  56.97,  64.01,  70.35,  77.38,  87.44 ],
    ],
    capacityTables_Pac: [// kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  22.72,  23.43,  24.15,  24.90,  26.14,  27.45],
      [ 6.0,  23.08,  23.79,  24.53,  25.78,  26.55,  27.88],
      [ 7.0,  23.55,  24.28,  25.03,  25.80,  27.09,  28.44],
      [ 8.0,  24.25,  25.00,  25.78,  26.57,  27.90,  29.30],
      [ 9.0,  24.49,  25.25,  26.03,  26.83,  28.17,  29.58],
      [ 10.0, 24.86,  25.62,  26.42,  27.23,  28.60,  30.03],
      [ 11.0, 25.10,  25.88,  26.68,  27.50,  28.88,  30.32],
      [ 12.0, 25.42,  26.26,  27.07,  27.91,  29.30,  30.77],
      [ 13.0, 25.67,  26.47,  27.28,  28.13,  29.53,  31.01],
      [ 14.0, 25.85,  26.65,  27.47,  28.32,  29.74,  31.23],
      [ 15.0, 25.98,  26.78,  27.61,  28.46,  29.89,  31.38],
      [ 16.0, 26.24,  27.05,  27.89,  28.75,  30.19,  31.70],
      [ 17.0, 26.37,  27.18,  28.02,  28.89,  30.33,  31.85],
    ],
    capacityTables_Pah: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 16.58,  18.84,  20.94,  22.76,  23.95,  25.39,  27.42 ],
      [ 41.0, 16.92,  19.23,  21.36,  23.22,  24.44,  25.91,  27.98 ],
      [ 42.0, 17.26,  19.62,  21.80,  23.69,  24.94,  26.44,  28.55 ],
      [ 43.0, 17.62,  20.02,  22.24,  24.18,  25.45,  26.98,  29.14 ],
      [ 44.0, 17.98,  20.43,  22.70,  24.67,  25.97,  27.53,  29.73 ],
      [ 45.0, 18.34,  20.84,  23.16,  25.18,  26.50,  28.09,  30.34 ],
      [ 46.0, 18.53,  21.05,  23.39,  25.43,  26.77,  28.37,  30.64 ],
      [ 47.0, 18.90,  21.47,  23.86,  25.94,  27.30,  28.94,  31.25 ],
      [ 48.0, 19.46,  22.12,  24.58,  26.71,  28.12,  29.81,  32.19 ],
      [ 49.0, 20.24,  23.00,  25.56,  27.78,  29.24,  31.00,  33.48 ],
      [ 50.0, 21.26,  24.15,  26.84,  29.17,  30.71,  32.55,  35.15 ],
    ],
    nominal: {
      coolingCapacity: 80, // kW
      heatingCapacity: 85, // kW
      powerInput: {
        cooling: 25.8, // kW
        coolingRatedCurrent: 43.8, // A
        heating: 26.5, // kW
        heatingRatedCurrent: 40.0, // kW
      },
      EER: 3.1, // kW/kW
      COP: 3.21, // kW/kW
      powerSupply: {
        params: '380-415/3/50', // V/Ph/Hz
        manualSwitch: 150, // A
        fuse: 100, // A
      },
      maxInputConsumption: 34.6, // kW
      ratedCurrent: 65, // A
      maxStartedCurrent: 197, // A
      compressor: {
        type: 'Scroll (fixed speed)',
        brand: 'Danfoss',
        model: 'SH184A4ALC',
        quantity: 2, // pcs
        input: 13.7, // kW
        rateLoadAmpsRLA: 27.6, // A
        lockedRotorAmpLRA: 197.0, // A
        refrigerantOil: 3600, // ml
      },
      refrigerant: {
        type: 'R410A',
        refrigerantControl: 'EXV + capillary',
        weight: 6.5, // kg
        circuitsNumber: 2,
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
        type: 'Shell-tube',
        waterPressureDrop: 30.0, // kPa
        volume: 47.5, // l
        waterConnections: 'DN65',
        waterFlow: 13.8, // m3/h
        maxDesignPressure: 1.0, // MPa
        waterPipeConnectionType: 'Flexible join (flange)',
      },
      dimension: {
        net: { length: 2000.0, width: 1770.0, height: 960.0 },
        packingSize: { length: 2090.0, width: 1890.0, height: 1030.0 },
      },
      weight: { net: 645.0, operation: 710.0 },
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
      },
      maximumCombinationQuantity: 16,
    }
  }
});
let model4 = new Equipment ({
  model: "MC-SS130/RN1L",
  advanced: {
    heatingMode: true,
  },
  data: {
    capacityTables_Qc: [// coolingMode, kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  145.54, 137.04, 129.29, 122.20, 114.50, 105.34],
      [ 6.0,  150.46, 141.54, 133.40, 125.97, 118.16, 108.83],
      [ 7.0,  155.71, 146.34, 137.80, 130.00, 122.07, 112.07],
      [ 8.0,  160.52, 150.72, 141.79, 133.64, 125.62, 115.95],
      [ 9.0,  165.05, 154.83, 145.52, 137.02, 128.94, 119.14],
      [ 10.0, 171.31, 160.55, 150.75, 141.82, 133.59, 123.57],
      [ 11.0, 176.08, 164.87, 154.66, 145.36, 137.08, 126.93],
      [ 12.0, 180.11, 168.49, 157.91, 148.27, 139.97, 129.75],
      [ 13.0, 183.33, 171.33, 160.42, 150.49, 142.22, 131.98],
      [ 14.0, 187.89, 175.43, 164.11, 153.80, 145.50, 135.17],
      [ 15.0, 190.30, 177.52, 165.90, 155.34, 147.11, 136.81],
      [ 16.0, 195.03, 181.76, 169.71, 158.76, 150.50, 140.12],
      [ 17.0, 197.53, 183.92, 171.57, 160.35, 152.17, 141.82],
    ],
    capacityTables_Qh: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 85.61, 107.01, 125.90, 139.89, 152.05, 170.29, 195.84],
      [ 41.0, 82.89,  103.75, 122.20, 135.93, 147.91, 165.36, 189.83],
      [ 42.0, 80.50,  100.87, 118.96, 132.47, 144.30, 161.04, 184.55],
      [ 43.0, 78.55,  98.56,  116.37, 129.73, 141.47, 157.60, 180.29],
      [ 44.0, 77.03,  96.78,  114.39, 127.67, 139.38, 154.99, 177.00],
      [ 45.0, 75.92,  95.49,  113.01, 126.27, 138.00, 153.18, 174.63],
      [ 46.0, 74.43,  93.74,  111.07, 124.24, 135.93, 150.61, 171.39],
      [ 47.0, 72.23,  91.09,  108.05, 121.00, 132.53, 146.58, 166.52],
      [ 48.0, 69.38,  87.60,  104.04, 116.64, 127.89, 141.19, 160.11],
      [ 49.0, 65.61,  82.94,  98.62,  110.69, 121.50, 133.89, 151.56],
      [ 50.0, 61.38,  77.70,  92.50,  103.93, 114.21, 125.63, 141.96],
    ],
    capacityTables_Pac: [// kW
      [ 0.0,  21.0,   25.0,   30.0,   35.0,   40.0,   46.0 ],
      [ 5.0,  37.25,  38.41,  39.59,  40.82,  42.86,  45.00],
      [ 6.0,  37.83,  39.00,  40.21,  41.45,  43.53,  45.70],
      [ 7.0,  38.61,  39.80,  41.03,  42.30,  44.42,  46.64],
      [ 8.0,  39.76,  40.99,  42.26,  43.57,  45.75,  48.03],
      [ 9.0,  40.15,  41.39,  42.67,  43.99,  46.19,  48.50],
      [ 10.0, 40.75,  42.01,  43.31,  44.65,  46.88,  49.23],
      [ 11.0, 41.15,  42.43,  43.74,  45.09,  47.35,  49.71],
      [ 12.0, 41.76,  43.05,  44.38,  45.75,  48.04,  50.44],
      [ 13.0, 42.09,  43.39,  44.73,  46.12,  48.42,  50.84],
      [ 14.0, 42.38,  43.69,  45.04,  46.44,  48.76,  51.20],
      [ 15.0, 42.59,  43.91,  45.27,  46.67,  49.00,  51.45],
      [ 16.0, 43.02,  44.35,  45.72,  47.13,  49.49,  51.97],
      [ 17.0, 43.23,  44.57,  45.95,  47.37,  49.74,  52.22],
    ],
    capacityTables_Pah: [// kW
      [ 0.0,  -10.0,  -6.0,   -2.0,   2.0,    7.0,    10.0,   13.0  ],
      [ 40.0, 26.91,  30.57,  33.97,  36.93,  38.87,  41.20,  44.50 ],
      [ 41.0, 27.45,  31.20,  34.66,  37.68,  39.66,  42.04,  45.40 ],
      [ 42.0, 28.01,  31.83,  35.37,  38.45,  40.47,  42.90,  46.33 ],
      [ 43.0, 28.59,  32.48,  36.09,  39.23,  41.30,  43.78,  47.28 ],
      [ 44.0, 29.17,  33.15,  36.83,  40.03,  42.14,  44.67,  48.24 ],
      [ 45.0, 29.76,  33.82,  37.58,  40.85,  43.00,  45.58,  49.23 ],
      [ 46.0, 30.06,  34.16,  37.96,  41.26,  43.43,  46.04,  49.72 ],
      [ 47.0, 30.66,  34.85,  38.72,  42.08,  44.30,  46.96,  50.71 ],
      [ 48.0, 31.58,  35.89,  39.88,  43.35,  45.63,  48.37,  52.23 ],
      [ 49.0, 32.85,  37.33,  41.47,  45.08,  47.45,  50.30,  54.32 ],
      [ 50.0, 34.49,  39.19,  43.55,  47.33,  49.83,  52.81,  57.04 ],
    ],
    nominal: {
      coolingCapacity: 130, // kW
      heatingCapacity: 138, // kW
      powerInput: {
        cooling: 42.3, // kW
        coolingRatedCurrent: 73.0, // A
        heating: 43.0, // kW
        heatingRatedCurrent: 74.4, // kW
      },
      EER: 3.07, // kW/kW
      COP: 3.21, // kW/kW
      powerSupply: {
        params: '380-415/3/50', // V/Ph/Hz
        manualSwitch: 200, // A
        fuse: 150, // A
      },
      maxInputConsumption: 59.0, // kW
      ratedCurrent: 109, // A
      maxStartedCurrent: 308, // A
      compressor: {
        type: 'Scroll (fixed speed)',
        brand: 'Danfoss',
        model: 'CH290A4BBA',
        quantity: 2, // pcs
        input: 20.5, // kW
        rateLoadAmpsRLA: 44.3, // A
        lockedRotorAmpLRA: 260.0, // A
        refrigerantOil: 6700, // ml
      },
      refrigerant: {
        type: 'R410A',
        refrigerantControl: 'EXV + capillary',
        weight: 10.5, // kg
        circuitsNumber: 2,
      },
      condenser: {
        type: 'Fin-coil',
        numberOfRows: 3, // pcs
        fanMotorModel: 'YS2000-6/8A',
        quantityOfFanMotor: 2, // pcs
        airFlow: 50.0, // x1000 m3/h
        fanMotorRatedCurrent: 4.5, // A
        fanMotorInput: 2.35, // kW
      },
      evaporator: {
        type: 'Shell-tube',
        waterPressureDrop: 40.0, // kPa
        volume: 60.0, // l
        waterConnections: 'DN65',
        waterFlow: 22.4, // m3/h
        maxDesignPressure: 1.0, // MPa
        waterPipeConnectionType: 'Flexible join (flange)',
      },
      dimension: {
        net: { length: 2200.0, width: 2060.0, height: 1120.0 },
        packingSize: { length: 2250.0, width: 2200.0, height: 1180.0 },
      },
      weight: { net: 965.0, operation: 1035.0 },
      //...
      noiseLevel: 68.0, // dB
      operationWaterTemperature: {
        cooling: { min: 5.0, max: 17.0 },
        heating: { min: 25.0, max: 50.0 },
        comment: 'Antifreeze should be added for less than 5 C in cooling mode',
      },
      ambientTemperature: {
        cooling: { min: -10.0, max: 46.0 },
        heating: { min: -15.0, max: 24.0 },
      },
      maximumCombinationQuantity: 16,
    }
  }
});

modellist.push(model1);
modellist.push(model2);
modellist.push(model3);
modellist.push(model4);

export {
  modellist
};
