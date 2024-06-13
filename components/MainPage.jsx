'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function MainPage() {
    
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <h1 className="text-primary scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 text-center">Control Valve Sizing Tool</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
      <Card>
          <CardHeader>
          <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Process Data</CardTitle>
            <CardDescription>Enter the details about your process conditions.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="flow-rate">Flow Rate</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="flow-rate-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpm">GPM</SelectItem>
                        <SelectItem value="lpm">LPM</SelectItem>
                        <SelectItem value="cfm">CFM</SelectItem>
                        <SelectItem value="m3h">m³/h</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="flow-rate" type="number" placeholder="100" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="inlet-pressure">Inlet Pressure</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="inlet-pressure-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psi">PSI</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="kpa">kPa</SelectItem>
                        <SelectItem value="mpa">MPa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="inlet-pressure" type="number" placeholder="100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="outlet-pressure">Outlet Pressure</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="outlet-pressure-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psi">PSI</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="kpa">kPa</SelectItem>
                        <SelectItem value="mpa">MPa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="outlet-pressure" type="number" placeholder="90" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="temperature">Temperature</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="temperature-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="f">°F</SelectItem>
                        <SelectItem value="c">°C</SelectItem>
                        <SelectItem value="k">K</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="temperature" type="number" placeholder="70" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
          <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Process Data</CardTitle>
            <CardDescription>Enter the details about your process conditions.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="flow-rate">Flow Rate</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="flow-rate-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpm">GPM</SelectItem>
                        <SelectItem value="lpm">LPM</SelectItem>
                        <SelectItem value="cfm">CFM</SelectItem>
                        <SelectItem value="m3h">m³/h</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="flow-rate" type="number" placeholder="100" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="inlet-pressure">Inlet Pressure</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="inlet-pressure-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psi">PSI</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="kpa">kPa</SelectItem>
                        <SelectItem value="mpa">MPa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="inlet-pressure" type="number" placeholder="100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="outlet-pressure">Outlet Pressure</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="outlet-pressure-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psi">PSI</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="kpa">kPa</SelectItem>
                        <SelectItem value="mpa">MPa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="outlet-pressure" type="number" placeholder="90" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="temperature">Temperature</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/3">
                    <Select id="temperature-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="f">°F</SelectItem>
                        <SelectItem value="c">°C</SelectItem>
                        <SelectItem value="k">K</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-2/3">
                    <Input id="temperature" type="number" placeholder="70" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
    </div>

)
}