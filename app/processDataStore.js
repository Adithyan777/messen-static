import { create } from 'zustand';

const useProcessDataStore = create(set => ({
    units: {
        fluidType: ["Water", "Steam", "Air", "Other Liquids", "Other Gases"],
        pressure: ["bar", "psi", "kPa", "MPa", "bar abs", "psi abs", "kPa abs", "MPa abs"],
        temperature: ["C", "F"],
        flowRate: ["gal/min", "m3/h", "l/h", "ft3/h", "ft3/min" , "lb/h", "kg/h", "l/min", "m3/min", "gal/h",]
    },
    initialFormData: {
        fluidType: { value: undefined },
        inletPressure: { value: undefined, unit: "bar" },
        outletPressure: { value: undefined, unit: "bar" },
        inletTemperature: { value: undefined, unit: "F" },
        flowRate: { value: undefined, unit: "gal/min" },
        specificGravity: { value: undefined },
        requiredCv: { value: undefined }
    },
    formData: {
        fluidType: { value: undefined },
        inletPressure: { value: undefined, unit: "bar" },
        outletPressure: { value: undefined, unit: "bar" },
        inletTemperature: { value: undefined, unit: "F" },
        flowRate: { value: undefined, unit: "gal/min" },
        specificGravity: { value: undefined },
        requiredCv: { value: undefined }
    },
    error: "",
    setFormData: (key, field, value) => set(state => {
        let parsedValue;
        if(key === 'fluidType'){
            const newFormData = {
                ...state.formData,
                [key]: {
                    ...state.formData[key],
                    [field]: value
                }
            };
            return { formData: newFormData, error: "" };

        }
        else{
            parsedValue = field === 'value' ? parseFloat(value) : value;
            const newFormData = {
                ...state.formData,
                [key]: {
                    ...state.formData[key],
                    [field]: parsedValue
                }
            };
    
            const inletPressureValue = parseFloat(newFormData.inletPressure.value);
            const outletPressureValue = parseFloat(newFormData.outletPressure.value);
    
            if (key === "inletPressure" && outletPressureValue >= inletPressureValue) {
                return { formData: newFormData, error: "Outlet pressure must be less than inlet pressure." };
            } else if (key === "outletPressure" && outletPressureValue >= inletPressureValue) {
                return { formData: newFormData, error: "Outlet pressure must be less than inlet pressure." };
            } else {
                return { formData: newFormData, error: "" };
            }
        }
    }),
    fillSampleData: () => set(() => {
        const sampleData = {
            fluidType: { value: "Water" },
            inletPressure: { value: 146, unit: "psi" },
            outletPressure: { value: 145, unit: "psi" },
            inletTemperature: { value: 68, unit: "F" },
            flowRate: { value: 2.746, unit: "m3/h" },
            specificGravity: { value: 1 },
            requiredCv: { value: undefined }
        };
        return { formData: sampleData, error: "" };
    }),
    clearFormData: () => set(state => ({
        formData: state.initialFormData,
        error: ""
    }))
}));

export default useProcessDataStore;

