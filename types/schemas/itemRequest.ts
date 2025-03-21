import { z } from "zod";

// Define the schema
export const itemRequestSchema = z.object({
    requestNumber: z.string(),
    requestorType: z.string(),
    catalogType: z.string(),
    existsInStores: z.enum(["yes", "no"], {
        required_error: "Please indicate whether the stock number exists in stores"
    }),
    stockNumberBeingReplaced: z.enum(["yes", "no"], {
        required_error: "Please specify if a stock number is being replaced"
    }),
    replacedStockNumber: z.string().optional(),
    customerPOC: z.string({
        required_error: "Please enter the customer point of contact"
    }),
    pocEmail: z.string().email("Invalid email address"),
    installationName: z.string({
        required_error: "Please enter the installation name"
    }),
    pocPhone: z.string({
        required_error: "Please enter the point of contact phone number"
    }),
    intCallPrefix: z.string().optional(),
    originatingOrderPoint: z.string().optional(),
}).refine(
    (data) => {
        // Conditional validation for replacedStockNumber
        if (data.stockNumberBeingReplaced === "yes") {
            return data.replacedStockNumber && data.replacedStockNumber.trim() !== "";
        }
        return true;
    },
    {
        message: "Replaced stock number is required when a stock number is being replaced",
        path: ["replacedStockNumber"],
    }
);

// Export the type derived from the schema
export type ItemRequest = z.infer<typeof itemRequestSchema>;