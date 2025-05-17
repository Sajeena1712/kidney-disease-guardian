
// Patient data form fields
export type PatientDataField = {
  id: string;
  label: string;
  type: 'number' | 'select';
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  description?: string;
  unit?: string;
};

export const patientDataFields: PatientDataField[] = [
  {
    id: 'age',
    label: 'Age',
    type: 'number',
    min: 1,
    max: 120,
    unit: 'years',
    description: 'Patient age in years'
  },
  {
    id: 'bp',
    label: 'Blood Pressure',
    type: 'number',
    min: 50,
    max: 200,
    unit: 'mm/Hg',
    description: 'Patient blood pressure (systolic)'
  },
  {
    id: 'sg',
    label: 'Specific Gravity',
    type: 'select',
    options: [
      { value: '1.005', label: '1.005' },
      { value: '1.010', label: '1.010' },
      { value: '1.015', label: '1.015' },
      { value: '1.020', label: '1.020' },
      { value: '1.025', label: '1.025' }
    ],
    description: 'Specific gravity of urine'
  },
  {
    id: 'al',
    label: 'Albumin',
    type: 'select',
    options: [
      { value: '0', label: '0' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' }
    ],
    description: 'Albumin level in urine'
  },
  {
    id: 'su',
    label: 'Sugar',
    type: 'select',
    options: [
      { value: '0', label: '0' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' }
    ],
    description: 'Sugar level in urine'
  },
  {
    id: 'rbc',
    label: 'Red Blood Cells',
    type: 'select',
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'abnormal', label: 'Abnormal' }
    ],
    description: 'Red blood cells in urine'
  },
  {
    id: 'pc',
    label: 'Pus Cells',
    type: 'select',
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'abnormal', label: 'Abnormal' }
    ],
    description: 'Pus cells in urine'
  },
  {
    id: 'pcc',
    label: 'Pus Cell Clumps',
    type: 'select',
    options: [
      { value: 'present', label: 'Present' },
      { value: 'notpresent', label: 'Not Present' }
    ],
    description: 'Pus cell clumps in urine'
  },
  {
    id: 'ba',
    label: 'Bacteria',
    type: 'select',
    options: [
      { value: 'present', label: 'Present' },
      { value: 'notpresent', label: 'Not Present' }
    ],
    description: 'Bacteria in urine'
  },
  {
    id: 'bgr',
    label: 'Blood Glucose Random',
    type: 'number',
    min: 20,
    max: 500,
    unit: 'mg/dL',
    description: 'Blood glucose level'
  },
  {
    id: 'bu',
    label: 'Blood Urea',
    type: 'number',
    min: 1,
    max: 200,
    unit: 'mg/dL',
    description: 'Blood urea level'
  },
  {
    id: 'sc',
    label: 'Serum Creatinine',
    type: 'number',
    min: 0.1,
    max: 15,
    step: 0.1,
    unit: 'mg/dL',
    description: 'Serum creatinine level'
  },
  {
    id: 'sod',
    label: 'Sodium',
    type: 'number',
    min: 100,
    max: 180,
    unit: 'mEq/L',
    description: 'Sodium level'
  },
  {
    id: 'pot',
    label: 'Potassium',
    type: 'number',
    min: 2,
    max: 8,
    step: 0.1,
    unit: 'mEq/L',
    description: 'Potassium level'
  },
  {
    id: 'hemo',
    label: 'Hemoglobin',
    type: 'number',
    min: 3,
    max: 20,
    step: 0.1,
    unit: 'g/dL',
    description: 'Hemoglobin level'
  },
  {
    id: 'pcv',
    label: 'Packed Cell Volume',
    type: 'number',
    min: 10,
    max: 60,
    unit: '%',
    description: 'Packed cell volume'
  },
  {
    id: 'wc',
    label: 'White Blood Cell Count',
    type: 'number',
    min: 1000,
    max: 30000,
    unit: 'cells/mm³',
    description: 'White blood cell count'
  },
  {
    id: 'rc',
    label: 'Red Blood Cell Count',
    type: 'number',
    min: 2,
    max: 8,
    step: 0.1,
    unit: 'millions/mm³',
    description: 'Red blood cell count'
  },
  {
    id: 'htn',
    label: 'Hypertension',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    description: 'Presence of hypertension'
  },
  {
    id: 'dm',
    label: 'Diabetes Mellitus',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    description: 'Presence of diabetes mellitus'
  },
  {
    id: 'cad',
    label: 'Coronary Artery Disease',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    description: 'Presence of coronary artery disease'
  },
  {
    id: 'appet',
    label: 'Appetite',
    type: 'select',
    options: [
      { value: 'good', label: 'Good' },
      { value: 'poor', label: 'Poor' }
    ],
    description: 'Patient appetite'
  },
  {
    id: 'pe',
    label: 'Pedal Edema',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    description: 'Presence of pedal edema'
  },
  {
    id: 'ane',
    label: 'Anemia',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    description: 'Presence of anemia'
  }
];

