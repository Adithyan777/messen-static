import React, { useState } from'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, Input, Button } from "@/components/ui";

function ProcessDataCard() {
    const units = {
        fluidType: ["Water", "Steam", "Air"],
        pressure: ["bar", "psi", "psia"],
        temperature: ["C", "F"],
        flowRate: ["gal/min", "m3/h", "l/h"]
    };

    const initialFormData = {
        fluidType: units.fluidType[0],
        inletPressure: { value: "", unit: units.pressure[0] },
        outletPressure: { value: "", unit: units.pressure[0] },
        inletTemperature: { value: "", unit: units.temperature[0] },
        flowRate: { value: "", unit: units.flowRate[0] }
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (key, field, value) => {
        setFormData(prevState => ({
           ...prevState,
            [key]: {
               ...prevState[key],
                [field]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const handleClear = () => {
        setFormData(initialFormData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Process Data</CardTitle>
                    <CardDescription>Enter the details about your process conditions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <Label>Fluid Type</Label>
                        <Select value={formData.fluidType} onChange={(value) => handleInputChange("fluidType", "value", value)}>
                            {units.fluidType.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Label>Inlet Pressure</Label>
                        <div className="flex items-center gap-2">
                            <Select value={formData.inletPressure.unit} onChange={(value) => handleInputChange("inletPressure", "unit", value)}>
                                {units.pressure.map((unit) => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </Select>
                            <Input type="number" value={formData.inletPressure.value} onChange={(e) => handleInputChange("inletPressure", "value", e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <Label>Outlet Pressure</Label>
                        <div className="flex items-center gap-2">
                            <Select value={formData.inletPressure.unit} disabled={true}>
                                {units.pressure.map((unit) => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </Select>
                            <Input type="number" value={formData.outletPressure.value} onChange={(e) => handleInputChange("outletPressure", "value", e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <Label>Pressure Difference</Label>
                        <div className="flex items-center gap-2">
                            <Select value={formData.inletPressure.unit} disabled={true}>
                                {units.pressure.map((unit) => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </Select>
                            <Input type="number" value={(formData.inletPressure.value - formData.outletPressure.value).toString()} disabled={true} />
                        </div>
                    </div>
                    <div>
                        <Label>Inlet Temperature</Label>
                        <div className="flex items-center gap-2">
                            <Select value={formData.inletTemperature.unit} onChange={(value) => handleInputChange("inletTemperature", "unit", value)}>
                                {units.temperature.map((unit) => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </Select>
                            <Input type="number" value={formData.inletTemperature.value} onChange={(e) => handleInputChange("inletTemperature", "value", e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <Label>Flow Rate</Label>
                        <div className="flex items-center gap-2">
                            <Select value={formData.flowRate.unit} onChange={(value) => handleInputChange("flowRate", "unit", value)}>
                                {units.flowRate.map((unit) => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </Select>
                            <Input type="number" value={formData.flowRate.value} onChange={(e) => handleInputChange("flowRate", "value", e.target.value)} />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="button" onClick={handleClear}>Clear</Button>
                    <Button type="submit">Submit</Button>
                </CardFooter>
            </Card>
        </form>
    )
}

export default ProcessDataCard;