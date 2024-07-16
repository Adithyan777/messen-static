import stateStore from '@/app/stateStore';
import React from 'react'

const PrintTemplate = React.forwardRef((props, ref) => {
    
    const { formData, selectedUnits } = stateStore()

    return (
      <div ref={ref} className="flex flex-col items-center p-5">
        <div className="flex items-center justify-between w-full mb-5">
          <img src="/messen-logo2.png" alt="Messen Logo" />
          <h1 className="text-primary scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Valve Sizing Report</h1>
      </div>
        <table>
        <thead>
          <tr>
            <th className="border text-primary px-2 py-1">Tag No</th>
            <th className="border text-primary px-2 py-1">Item No</th>
            <th className="border text-primary px-2 py-1">Fluid Type</th>
            <th className="border text-primary px-2 py-1">Specific Gravity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1">{formData.identifiers?.tagNo}</td>
            <td className="border border-black px-2 py-1">{formData.identifiers?.itemNo}</td>
            <td className="border border-black px-2 py-1">{formData.normal?.fluidType}</td>
            <td className="border border-black px-2 py-1">{formData.normal?.specificGravity}</td>
          </tr>
        </tbody>
      </table>
        <table>
          <thead>
            <tr>
              <th className="border text-primary px-2 py-1">Quantity</th>
              <th className="border text-primary px-2 py-1">Units</th>
              <th className="border text-primary px-2 py-1">Minimum</th>
              <th className="border text-primary px-2 py-1">Normal</th>
              <th className="border text-primary px-2 py-1">Maximum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-2 py-1">Flow Rate</td>
              <td className="border border-black px-2 py-1">[{selectedUnits?.flowRate}]</td>
              <td className="border border-black px-2 py-1">{formData.minimum?.flowRate}</td>
              <td className="border border-black px-2 py-1">{formData.normal?.flowRate}</td>
              <td className="border border-black px-2 py-1">{formData.maximum?.flowRate}</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">Inlet Pressure</td>
              <td className="border border-black px-2 py-1">[{selectedUnits?.inletPressure}]</td>
              <td className="border border-black px-2 py-1">{formData.minimum?.inletPressure}</td>
              <td className="border border-black px-2 py-1">{formData.normal?.inletPressure}</td>
              <td className="border border-black px-2 py-1">{formData.maximum?.inletPressure}</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">Outlet Pressure</td>
              <td className="border border-black px-2 py-1">[{selectedUnits?.inletPressure}]</td>
              <td className="border border-black px-2 py-1">{formData.minimum?.outletPressure}</td>
              <td className="border border-black px-2 py-1">{formData.normal?.outletPressure}</td>
              <td className="border border-black px-2 py-1">{formData.maximum?.outletPressure}</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">Pressure Difference</td>
              <td className="border border-black px-2 py-1">[{selectedUnits?.inletPressure}]</td>
              <td className="border border-black px-2 py-1">{(formData.minimum?.inletPressure - formData.minimum?.outletPressure) || ''}</td>
              <td className="border border-black px-2 py-1">{(formData.normal?.inletPressure - formData.normal?.outletPressure) || ''}</td>
              <td className="border border-black px-2 py-1">{(formData.maximum?.inletPressure - formData.maximum?.outletPressure) || ''}</td>
            </tr>
            <tr>
              <td className="border border-black px-2 py-1">Inlet Temperature (°F)</td>
              <td className="border border-black px-2 py-1">[{selectedUnits?.inletTemperature}]</td>
              <td className="border border-black px-2 py-1">{formData.minimum?.inletTemperature}</td>
              <td className="border border-black px-2 py-1">{formData.normal?.inletTemperature}</td>
              <td className="border border-black px-2 py-1">{formData.maximum?.inletTemperature}</td>
            </tr>
            <tr>
              <td colSpan="2" className="border text-primary text-lg font-semibold px-2 py-1">Required Cv</td>
              <td className="border text-primary text-lg font-semibold px-2 py-1">{formData.minimum?.requiredCv}</td>
              <td className="border text-primary text-lg font-semibold px-2 py-1">{formData.normal?.requiredCv}</td>
              <td className="border text-primary text-lg font-semibold px-2 py-1">{formData.maximum?.requiredCv}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
  

export default PrintTemplate