export const featureImportanceData = [
  { feature: 'Hemoglobin', importance: 0.18 },
  { feature: 'Specific Gravity', importance: 0.15 },
  { feature: 'Albumin', importance: 0.14 },
  { feature: 'Serum Creatinine', importance: 0.12 },
  { feature: 'Blood Urea', importance: 0.11 },
  { feature: 'Packed Cell Volume', importance: 0.09 },
  { feature: 'Red Blood Cell Count', importance: 0.08 },
  { feature: 'Sodium', importance: 0.07 },
  { feature: 'Potassium', importance: 0.06 }
];

export const confusionMatrixData = {
  truePositive: 127,
  falsePositive: 8,
  trueNegative: 131,
  falseNegative: 9
};

export const rocCurveData = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.021, tpr: 0.31 },
  { fpr: 0.041, tpr: 0.57 },
  { fpr: 0.062, tpr: 0.73 },
  { fpr: 0.083, tpr: 0.86 },
  { fpr: 0.124, tpr: 0.92 },
  { fpr: 0.186, tpr: 0.96 },
  { fpr: 0.288, tpr: 0.98 },
  { fpr: 0.5, tpr: 0.99 },
  { fpr: 1, tpr: 1 }
];

export const ckdInfo = {
  definition: "Chronic Kidney Disease (CKD) is a condition characterized by a gradual loss of kidney function over time. The kidneys filter waste and excess fluid from your blood, which are then excreted in urine. When chronic kidney disease reaches an advanced stage, dangerous levels of fluid, electrolytes, and wastes can build up in your body.",
  causes: [
    "Diabetes (Type 1 or 2)",
    "High blood pressure",
    "Glomerulonephritis (inflammation of the kidney's filtering units)",
    "Polycystic kidney disease",
    "Prolonged obstruction of the urinary tract",
    "Recurrent kidney infection",
    "Vesicoureteral reflux (a condition that causes urine to back up into your kidneys)"
  ],
  symptoms: [
    "Nausea",
    "Vomiting",
    "Loss of appetite",
    "Fatigue and weakness",
    "Sleep problems",
    "Changes in urine output",
    "Decreased mental sharpness",
    "Muscle cramps",
    "Swelling of feet and ankles",
    "Persistent itching",
    "Chest pain, if fluid builds up around the lining of the heart",
    "Shortness of breath, if fluid builds up in the lungs",
    "High blood pressure that's difficult to control"
  ],
  prevention: [
    "Manage underlying conditions like diabetes and high blood pressure",
    "Maintain a healthy weight",
    "Don't smoke",
    "Limit alcohol consumption",
    "Follow a kidney-friendly diet (low in salt, potassium, and phosphorus)",
    "Stay hydrated",
    "Exercise regularly",
    "Take medications as prescribed",
    "Regular check-ups with healthcare providers"
  ]
};
