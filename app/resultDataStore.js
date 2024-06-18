import { create } from 'zustand';


const useResultStore = create((set) => ({
    units: {
        suggestedValveSize: ['1ft', '2ft'],
        velocity: ['ft/min', 'm/s']
    },
    initialResultData: {
        suggestedValveSize: { value: '' },
        ratedCv: { value: '' },
        valveTravel: { value: '' },
        predSplIec: { value: '' },
        valveVelocity: { value: '', unit: 'ft/min' },
        inletPipeSize: { value: '' },
        outletPipeSize: { value: '' },
        inletPipeVelocity: { value: '', unit: 'ft/min' },
        outletPipeVelocity: { value: '', unit: 'ft/min' },
    },
    resultData: {
        suggestedValveSize: { value: '' },
        ratedCv: { value: '' },
        valveTravel: { value: '' },
        predSplIec: { value: '' },
        valveVelocity: { value: '', unit: 'ft/min' },
        inletPipeSize: { value: '' },
        outletPipeSize: { value: '' },
        inletPipeVelocity: { value: '', unit: 'ft/min' },
        outletPipeVelocity: { value: '', unit: 'ft/min' },
    },
    setResultData: (key, field, value) => set((state) => {
        let newData = { ...state.resultData };

        if (key === "valveVelocity" && field === "unit") {
            newData = {
                ...state.resultData,
                valveVelocity: {
                    ...state.resultData.valveVelocity,
                    unit: value
                },
                inletPipeVelocity: {
                    ...state.resultData.inletPipeVelocity,
                    unit: value
                },
                outletPipeVelocity: {
                    ...state.resultData.outletPipeVelocity,
                    unit: value
                }
            };
        } else {
            newData = {
                ...state.resultData,
                [key]: {
                    ...state.resultData[key],
                    [field]: value
                }
            };
        }

        return { resultData: newData };
    }),
    fillSampleData: () => set(state => {
        const sampleData = {
            suggestedValveSize: { value: '1ft' },
            ratedCv: { value: 150 },
            valveTravel: { value: 89.7},
            predSplIec: { value: '<70' },
            valveVelocity: { value: 13, unit: 'ft/min' },
            inletPipeSize: { value: 3 },
            outletPipeSize: { value: 3 },
            inletPipeVelocity: { value: 5, unit: 'ft/min' },
            outletPipeVelocity: { value: 5, unit: 'ft/min' },
        };
        return { resultData : sampleData };
    }),
    clearResultData: () => set(state => ({
        resultData: state.initialResultData,
    })),
}));

export default useResultStore;
