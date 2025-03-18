import { ArrowBigLeft, ChevronLeft } from 'lucide-react'
import React from 'react'
import { z } from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
const formSchema = z.object({
    requestNumber: z.string().nullable(),
    requestType: z.string().nullable(),
    catalogType: z.string().nullable(),
    existsInStores: z.enum(["Yes", "No"], {
        required_error: "Please select yes or no"
    }).nullable(),
    stockNumberBeingReplaced: z.enum(["Yes", "No"], {
        required_error: "Please select yes or no"}).nullable(),
    replacedStockNumber: z.string().nullable(), 
})

const contractInfo = {
    Contract: "SPE30020D3276",
    VendorName: "US Foods San Francisco Division",
    Service: "Army",
    LastActionDate: "01/01/2024",
    Requestor: "Phillip King"
}

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
    return (
        <div className='mx-auto p-8 grid md:grid-cols-10 gap-4'>
            <div className='col-span-2 border-2 border-gray-400 rounded-sm p-3 min-h-80'>
             
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
                <div className='grid grid-cols-1 md:grid-cols-3 mt-12'>
                    <div>
                        {/* 
                            REQUEST INFORMATION
                        */}
                        <Col1 />
                    </div>
                    <div><Col2 /></div>
                    <div><Col3 /></div>
                </div>
            </div>
        </div>
    )
}

const Col1 = () => {
    return (
        <div>hello</div>
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
