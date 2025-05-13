import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Controller,  FieldValues, Path } from 'react-hook-form'

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>,
    name: Path<T>,
    label:string,
    placeholder?:string,
    description?:string
    type?: 'text'|'email'|'password'| 'file'
}

function FormField({control,name,label,placeholder,description}:FormFieldProps<T>) {
  return (
    <Controller control={control} name={name} render={({field})=>(
        <FormItem>
              <FormLabel className='label'>{label}</FormLabel>
              <FormControl>
                <Input className='input' placeholder={placeholder} {...field}/>
              </FormControl>
              <FormDescription>
                {description}
              </FormDescription>
              <FormMessage />
            </FormItem>
  )}></Controller>       
 )}

export default FormField