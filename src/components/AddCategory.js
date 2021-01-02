import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories})=>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        //con esto evitamos refrescar la pagina completa producto del form
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(category => [inputValue,...category]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className='card animate__animated animate__zoomIn'>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
};