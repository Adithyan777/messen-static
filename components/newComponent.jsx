'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from './ui/button';
import stateStore from '@/app/stateStore';
const { calculateRequiredCv } = require('../app/calculations.js');

const convertFormData = (simplifiedFormData, selectedUnits) => {
    const convertedFormData = {};

    for (const key in simplifiedFormData) {
        if (simplifiedFormData.hasOwnProperty(key)) {
            convertedFormData[key] = {
                value: simplifiedFormData[key],
                unit: selectedUnits[key] || undefined
            };
        }
    }

    return convertedFormData;
};

const findCv = (formData,selectedUnits) => {
    const Cv = calculateRequiredCv(convertFormData(formData,selectedUnits));
    return Cv
}

function NewComponent() {
    const { units, formData, selectedUnits, error, setFormData, setUnit, fillSampleData, clearFormData } = stateStore();

    const handleSelectChange = (key, value) => {
        if (key === 'inletPressure') {
            setUnit(key, value);
            setUnit('outletPressure', value);
        } else {
            setUnit(key, value);
        }
    };

    const handleInputChange = (caseType, key, value) => {
        setFormData(caseType, key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Selected Units: ', selectedUnits )
        const Cv1 = findCv(formData['minimum'],selectedUnits)
        const Cv2 = findCv(formData['normal'],selectedUnits)
        const Cv3 = findCv(formData['maximum'],selectedUnits)
        setFormData('minimum', 'requiredCv', Cv1);
        setFormData('normal', 'requiredCv', Cv2);
        setFormData('maximum', 'requiredCv', Cv3);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Process Data</CardTitle>
                        <CardDescription>Enter the details about your process conditions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label className="font-bold" htmlFor="fluid-type">Fluid Type</Label>
                            <div className="w-full">
                                <Select id="fluid-type" value={formData.normal.fluidType || ''} 
                                        onValueChange={(value) => {
                                            setFormData("normal", "fluidType", value); 
                                            setFormData("minimum", "fluidType", value); 
                                            setFormData("maximum", "fluidType", value);
                                        }}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Fluid Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {units.fluidType.map((type) => (
                                            <SelectItem key={type} value={type}>{type}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="font-bold" htmlFor="specific-gravity">Specific Gravity</Label>
                            {
                                formData.normal.fluidType === 'Other Liquids' || formData.normal.fluidType === 'Other Gases' ?
                                <Label className="font" htmlFor="specific-gravity">(required)</Label> : <></>
                            }
                            <Input
                                id="specific-gravity"
                                type="number"
                                step="any"
                                value={formData.normal.specificGravity || ''}
                                placeholder="Enter value here"
                                required={formData.fluidType?.value === 'Other Liquids' || formData.fluidType?.value === 'Other Gases'}
                                onChange={(e) => {
                                    handleInputChange("normal", "specificGravity", e.target.value)
                                    handleInputChange("minimum", "specificGravity", e.target.value)
                                    handleInputChange("maximum", "specificGravity", e.target.value)
                                    
                                }}
                            />
                        </div>
                            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6">
                                <Label className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-center"></Label>
                                <Label className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-center">Minimum</Label>
                                <Label className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-center">Normal</Label>
                                <Label className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-center">Maximum</Label>
                            </div>
                        <div className="space-y-2">
                            {/* flowRate */}
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="flowRate">Flow Rate</Label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <Select
                                        id="flowRate-unit"
                                        value={selectedUnits.flowRate || ''}
                                        onValueChange={(value) => handleSelectChange('flowRate', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.flowRate.map((unit) => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        required
                                        id="flowRate-min"
                                        placeholder="Min value"
                                        type="number"
                                        step="any"
                                        value={formData.minimum.flowRate || ''}
                                        onChange={(e) => handleInputChange("minimum", 'flowRate', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="flowRate-normal"
                                        placeholder="Normal value"
                                        type="number"
                                        step="any"
                                        value={formData.normal.flowRate || ''}
                                        onChange={(e) => handleInputChange("normal", 'flowRate', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="flowRate-max"
                                        placeholder="Max value"
                                        type="number"
                                        step="any"
                                        value={formData.maximum.flowRate || ''}
                                        onChange={(e) => handleInputChange("maximum", 'flowRate', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* inletPressure */}
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="inletPressure">Inlet Pressure</Label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <Select
                                        id="inletPressure-unit"
                                        value={selectedUnits.inletPressure || ''}
                                        onValueChange={(value) => handleSelectChange('inletPressure', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.pressure.map((unit) => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        required
                                        id="inletPressure-min"
                                        placeholder="Min value"
                                        type="number"
                                        step="any"
                                        value={formData.minimum.inletPressure || ''}
                                        onChange={(e) => handleInputChange("minimum", 'inletPressure', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="inletPressure-normal"
                                        placeholder="Normal value"
                                        type="number"
                                        step="any"
                                        value={formData.normal.inletPressure || ''}
                                        onChange={(e) => handleInputChange("normal", 'inletPressure', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="inletPressure-max"
                                        placeholder="Max value"
                                        type="number"
                                        step="any"
                                        value={formData.maximum.inletPressure || ''}
                                        onChange={(e) => handleInputChange("maximum", 'inletPressure', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* outletPressure */}
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="outletPressure">Outlet Pressure</Label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <Select
                                        id="outletPressure-unit"
                                        disabled={true}
                                        value={selectedUnits.outletPressure || ''}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.pressure.map((unit) => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        required
                                        id="outletPressure-min"
                                        placeholder="Min value"
                                        type="number"
                                        step="any"
                                        value={formData.minimum.outletPressure || ''}
                                        onChange={(e) => handleInputChange("minimum", 'outletPressure', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="outletPressure-normal"
                                        placeholder="Normal value"
                                        type="number"
                                        step="any"
                                        value={formData.normal.outletPressure || ''}
                                        onChange={(e) => handleInputChange("normal", 'outletPressure', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="outletPressure-max"
                                        placeholder="Max value"
                                        type="number"
                                        step="any"
                                        value={formData.maximum.outletPressure || ''}
                                        onChange={(e) => handleInputChange("maximum", 'outletPressure', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* inletTemperature */}
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="inletTemperature">Inlet Temperature</Label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <Select
                                        id="inletTemperature-unit"
                                        value={selectedUnits.inletTemperature || ''}
                                        onValueChange={(value) => handleSelectChange('inletTemperature', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.temperature.map((unit) => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        required
                                        id="inletTemperature-min"
                                        placeholder="Min value"
                                        type="number"
                                        step="any"
                                        value={formData.minimum.inletTemperature || ''}
                                        onChange={(e) => handleInputChange("minimum", 'inletTemperature', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="inletTemperature-normal"
                                        placeholder="Normal value"
                                        type="number"
                                        step="any"
                                        value={formData.normal.inletTemperature || ''}
                                        onChange={(e) => handleInputChange("normal", 'inletTemperature', e.target.value)}
                                    />
                                    <Input
                                        required
                                        id="inletTemperature-max"
                                        placeholder="Max value"
                                        type="number"
                                        step="any"
                                        value={formData.maximum.inletTemperature || ''}
                                        onChange={(e) => handleInputChange("maximum", 'inletTemperature', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        {formData.normal.requiredCv && (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                                <Label className="text-primary scroll-m-20 text-2xl font-semibold tracking-tight flex justify-center">Required Cv:</Label>
                            </div>
                            <div>
                                <Label className="text-primary scroll-m-20 text-xl font-semibold tracking-tight flex justify-center md:hidden">Minimum</Label>
                                <Label className="text-primary scroll-m-20 text-2xl font-semibold tracking-tight flex justify-center">{formData.minimum?.requiredCv || ''}</Label>
                            </div>
                            <div>
                                <Label className="text-primary scroll-m-20 text-xl font-semibold tracking-tight flex justify-center md:hidden">Normal</Label>
                                <Label className="text-primary scroll-m-20 text-2xl font-semibold tracking-tight flex justify-center">{formData.normal?.requiredCv || ''}</Label>
                            </div>
                            <div>
                                <Label className="text-primary scroll-m-20 text-xl font-semibold tracking-tight flex justify-center md:hidden">Maximum</Label>
                                <Label className="text-primary scroll-m-20 text-2xl font-semibold tracking-tight flex justify-center">{formData.maximum?.requiredCv || ''}</Label>
                            </div>
                        </div>
                        
                        )}
                        {error && <p className="text-red-500 ">{error}</p>}
                    </CardContent>
                    <CardFooter className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
                        <Button type="button" onClick={fillSampleData} variant="outline">Fill Sample Data</Button>
                        <Button type="button" onClick={clearFormData} variant="outline">Clear</Button>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    );
}

export default NewComponent;
