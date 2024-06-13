<div className="grid gap-8">
      <Card className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <CardHeader>
          <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Header Data</CardTitle>
          <CardDescription>Enter the details about your valve.</CardDescription>
          </CardHeader>
        </div>
        <div className="col-span-4 md:col-span-1">
          <CardContent>
            <div className="space-y-1">
              <Label className="font-bold" htmlFor="tag-no">Tag No</Label>
              <Input id="tag-no" placeholder="Enter Tag No" />
            </div>
          </CardContent>
        </div>
        <div className="col-span-4 md:col-span-1">
          <CardContent>
            <div className="space-y-1">
              <Label className="font-bold" htmlFor="item-no">Item No</Label>
              <Input id="item-no" placeholder="Enter Item No" />
            </div>
          </CardContent>
        </div>
        <div className="col-span-4 md:col-span-1">
          <CardContent>
            <div className="space-y-1">
              <Label className="font-bold" htmlFor="state-of-medium-at-inlet">State of medium at inlet</Label>
              <Input id="state-of-medium-at-inlet" placeholder="Enter State of medium at inlet" />
            </div>
          </CardContent>
        </div>
        <div className="col-span-4 md:col-span-1">
          <CardContent>
            <div className="space-y-1">
              <Label className="font-bold" htmlFor="process-medium">Process medium</Label>
              <Input id="process-medium" placeholder="Enter Process medium" />
            </div>
          </CardContent>
        </div>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
          <CardTitle className="text-primary scroll-m-20 text-2xl font-bold tracking-tight">Medium Data</CardTitle>
            <CardDescription>Enter the details about your fluid properties.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="density">Density</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/4">
                    <Select id="density-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lb/ft3">lb/ft³</SelectItem>
                        <SelectItem value="kg/m3">kg/m³</SelectItem>
                        <SelectItem value="g/cm3">g/cm³</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-3/4">
                    <Input id="density" type="number" placeholder="62.4" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="vapor-pressure">Vapor Pressure</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/4">
                    <Select id="vapor-pressure-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="psi">PSI</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="kpa">kPa</SelectItem>
                        <SelectItem value="mmhg">mmHg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-3/4">
                    <Input id="vapor-pressure" type="number" placeholder="0.3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="critical-pressure">Critical Pressure</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/4">
                    <Select id="critical-pressure-unit">
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
                  <div className="w-3/4">
                    <Input id="critical-pressure" type="number" placeholder="3000" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold" htmlFor="viscosity">Viscosity</Label>
                <div className="flex items-center gap-2">
                  <div className="w-1/4">
                    <Select id="viscosity-unit">
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cp">cP</SelectItem>
                        <SelectItem value="pa-s">Pa·s</SelectItem>
                        <SelectItem value="lb/ft-s">lb/ft·s</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-3/4">
                    <Input id="viscosity" type="number" placeholder="0.89" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>