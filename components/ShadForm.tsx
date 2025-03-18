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
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

// Define Zod schema for form validation
const itemRequestSchema = z.object({
  // Request Information
  requestType: z.string().min(1, "Request type is required"),
  vendorStockExists: z.enum(["yes", "no"]),
  stockBeingReplaced: z.boolean().optional(),
  gtinRegistered: z.boolean().optional(),
  replacedStock: z.boolean().optional(),
  replacedStockNumber: z.string().optional(),
  
  // Requesting Customer Information
  customerPOC: z.string().min(1, "Customer POC is required"),
  pocEmail: z.string().email("Valid email is required"),
  installationName: z.string().min(1, "Installation name is required"),
  pocPhone: z.string().min(7, "Valid phone number is required"),
  extension: z.string().optional(),
  pocDOD: z.string().optional(),
  callPrefix: z.string().optional(),
  orderingPoint: z.string().default("FT0178"),
  
  // Reason and Description
  reasonForRequest: z.string().min(10, "Please provide a detailed reason"),
  itemDescription: z.string().min(10, "Please provide a detailed description"),
  
  // DLA Information
  stockNumber: z.string().optional(),
  brand: z.string().min(1, "Brand is required"),
  mfr: z.string().min(1, "Manufacturer is required"),
  mfrRequirements: z.string().optional(),
  productRequirements: z.string().optional(),
  
  // Item Information
  manufacturer: z.string().min(1, "Manufacturer is required"),
  unlistedManufacturer: z.string().optional(),
  brandField: z.string().min(1, "Brand is required"),
  unlistedBrand: z.string().optional(),
  sku: z.string().optional(),
  gtin: z.string().optional(),
  vendorPart: z.string().optional(),
  labeledProduct: z.string().optional(),
  unitsPerPack: z.string().optional(),
  packageSize: z.string().optional(),
  uom: z.string().optional(),
  packageCube: z.string().optional(),
  vendorUOM: z.string().optional(),
  caseWeight: z.string().optional(),
  caseWeightMin: z.string().optional(),
  grade: z.string().optional(),
  nampsImps: z.string().optional(),
  minOrder: z.string().optional(),
  storageType: z.string().optional(),
  country: z.string().optional(),
  caseWeightMax: z.string().optional(),
  estMonthly: z.string().optional(),
  uom2: z.string().optional(),
  berryCompliance: z.string().optional(),
  
  // Supporting Documentation
  hqApproval: z.boolean().optional(),
  invoice: z.boolean().optional(),
  specSheet: z.boolean().optional(),
  displayPanel: z.boolean().optional(),
  infoPanel: z.boolean().optional(),
});

// Type inference from zod schema
type ItemRequestFormValues = z.infer<typeof itemRequestSchema>;

