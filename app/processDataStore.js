import { create } from 'zustand';

const useProcessDataStore = create(set => ({
    units: {
        fluidType: ["Water", "Steam", "Air"],
        pressure: ["bar", "psi", "psia"],
        temperature: ["C", "F"],
        flowRate: ["gal/min", "m3/h", "l/h"]
    },
    initialFormData: {
        fluidType: "Water",
        inletPressure: { value: "", unit: "bar" },
        outletPressure: { value: "", unit: "bar" },
        inletTemperature: { value: "", unit: "C" },
        flowRate: { value: "", unit: "gal/min" }
    },
    formData: {
        fluidType: "Water",
        inletPressure: { value: "", unit: "bar" },
        outletPressure: { value: "", unit: "bar" },
        inletTemperature: { value: "", unit: "C" },
        flowRate: { value: "", unit: "gal/min" }
    },
    error: "",
    setFormData: (key, field, value) => set(state => {
        const newFormData = {
            ...state.formData,
            [key]: {
                ...state.formData[key],
                [field]: value
            }
        };

        const inletPressureValue = parseFloat(newFormData.inletPressure.value);
        const outletPressureValue = parseFloat(newFormData.outletPressure.value);

        if (key === "inletPressure" && outletPressureValue > inletPressureValue) {
            return { formData: newFormData, error: "Outlet pressure must be less than or equal to inlet pressure." };
        } else if (key === "outletPressure" && outletPressureValue > inletPressureValue) {
            return { formData: newFormData, error: "Outlet pressure must be less than or equal to inlet pressure." };
        } else {
            return { formData: newFormData, error: "" };
        }
    }),
    fillSampleData: () => set(state => {
        const sampleData = {
            fluidType: "Steam",
            inletPressure: { value: "10", unit: "psi" },
            outletPressure: { value: "5", unit: "psi" },
            inletTemperature: { value: "150", unit: "F" },
            flowRate: { value: "100", unit: "m3/h" }
        };
        return { formData: sampleData, error: "" };
    }),
    clearFormData: () => set(state => ({
        formData: state.initialFormData,
        error: ""
    }))
}));

export default useProcessDataStore;
