import { ArrowBigLeft, ChevronLeft } from 'lucide-react'
import React from 'react'
import { z } from "zod"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Input } from './ui/input'
import { Label } from './ui/label'
const formSchema = z.object({
    requestNumber: z.string().nullable(),
    requestType: z.string().nullable(),
    catalogType: z.string().nullable(),
    existsInStores: z.enum(["Yes", "No"], {
        required_error: "Please select yes or no"
    }).nullable(),
    stockNumberBeingReplaced: z.enum(["Yes", "No"], {
        required_error: "Please select yes or no"
    }).nullable(),
    replacedStockNumber: z.string().nullable(),
})

const contractInfo = {
    Contract: "SPE30020D3276",
    VendorName: "US Foods San Francisco Division",
    Service: "Army",
    LastActionDate: "01/01/2024",
    Requestor: "Phillip King"
}

type FormValues = z.infer<typeof formSchema>;

export default function FormPrac() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            requestNumber: "",
            requestType: "",
            catalogType: "",
            existsInStores: null,
            stockNumberBeingReplaced: null,
            replacedStockNumber: ""
        }
    })
    function onSubmit(data: FormValues) {
        console.log("Form submitted:", data);
        // Process form submission
    }
    return (
        <div className='mx-auto p-8 grid md:grid-cols-10 gap-4'>
            <div className='col-span-2 border-2 border-gray-400 rounded-sm p-3 max-h-80'>

                <div className='flex items-center'>
                    <ul className='w-full space-y-2'>
                        <li className='flex flex-row items-center gap-2'>
                            <span className='text-sm md:text-base'>Contract:</span>
                            <span>{contractInfo.Contract}</span>
                        </li>
                        <li className='flex flex-row gap-2'>
                            <span className='text-sm md:text-base min-w-28'>Vendor Name:</span>
                            <span className='max-w-32'>{contractInfo.VendorName}</span>
                        </li>
                        <li className='flex flex-row items-center gap-2'>
                            <span className='text-sm md:text-base'>Service:</span>
                            <span>{contractInfo.Service}</span>
                        </li>
                        <li className='flex flex-row items-center gap-2'>
                            <span className='text-sm md:text-base'>Last Action Date:</span>
                            <span>{contractInfo.LastActionDate}</span>
                        </li>
                        <li className='flex flex-row items-center gap-2'>
                            <span className='text-sm md:text-base'>Requestor:</span>
                            <span>{contractInfo.Requestor}</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='col-span-8'>
                <div className='flex items-center gap-4'>
                    <ChevronLeft />
                    <h4 className='font-medium'>Item Request</h4>
                </div>
                <FormProvider {...form}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className='grid grid-cols-1 md:grid-cols-3 mt-12'>
                                <div>

                                    <Col1 />
                                </div>
                                <div><Col2 /></div>
                                <div><Col3 /></div>
                            </div>
                            {/* Form Error Summary */}
                            {Object.keys(form.formState.errors).length > 0 && (
                                <div className="p-4 border border-red-200 bg-red-50 rounded-md">
                                    <h3 className="text-sm font-semibold text-red-600 mb-2">Please fix the following errors:</h3>
                                    <ul className="list-disc pl-5 text-sm text-red-600">
                                        {Object.entries(form.formState.errors).map(([key, error]) => (
                                            <li key={key}>{error?.message as string}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </form>
                    </Form>
                </FormProvider>
            </div>
        </div>
    )
}

const Col1 = () => {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Request Information</h2>
        
        <FormField
          name="requestNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Request Number</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  value={field.value || ''} 
                  readOnly 
                  placeholder="Auto-generated" 
                  className="bg-gray-100" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          name="requestType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Request Type</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  value={field.value || ''} 
                  placeholder="e.g. New Item" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          name="catalogType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catalog Type</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  value={field.value || ''} 
                  placeholder="Enter catalog type" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          name="existsInStores"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vendor Stock Number Exists in STORES?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="exists-yes" />
                    <Label htmlFor="exists-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="exists-no" />
                    <Label htmlFor="exists-no">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          name="stockNumberBeingReplaced"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock Number Being Replaced?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Yes" id="replace-yes" />
                    <Label htmlFor="replace-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No" id="replace-no" />
                    <Label htmlFor="replace-no">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          name="replacedStockNumber"
          render={({ field }) => {
    
            
            return (
              <FormItem>
                <FormLabel>Replaced Stock Number</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    value={field.value || ''} 
                    placeholder="Enter stock number" 

                  />
                </FormControl>
                <FormDescription>
                   "Required when replacing a stock number"
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>
    )
  }

const Col2 = () => {
    return (
        <div>hello</div>
    )
}

const Col3 = () => {
    return (
        <div>hello</div>
    )
}
