'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from './ui/button';
import useProcessDataStore from '@/app/processDataStore';
import useResultStore from '@/app/resultDataStore';

function ProcessDataCard() {
    const { units, formData, error, setFormData, fillSampleData, clearFormData} = useProcessDataStore();
    const { resultData } = useResultStore();

    const handleSelectChange = (key, value) => {
        setFormData(key, 'unit', value);
    };

    const handleInputChange = (key, field, value) => {
        setFormData(key, field, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Process Data</CardTitle>
                        <CardDescription>Enter the details about your process conditions.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="space-y-2">
                            <Label className="font-bold" htmlFor="fluid-type">Fluid Type</Label>
                            <div className="w-full">
                                <Select id="fluid-type" value={formData.fluidType.value} onValueChange={(value) => setFormData("fluidType", 'value', value)}>
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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="inlet-pressure">Inlet Pressure</Label>
                                <div className="flex items-center gap-2">
                                    <div className="w-1/3">
                                        <Select id="inlet-pressure-unit" value={formData.inletPressure.unit} onValueChange={(value) => handleSelectChange("inletPressure", value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="unit"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {units.pressure.map((unit) => (
                                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-2/3">
                                        <Input required id="inlet-pressure" type="number" value={formData.inletPressure.value} onChange={(e) => handleInputChange("inletPressure", "value", e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="outlet-pressure">Outlet Pressure</Label>
                                <div className="flex items-center gap-2">
                                    <div className="w-1/3">
                                        <Select id="outlet-pressure-unit" value={formData.inletPressure.unit} disabled={true}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="unit"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {units.pressure.map((unit) => (
                                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-2/3">
                                        <Input required id="outlet-pressure" type="number" value={formData.outletPressure.value} onChange={(e) => handleInputChange("outletPressure", "value", e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="pressure-difference">Pressure Difference</Label>
                                <div className="flex items-center gap-2">
                                    <div className="w-1/3">
                                        <Select id="pressure-difference-unit" value={formData.inletPressure.unit} disabled={true}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="unit"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {units.pressure.map((unit) => (
                                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-2/3">
                                        <Input required id="pressure-difference" type="number" value={(formData.inletPressure.value - formData.outletPressure.value).toString()} disabled={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="font-bold" htmlFor="inlet-temperature">Inlet Temperature</Label>
                                <div className="flex items-center gap-2">
                                    <div className="w-1/3">
                                        <Select id="inlet-temperature-unit" value={formData.inletTemperature.unit} onValueChange={(value) => handleSelectChange("inletTemperature", value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="unit"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {units.temperature.map((unit) => (
                                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-2/3">
                                        <Input required id="inlet-temperature" type="number" value={formData.inletTemperature.value} onChange={(e) => handleInputChange("inletTemperature", "value", e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="font-bold" htmlFor="flow-rate">Flow Rate</Label>
                            <div className="flex items-center gap-2">
                                <div className="w-1/3">
                                    <Select id="flow-rate-unit" value={formData.flowRate.unit} onValueChange={(value) => handleSelectChange("flowRate", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="unit"></SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.flowRate.map((unit) => (
                                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-2/3">
                                    <Input required id="flow-rate" type="number" value={formData.flowRate.value} onChange={(e) => handleInputChange("flowRate", "value", e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="font-bold" htmlFor="required-cv">Required Cv</Label>
                            <div className="flex items-center gap-2">
                                <div className="w-full">
                                    <Input required id="required-cv" type="number" value={resultData.requiredCv?.value || '' } disabled={true} />
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-4">
                        <Button type="button" onClick={fillSampleData} variant="outline">Fill Sample Data</Button>
                        <Button type="button" onClick={clearFormData} variant="outline">Clear</Button>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    );
}

export default ProcessDataCard;
