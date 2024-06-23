import React, {useState} from "react";

const NewBoxForm = () => {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return(
        <form>
            <label htmlFor="color">Color: </label>
            <input 
            id="color" 
            type="text"
            name="color"
            placeholder="Input a color"
            value={formData.color}
            onChange={handleChange}
             />
        </form>
    )
}

export default NewBoxForm