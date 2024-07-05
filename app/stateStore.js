import { create } from 'zustand';

const stateStore = create(set => ({
    units: {
        fluidType: ["Water", "Steam", "Air", "Other Liquids", "Other Gases"],
        pressure: ["bar", "psi", "kPa", "MPa", "bar abs", "psi abs", "kPa abs", "MPa abs"],
        temperature: ["C", "F"],
        flowRate: ["gal/min", "m3/h", "l/h", "ft3/h", "ft3/min" , "lb/h", "kg/h", "l/min", "m3/min", "gal/h",]
    },
    initialFormData: {
        normal: {
            fluidType: undefined,
            inletPressure: undefined,
            outletPressure: undefined,
            inletTemperature: undefined,
            flowRate: undefined,
            specificGravity: undefined,
            requiredCv: undefined
        },
        minimum: {
            fluidType: undefined,
            inletPressure: undefined,
            outletPressure: undefined,
            inletTemperature: undefined,
            flowRate: undefined,
            specificGravity: undefined,
            requiredCv: undefined
        },
        maximum: {
            fluidType: undefined,
            inletPressure: undefined,
            outletPressure: undefined,
            inletTemperature: undefined,
            flowRate: undefined,
            specificGravity: undefined,
            requiredCv: undefined
        }
    },
    initialSelectedUnits: {
        fluidType: undefined,
        inletPressure: "bar",
        outletPressure: "bar",
        inletTemperature: "F",
        flowRate: "gal/min",
        specificGravity: undefined,
        requiredCv: undefined
    },
    formData: {
        normal: {
            fluidType: undefined,
            inletPressure: undefined,
            outletPressure: undefined,
            inletTemperature: undefined,
            flowRate: undefined,
            specificGravity: undefined,
            requiredCv: undefined
        },
        minimum: {
            fluidType: undefined,
            inletPressure: undefined,
            outletPressure: undefined,
            inletTemperature: undefined,
            flowRate: undefined,
            specificGravity: undefined,
            requiredCv: undefined
        },
        maximum: {
            fluidType: undefined,
            inletPressure: undefined,
            outletPressure: undefined,
            inletTemperature: undefined,
            flowRate: undefined,
            specificGravity: undefined,
            requiredCv: undefined
        }
    },
    selectedUnits: {
        fluidType: undefined,
        inletPressure: "bar",
        outletPressure: "bar",
        inletTemperature: "F",
        flowRate: "gal/min",
        specificGravity: undefined,
        requiredCv: undefined
    },
    error: "",
    setFormData: (caseType, key, value) => set(state => {
        let parsedValue;
        if(key === 'fluidType'){
            const newFormData = {
                ...state.formData,
                [caseType]: {
                    ...state.formData[caseType],
                    [key]: value
                }
            };
            return { formData: newFormData, error: "" };
        }
        parsedValue = parseFloat(value);
        const newFormData = {
            ...state.formData,
            [caseType]: {
                ...state.formData[caseType],
                [key]: parsedValue
            }
        };

        const inletPressureValue = parseFloat(newFormData[caseType].inletPressure);
        const outletPressureValue = parseFloat(newFormData[caseType].outletPressure);

        if (key === "inletPressure" && outletPressureValue >= inletPressureValue) {
            return { formData: newFormData, error: "Outlet pressure must be less than inlet pressure." };
        } else if (key === "outletPressure" && outletPressureValue >= inletPressureValue) {
            return { formData: newFormData, error: "Outlet pressure must be less than inlet pressure." };
        } else {
            return { formData: newFormData, error: "" };
        }
    }),
    setUnit: (key, unit) => set(state => ({
        selectedUnits: {
            ...state.selectedUnits,
            [key]: unit
        }
    })),
    fillSampleData: () => set(() => {
        const sampleData = {
            normal: {
                fluidType: "Water",
                inletPressure: 146,
                outletPressure: 145,
                inletTemperature: 68,
                flowRate: 2.746,
                specificGravity: 1,
                requiredCv: undefined
            },
            minimum: {
                fluidType: "Water",
                inletPressure: 140,
                outletPressure: 139,
                inletTemperature: 65,
                flowRate: 2,
                specificGravity: 1,
                requiredCv: undefined
            },
            maximum: {
                fluidType: "Water",
                inletPressure: 150,
                outletPressure: 149,
                inletTemperature: 72,
                flowRate: 3,
                specificGravity: 1,
                requiredCv: undefined
            }
        };
        const sampleUnits = {
            fluidType: undefined,
            inletPressure: "psi",
            outletPressure: "psi",
            inletTemperature: "F",
            flowRate: "m3/h",
            specificGravity: undefined,
            requiredCv: undefined
        };
        return { formData: sampleData, selectedUnits: sampleUnits, error: "" };
    }),
    clearFormData: () => set(state => ({
        formData: state.initialFormData,
        selectedUnits: state.initialSelectedUnits,
        error: ""
    }))
}));

export default stateStore;
