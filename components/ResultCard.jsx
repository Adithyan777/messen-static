'use client';

import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from './ui/button';
import useResultStore from '@/app/resultDataStore';

function ResultCard() {
    const { units, resultData, setResultData, clearResultData, fillSampleData } = useResultStore();

    const handleSelectChange = (key, value) => {
        setResultData(key, 'unit', value);
    };

    const handleInputChange = (key, field, value) => {
        setResultData(key, field, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Result Data:', resultData);
    };

    return (
        <form onSubmit={handleSubmit}>
        <Card>
        <CardHeader>
            <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Result</CardTitle>
            <CardDescription>Calculated Result.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="suggested-valve-size">Suggested Valve Size</Label>
                    <Select id="suggested-valve-size" value={resultData.suggestedValveSize?.value || ''} onValueChange={(value) => handleInputChange("suggestedValveSize","value",value)}>
                        <SelectTrigger>
                            <SelectValue placeholder=""></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {units.suggestedValveSize.map((unit) => (
                                <SelectItem key={unit} value={unit}>{unit + " Full Port"}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="rated-cv">Rated Cv</Label>
                    <Input id="rated-cv" value={resultData.ratedCv?.value || ''} disabled />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="valve-travel">Valve Travel (%)</Label>
                    <Input id="valve-travel" value={resultData.valveTravel?.value || ''} disabled />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="pred-spl-iec">Pred. SPL IEC (dBA)</Label>
                    <Input id="pred-spl-iec" value={resultData.predSplIec?.value || ''} disabled />
                </div>
            </div>
            <div className="space-y-2">
                <Label className="font-bold" htmlFor="valve-velocity">Valve Velocity</Label>
                <div className="flex items-center gap-2">
                    <div className="w-2/3">
                        <Input id="valve-velocity" value={resultData.valveVelocity?.value || ''} disabled />
                    </div>
                    <div className="w-1/3">
                        <Select id="valve-velocity-unit" value={resultData.valveVelocity?.unit || ''} onValueChange={(value) => handleSelectChange("valveVelocity",value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="unit"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {units.velocity.map((unit) => (
                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="inlet-pipe-size">Inlet Pipe Size</Label>
                    <Input id="inlet-pipe-size" value={resultData.inletPipeSize?.value || ''} disabled />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="outlet-pipe-size">Outlet Pipe Size</Label>
                    <Input id="outlet-pipe-size" value={resultData.outletPipeSize?.value || ''} disabled />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="inlet-pipe-velocity">Inlet Pipe Velocity</Label>
                    <div className="flex items-center gap-2">
                        <div className="w-2/3">
                            <Input id="inlet-pipe-velocity" value={resultData.inletPipeVelocity?.value || ''} disabled />
                        </div>
                        <div className="w-1/3">
                            <Select id="inlet-pipe-velocity-unit" value={resultData.valveVelocity.unit} disabled>
                                <SelectTrigger>
                                    <SelectValue placeholder="unit"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                {units.velocity.map((unit) => (
                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                ))}
                            </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label className="font-bold" htmlFor="outlet-pipe-velocity">Outlet Pipe Velocity</Label>
                    <div className="flex items-center gap-2">
                        <div className="w-2/3">
                            <Input id="outlet-pipe-velocity" value={resultData.outletPipeVelocity?.value || ''} disabled={true}/>
                        </div>
                        <div className="w-1/3">
                            <Select id="outlet-pipe-velocity-unit" value={resultData.valveVelocity.unit} disabled={true}>
                                <SelectTrigger>
                                    <SelectValue placeholder="unit"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                {units.velocity.map((unit) => (
                                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                                ))}
                            </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
                <Button type="button" onClick={fillSampleData} variant="outline">Fill Sample Data</Button>
                <Button type="button" variant="outline" onClick={clearResultData}>Clear</Button>
                <Button type="submit">Apply</Button>
            </CardFooter>
        </Card>
        </form>
    );
}


export default ResultCard;
