import { useState } from "react";

export const UseForm = (initialState) => {
    const [formValues, setFormValues] = useState({initialState});
    const onChange = (event) => {
    const {name, value} = event.target
      setFormValues({ ...formValues, [name]: value });
    };
    const cleanFields = () => {
      setFormValues(initialState)
    }
    return {formValues, onChange, cleanFields} 
}
