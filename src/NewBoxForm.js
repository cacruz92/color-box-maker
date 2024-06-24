import React, {useState} from "react";
import "./NewBoxForm.css"

const NewBoxForm = ({addBox}) => {
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

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <div className="container">
        <form className="newBoxForm" onSubmit={handleSubmit}>
        <h1>Box List App:</h1>
            <label htmlFor="color">Color: </label>
            <input 
            id="color" 
            type="text"
            name="color"
            placeholder="Input a color"
            value={formData.color}
            onChange={handleChange}
             />

            <br></br>

            <label htmlFor="height">Height: </label>
            <input 
            id="height" 
            type="text"
            name="height"
            placeholder="Height (px)"
            value={formData.height}
            onChange={handleChange}
             />

            <br></br>

            <label htmlFor="width">Width: </label>
            <input 
            id="width" 
            type="text"
            name="width"
            placeholder="Width (px)"
            value={formData.width}
            onChange={handleChange}
             />

             <br></br>

             <button>Add Box</button>
        </form>
        </div>
    )
}

export default NewBoxForm