import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

export default function ItemRequestForm() {
  const form = useForm();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-md border shadow-sm">
        {/* Header Block with Contract and Vendor Info */}
        <div className="border-b p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label className="text-xs font-medium">Contract:</Label>
                <span className="text-xs">SPECDIST2276</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="text-xs font-medium">Vendor Name:</Label>
                <span className="text-xs">UB Foods, San Francisco Division</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="text-xs font-medium">Status:</Label>
                <span className="text-xs text-amber-600 font-medium">Active/Inactive</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="text-xs font-medium">Last Action Date:</Label>
                <span className="text-xs">01/01/2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="text-xs font-medium">Requestor:</Label>
                <span className="text-xs">Phillip King</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="text-xs text-gray-500">
                Logged in as JSMITHDOE from 01.23.14.34 at 14:41 | You will be logged out in 60:00
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-6">Item Request</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-sm font-semibold">Request Information</h2>
                  <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="request-number">Request Number</Label>
                    <Input id="request-number" defaultValue="76201-008490" readOnly className="bg-gray-100" />
                  </div>
                  
                  <div>
                    <Label htmlFor="request-type">Request Type</Label>
                    <Input id="request-type" placeholder="e.g. New Item" />
                  </div>
                  
                  <div>
                    <Label>Vendor Stock Number Exists in STRATIS?</Label>
                    <RadioGroup defaultValue="no" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="vsn-yes" />
                        <Label htmlFor="vsn-yes" className="text-sm">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="vsn-no" />
                        <Label htmlFor="vsn-no" className="text-sm">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Checkbox id="stock-being-replaced" />
                      <Label htmlFor="stock-being-replaced" className="text-sm">Stock # Being Replaced?</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <Checkbox id="gtin-registered" />
                      <Label htmlFor="gtin-registered" className="text-sm">GTIN Registered?</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="replaced-stock" />
                      <Label htmlFor="replaced-stock" className="text-sm">Replaced Stock #**</Label>
                    </div>
                    <Input className="mt-2" placeholder="Enter stock number" />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-sm font-semibold">Requesting Customer Information</h2>
                  <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="customer-poc">Customer POC**</Label>
                    <Input id="customer-poc" />
                  </div>
                  
                  <div>
                    <Label htmlFor="poc-email">POC Email**</Label>
                    <Input id="poc-email" type="email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="installation-name">Installation Name**</Label>
                    <Input id="installation-name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="poc-phone">POC Phone**</Label>
                    <Input id="poc-phone" type="tel" />
                  </div>
                  
                  <div>
                    <Label htmlFor="extension">Extension</Label>
                    <Input id="extension" />
                  </div>
                  
                  <div>
                    <Label htmlFor="poc-dod">POC DOD#</Label>
                    <Input id="poc-dod" />
                  </div>
                  
                  <div>
                    <Label htmlFor="call-prefix">Int Call Prefix</Label>
                    <Input id="call-prefix" />
                  </div>
                  
                  <div>
                    <Label htmlFor="ordering-point">Originating Ordering Point</Label>
                    <Input id="ordering-point" defaultValue="FT0178" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-sm font-semibold">Reason for Item Request*</h2>
                  <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                </div>
                
                <Textarea className="h-24" placeholder="Enter reason for item request" />
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-sm font-semibold">Item Name/Description**</h2>
                </div>
                
                <Textarea className="h-24" placeholder="Enter item description" />
              </div>
              
              <div className="grid grid-cols-2 gap-x-2">
                <Button variant="outline" className="text-xs h-8">Customer Hosted Order Catalog Item</Button>
                <Button variant="outline" className="text-xs h-8 bg-blue-50 border-blue-200">Create Part Number</Button>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-sm font-semibold">DLA Approved Information</h2>
                  <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                </div>
                
                <div>
                  <Label htmlFor="stock-number">Stock Number</Label>
                  <Input id="stock-number" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="brand">Brand**</Label>
                <Input id="brand" />
              </div>
              
              <div>
                <Label htmlFor="mfr">Mfr**</Label>
                <Input id="mfr" />
              </div>
              
              <div>
                <Label htmlFor="mfr-requirements">Mfr Requirements</Label>
                <Input id="mfr-requirements" />
              </div>
              
              <div>
                <Label htmlFor="product-requirements">Product Requirements Comment</Label>
                <Textarea id="product-requirements" className="h-20" />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-sm font-semibold">Item Information</h2>
                  <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="manufacturer">Manufacturer**</Label>
                    <Input id="manufacturer" />
                  </div>
                  
                  <div>
                    <Label htmlFor="unlisted-manufacturer">Unlisted Manufacturer Name**</Label>
                    <Input id="unlisted-manufacturer" />
                  </div>
                  
                  <div>
                    <Label htmlFor="brand-field">Brand**</Label>
                    <Input id="brand-field" />
                  </div>
                  
                  <div>
                    <Label htmlFor="unlisted-brand">Unlisted Brand**</Label>
                    <Input id="unlisted-brand" />
                  </div>
                  
                  <div>
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" />
                  </div>
                  
                  <div>
                    <Label htmlFor="gtin">GTIN</Label>
                    <Input id="gtin" />
                  </div>
                  
                  <div>
                    <Label htmlFor="vendor-part">Vendor Part Number</Label>
                    <Input id="vendor-part" />
                  </div>
                  
                  <div>
                    <Label htmlFor="labeled-product">Labeled Product Number</Label>
                    <Input id="labeled-product" />
                  </div>
                  
                  <div>
                    <Label htmlFor="units-per-pack">Units Per Purchase Pack</Label>
                    <Input id="units-per-pack" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor="package-size">Package Size</Label>
                      <Input id="package-size" />
                    </div>
                    <div>
                      <Label htmlFor="uom">UoM</Label>
                      <Input id="uom" />
                    </div>
                    <div>
                      <Label htmlFor="package-cube">Package Cube</Label>
                      <Input id="package-cube" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="vendor-uom">Vendor Unit of Measure</Label>
                    <Input id="vendor-uom" />
                  </div>
                  
                  <div>
                    <Label htmlFor="case-weight">Case Weight Item</Label>
                    <Input id="case-weight" />
                  </div>
                  
                  <div>
                    <Label htmlFor="case-weight-min">Case Weight Min/Max</Label>
                    <Input id="case-weight-min" />
                  </div>
                  
                  <div>
                    <Label htmlFor="grade">Grade of Product</Label>
                    <Select>
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grade-a">Grade A</SelectItem>
                        <SelectItem value="grade-b">Grade B</SelectItem>
                        <SelectItem value="grade-c">Grade C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="namps-imps">NAMPS/IMPS</Label>
                    <Input id="namps-imps" />
                  </div>
                  
                  <div>
                    <Label htmlFor="min-order">Minimum Order Quantity</Label>
                    <Input id="min-order" />
                  </div>
                  
                  <div>
                    <Label htmlFor="storage-type">Storage Type/Condition</Label>
                    <Input id="storage-type" />
                  </div>
                  
                  <div>
                    <Label htmlFor="country">Country of Origin</Label>
                    <Input id="country" />
                  </div>
                  
                  <div>
                    <Label htmlFor="case-weight-max">Case Weight Min/Max</Label>
                    <Input id="case-weight-max" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="est-monthly">Est. Monthly Demand Qty</Label>
                      <Input id="est-monthly" />
                    </div>
                    <div>
                      <Label htmlFor="uom2">UoM**</Label>
                      <Input id="uom2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="berry-compliance">Berry Amendment Compliant?</Label>
                    <Input id="berry-compliance" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Supporting Documentation Section */}
          <div className="mt-10">
            <h2 className="text-sm font-semibold mb-4">Supporting Documentation</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <Label className="mb-2">HQ Approval Letter</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hq-approval" />
                  <Label htmlFor="hq-approval" className="text-xs">Accepted: No</Label>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <Label className="mb-2">Invoice/Quote or Email</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="invoice" />
                  <Label htmlFor="invoice" className="text-xs">Accepted: No</Label>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <Label className="mb-2">Manufacturer Product Spec Sheet</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="spec-sheet" />
                  <Label htmlFor="spec-sheet" className="text-xs">Accepted: No</Label>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <Label className="mb-2">Principle Display Panel</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="display-panel" />
                  <Label htmlFor="display-panel" className="text-xs">Accepted: No</Label>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <Label className="mb-2">Information Panel</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="info-panel" />
                  <Label htmlFor="info-panel" className="text-xs">Accepted: No</Label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-8 flex justify-center space-x-3">
            <Button variant="outline" className="w-24">Save</Button>
            <Button className="w-24 bg-blue-500 hover:bg-blue-600">Submit</Button>
            <Button variant="outline" className="w-24 text-red-500 border-red-200 hover:bg-red-50">Cancel</Button>
            <Button variant="outline" className="w-24 text-orange-500 border-orange-200 hover:bg-orange-50">Withdraw</Button>
            <Button variant="outline" className="w-24 text-green-500 border-green-200 hover:bg-green-50">View</Button>
            <Button variant="outline" className="w-24 text-blue-500 border-blue-200 hover:bg-blue-50">Print</Button>
          </div>
        </div>
      </div>
    </div>
  );
}