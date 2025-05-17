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
    description: 'Patient systolic blood pressure'
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
    id: 'htn',
    label: 'Hypertension',
    type: 'select',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ],
    description: 'Presence of hypertension'
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