export default function ItemRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Default values for the form
  const defaultValues: Partial<ItemRequestFormValues> = {
    vendorStockExists: "no",
    stockBeingReplaced: false,
    gtinRegistered: false,
    replacedStock: false,
    orderingPoint: "FT0178",
    hqApproval: false,
    invoice: false,
    specSheet: false,
    displayPanel: false,
    infoPanel: false,
  };

  // Initialize react-hook-form with zod resolver
  const form = useForm<ItemRequestFormValues>({
    resolver: zodResolver(itemRequestSchema),
    defaultValues,
    mode: "onChange",
  });

  // Form submission handler
  const onSubmit = async (values: ItemRequestFormValues) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      console.log("Form submitted:", values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Form submitted successfully!");
      // Reset form or redirect here
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className=" bg-white rounded-md border shadow-sm">
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
          </div>
        </div>

        {/* Main Form Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
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
                    
                    <FormField
                      control={form.control}
                      name="requestType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Request Type</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. New Item" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="vendorStockExists"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vendor Stock Number Exists in STRATIS?</FormLabel>
                          <FormControl>
                            <RadioGroup 
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="vsn-yes" />
                                <Label htmlFor="vsn-yes" className="text-sm">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="vsn-no" />
                                <Label htmlFor="vsn-no" className="text-sm">No</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <FormField
                          control={form.control}
                          name="stockBeingReplaced"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox 
                                  id="stock-being-replaced" 
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <Label htmlFor="stock-being-replaced" className="text-sm">Stock # Being Replaced?</Label>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <FormField
                          control={form.control}
                          name="gtinRegistered"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox 
                                  id="gtin-registered" 
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <Label htmlFor="gtin-registered" className="text-sm">GTIN Registered?</Label>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name="replacedStock"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox 
                                  id="replaced-stock" 
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <Label htmlFor="replaced-stock" className="text-sm">Replaced Stock #**</Label>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="replacedStockNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                className="mt-2" 
                                placeholder="Enter stock number" 
                                {...field} 
                                disabled={!form.watch("replacedStock")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <h2 className="text-sm font-semibold">Requesting Customer Information</h2>
                    <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="customerPOC"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Customer POC**</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="pocEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>POC Email**</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="installationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Installation Name**</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="pocPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>POC Phone**</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="extension"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Extension</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="pocDOD"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>POC DOD#</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="callPrefix"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Int Call Prefix</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="orderingPoint"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Originating Ordering Point</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                  
                  <FormField
                    control={form.control}
                    name="reasonForRequest"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            className="h-24" 
                            placeholder="Enter reason for item request" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <h2 className="text-sm font-semibold">Item Name/Description**</h2>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="itemDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            className="h-24" 
                            placeholder="Enter item description" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="text-xs h-8 w-full">Customer/Vendor Comparison</Button>
                  <Button variant="outline" className="text-xs h-8 w-full">Create Part Number</Button>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <h2 className="text-sm font-semibold">DLA Approved Information</h2>
                    <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="stockNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand**</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mfr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mfr**</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mfrRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mfr Requirements</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="productRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Requirements Comment</FormLabel>
                      <FormControl>
                        <Textarea className="h-20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <h2 className="text-sm font-semibold">Item Information</h2>
                    <InfoCircledIcon className="h-4 w-4 ml-1 text-gray-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="manufacturer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Manufacturer**</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="unlistedManufacturer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unlisted Manufacturer Name**</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="brandField"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand**</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="unlistedBrand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unlisted Brand**</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Additional form fields for the right column */}
                    {/* Just showing a few examples - you would continue with the same pattern */}
                    <FormField
                      control={form.control}
                      name="sku"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SKU</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gtin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GTIN</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="vendorPart"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vendor Part Number</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Continue with the remaining fields... */}
                    
                    <FormField
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade of Product</FormLabel>
                          <Select 
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="grade-a">Grade A</SelectItem>
                              <SelectItem value="grade-b">Grade B</SelectItem>
                              <SelectItem value="grade-c">Grade C</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                  <FormField
                    control={form.control}
                    name="hqApproval"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            id="hq-approval"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <Label htmlFor="hq-approval" className="text-xs">
                          Accepted: {field.value ? "Yes" : "No"}
                        </Label>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <Label className="mb-2">Invoice/Quote or Email</Label>
                  <FormField
                    control={form.control}
                    name="invoice"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            id="invoice"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <Label htmlFor="invoice" className="text-xs">
                          Accepted: {field.value ? "Yes" : "No"}
                        </Label>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <Label className="mb-2">Manufacturer Product Spec Sheet</Label>
                  <FormField
                    control={form.control}
                    name="specSheet"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            id="spec-sheet"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <Label htmlFor="spec-sheet" className="text-xs">
                          Accepted: {field.value ? "Yes" : "No"}
                        </Label>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <Label className="mb-2">Principle Display Panel</Label>
                  <FormField
                    control={form.control}
                    name="displayPanel"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            id="display-panel"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <Label htmlFor="display-panel" className="text-xs">
                          Accepted: {field.value ? "Yes" : "No"}
                        </Label>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <Label className="mb-2">Information Panel</Label>
                  <FormField
                    control={form.control}
                    name="infoPanel"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            id="info-panel"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <Label htmlFor="info-panel" className="text-xs">
                          Accepted: {field.value ? "Yes" : "No"}
                        </Label>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            
            {/* Form Errors Summary */}
            {Object.keys(form.formState.errors).length > 0 && (
              <div className="mt-6 p-4 border border-red-200 bg-red-50 rounded-md">
                <h3 className="text-sm font-semibold text-red-600 mb-2">Please fix the following errors:</h3>
                <ul className="list-disc pl-5 text-sm text-red-600">
                  {Object.entries(form.formState.errors).map(([key, error]) => (
                    <li key={key}>{error?.message as string}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="mt-8 flex justify-center space-x-3">
              <Button type="button" variant="outline" className="w-24" onClick={() => form.reset()}>Reset</Button>
              <Button 
                type="submit" 
                className="w-24 bg-blue-500 hover:bg-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              <Button type="button" variant="outline" className="w-24 text-red-500 border-red-200 hover:bg-red-50">Cancel</Button>
              <Button type="button" variant="outline" className="w-24 text-orange-500 border-orange-200 hover:bg-orange-50">Withdraw</Button>
              <Button type="button" variant="outline" className="w-24 text-green-500 border-green-200 hover:bg-green-50">View</Button>
              <Button type="button" variant="outline" className="w-24 text-blue-500 border-blue-200 hover:bg-blue-50">Print</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}