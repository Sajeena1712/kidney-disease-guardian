
import React from "react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { patientDataFields } from "@/lib/constants";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type PatientDataFormProps = {
  onSubmit: (data: any) => void;
  isLoading: boolean;
};

const PatientDataForm: React.FC<PatientDataFormProps> = ({ onSubmit, isLoading }) => {
  // Dynamically generate the schema based on patientDataFields
  const formSchema = z.object(
    patientDataFields.reduce((acc: Record<string, any>, field) => {
      if (field.type === 'number') {
        acc[field.id] = z.preprocess(
          (val) => (val === '' ? undefined : Number(val)),
          z.number({
            required_error: `${field.label} is required`,
            invalid_type_error: `${field.label} must be a number`,
          })
            .min(field.min || 0, `${field.label} must be at least ${field.min}`)
            .max(field.max || 1000, `${field.label} cannot exceed ${field.max}`)
        );
      } else {
        acc[field.id] = z.string({
          required_error: `Please select a value for ${field.label}`,
        });
      }
      return acc;
    }, {})
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: patientDataFields.reduce((acc: Record<string, any>, field) => {
      if (field.type === 'number') {
        acc[field.id] = '';
      } else {
        acc[field.id] = '';
      }
      return acc;
    }, {}),
  });

  const handleFormSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      onSubmit(data);
      toast.success("Patient data submitted successfully", {
        description: "The prediction model is now analyzing your data."
      });
    } catch (error) {
      toast.error("Error submitting patient data", {
        description: "Please check the data and try again."
      });
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="space-y-6 rounded-lg border p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Patient Data</h2>
        <div className="text-sm text-muted-foreground">
          6 Key Parameters
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {patientDataFields.map((field) => (
              <FormField
                key={field.id}
                control={form.control}
                name={field.id}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>
                      {field.label} 
                      {field.unit && <span className="ml-1 text-xs text-muted-foreground">({field.unit})</span>}
                    </FormLabel>
                    <FormControl>
                      {field.type === 'number' ? (
                        <Input
                          {...formField}
                          type="number"
                          min={field.min}
                          max={field.max}
                          step={field.step || 1}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      ) : (
                        <Select 
                          onValueChange={formField.onChange}
                          defaultValue={formField.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </FormControl>
                    {field.description && (
                      <FormDescription>{field.description}</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-medical-teal hover:bg-medical-teal/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                'Submit & Predict'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PatientDataForm;
