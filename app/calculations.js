const { UnitConversionFunction } = require('./conversions')
const { getSaturationTemperature } = require('./steamTable')
  
function roundToSignificantFigures(value, n) {
  if (value === 0) return 0;
  return Number(value.toFixed(n))
}
  
export function calculateRequiredCv(formData) {

    const{ fluidType, inletPressure, outletPressure, inletTemperature, flowRate, specificGravity } = formData;
    
    let Cv;
    const SG = specificGravity.value || 1;
  
    if (fluidType.value === 'Other Liquids' || fluidType.value === 'Water') {
  
      // Cv calculation for liquid
  
      const P1 = UnitConversionFunction(inletPressure.value,inletPressure.unit,'psi');
      const P2 =  UnitConversionFunction(outletPressure.value,outletPressure.unit,'psi');
      const deltaP = P1 - P2;
      const Q = UnitConversionFunction(flowRate.value,flowRate.unit,'gal/min');
      Cv = Q / Math.sqrt(deltaP / SG);
  
    } else if (fluidType.value === 'Other Gases' || fluidType.value === 'Air') {
  
        // Cv calculation for gas
  
        const T = roundToSignificantFigures(UnitConversionFunction(inletTemperature.value,inletTemperature.unit,'R'),2);
        const Q = UnitConversionFunction(flowRate.value,flowRate.unit,'ft3/h');
        const P1 = UnitConversionFunction(inletPressure.value,inletPressure.unit,'psi abs');
        const P2 =  UnitConversionFunction(outletPressure.value,outletPressure.unit,'psi abs');
        const deltaP = P1 - P2;
  
        if ((2 * P2) > P1) {
            Cv = (Q * Math.sqrt(T)) / (1360 * Math.sqrt(deltaP * P2));
        } else {
            Cv = (Q * Math.sqrt(T)) / (660 * P1);
        }
    } else if (fluidType.value === 'Steam') {

      console.log(Cv);
  
        // Cv calculation for steam
  
        let K;
        let P1 = UnitConversionFunction(inletPressure.value,inletPressure.unit,'psi');
        let T = UnitConversionFunction(inletTemperature.value,inletTemperature.unit,'F');
  
        const Fsup = (T - (getSaturationTemperature(P1)));
        if (Fsup > 0) {
            K = 1 + 0.0007 * Fsup;
        } else {
            K = 1;
        }
  
        const Q = UnitConversionFunction(flowRate.value,flowRate.unit,'lb/h');
        P1 = UnitConversionFunction(inletPressure.value,inletPressure.unit,'psi abs');
        const P2 =  UnitConversionFunction(outletPressure.value,outletPressure.unit,'psi abs');
        const deltaP = P1 - P2;
        T = UnitConversionFunction(inletTemperature.value,inletTemperature.unit,'R');
  
        if (2 * P2 > P1) {
            Cv = (Q * K) / (2.1 * Math.sqrt(deltaP * (P1 + P2)));
        } else {
            Cv = (Q * K) / (1.82 * P1);
        }
        console.log(Cv);
    } else {
        throw new Error('Invalid fluid type');
    }
  
    return roundToSignificantFigures(Cv,4);
  }