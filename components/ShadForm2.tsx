import {  ChevronLeft } from 'lucide-react'
import React from 'react'
import { z } from "zod"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Input } from './ui/input'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { itemRequestSchema, ItemRequest } from '@/types/schemas/itemRequest'

const contractInfo = {
    Contract: "SPE30020D3276",
    VendorName: "US Foods San Francisco Division",
    Service: "Army",
    LastActionDate: "01/01/2024",
    Requestor: "James Jackson"
}

export default function FormPrac() {
    const form = useForm<ItemRequest>({
        resolver: zodResolver(itemRequestSchema),
        defaultValues: {
            requestNumber: "793001E080485",
            requestorType: "EA",
            catalogType: "EA",
            existsInStores: undefined,
            stockNumberBeingReplaced: undefined,
            replacedStockNumber: "",
            customerPOC: "",
        }
    })
    function onSubmit(data: ItemRequest) {
        console.log("Form submitted:", data);
        form.reset();
        // TODO Process form submission
    }
    return (
        <div className='mx-auto p-8 grid md:grid-cols-10 gap-4'>
            <div className='col-span-2 border-2 border-gray-400 rounded-sm p-3 max-h-80'>
                <div>
                    <ul className='w-full space-y-2'>
                        <li className='flex flex-wrap items-center gap-2'>
                            <span className='text-sm md:text-base font-medium'>Contract:</span>
                            <span className='break-all'>{contractInfo.Contract}</span>
                        </li>
                        <li className='flex flex-wrap gap-2'>
                            <span className='text-sm md:text-base font-medium'>Vendor Name:</span>
                            <span className='break-words'>{contractInfo.VendorName}</span>
                        </li>
                        <li className='flex flex-wrap items-center gap-2'>
                            <span className='text-sm md:text-base font-medium'>Service:</span>
                            <span className='break-words'>{contractInfo.Service}</span>
                        </li>
                        <li className='flex flex-wrap items-center gap-2'>
                            <span className='text-sm md:text-base font-medium'>Last Action Date:</span>
                            <span className='break-words'>{contractInfo.LastActionDate}</span>
                        </li>
                        <li className='flex flex-wrap items-center gap-2'>
                            <span className='text-sm md:text-base font-medium'>Requestor:</span>
                            <span className='break-words'>{contractInfo.Requestor}</span>
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
                                    <div className="space-y-4">
                                        <div className='flex flex-row gap-2 items-center'>
                                            <h2 className="text-lg font-semibold">Request Information</h2>
                                            <div className="flex items-center gap-2">
                                                <InfoCircledIcon className="h-4 w-4 text-gray-500" />
                                                <Button variant="outline" size="default" type="button">Stock # Lookup</Button>
                                            </div>
                                        </div>
                                       
                                            <FormField
                                                control={form.control}
                                                name="requestNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Request Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Request Number" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="requestorType"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Requestor Type</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Requestor Type" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="catalogType"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Catalog Type</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Catalog Type" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="existsInStores"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Requested Stock Number Exists in STORES?</FormLabel>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormItem className='flex items-center gap-2'>
                                                                <FormControl>
                                                                    <RadioGroupItem value="yes">Yes</RadioGroupItem>
                                                                </FormControl>
                                                                <FormLabel>Yes</FormLabel>
                                                            </FormItem>
                                                            <FormItem className='flex items-center gap-2'>
                                                                <FormControl>
                                                                    <RadioGroupItem value="no">No</RadioGroupItem>
                                                                </FormControl>
                                                                <FormLabel>No</FormLabel>
                                                            </FormItem>
                                                        </RadioGroup>
                                                    </FormItem>
                                                )} />
                                            <FormField
                                                control={form.control}
                                                name="stockNumberBeingReplaced"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Stock # Being Replaced?</FormLabel>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormItem className='flex items-center gap-2'>
                                                                <FormControl>
                                                                    <RadioGroupItem value="yes">Yes</RadioGroupItem>
                                                                </FormControl>
                                                                <FormLabel>Yes</FormLabel>
                                                            </FormItem>
                                                            <FormItem className='flex items-center gap-2'>
                                                                <FormControl>
                                                                    <RadioGroupItem value="no">No</RadioGroupItem>
                                                                </FormControl>
                                                                <FormLabel>No</FormLabel>
                                                            </FormItem>
                                                        </RadioGroup>
                                                    </FormItem>
                                                )} />
                                            <FormField
                                                control={form.control}
                                                name="replacedStockNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Replaced Stock # <span className="required-asterisk">**</span></FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Replaced Stock #" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                            <div className='flex flex-row gap-2 items-center'>
                                                <h2 className="text-lg font-semibold">Requesting Customer Information</h2>
                                                <InfoCircledIcon className="h-4 w-4 text-gray-500" />
                                            </div>
                                            <div className='grid grid-cols-2 gap-4'>
                                                <FormField 
                                                control={form.control}
                                                name="customerPOC"
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Customer POC <span className="required-asterisk">*</span></FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Customer Point of Contact" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                 )}
                                                />
                                                <FormField
                                                control={form.control}
                                                name="pocEmail"
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Customer Email <span className="required-asterisk">*</span></FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Customer Email" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                 )}
                                                />
                                                <FormField
                                                control={form.control}
                                                name="installationName"
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Installation Name <span className="required-asterisk">*</span></FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Installation Name" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                 )}
                                                />
                                                <FormField
                                                control={form.control}
                                                name="pocPhone"
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>POC Phone <span className="required-asterisk">*</span></FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter POC Phone" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                 )}
                                                />
                                                 <FormField
                                                control={form.control}
                                                name="intCallPrefix"
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Int Call Prefix</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Int Call Prefix" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                 )}
                                                />
                                                <FormField
                                                control={form.control}
                                                name="pocPhone"
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Originating Ordering Point</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Originating Ordering Point" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                 )}
                                                />
                                            </div>
                                    </div>
                                </div>
                                <div>col 2</div>
                                <div> col 3</div>
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
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </FormProvider>
            </div>
        </div>
    )
}