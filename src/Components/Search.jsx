import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../App';
import "./search.css"

function Search(props) {

    const {setSongName,} = useContext(DataContext);

    const {register, handleSubmit, reset, formState: {errors},} = useForm();


    function onSubmit(data){
        console.log(data);
        setSongName(data.name);
        reset();
    }

    return (
        <div className='main-search-component'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Song Name' type={"text"} {...register("name")}/>
                {/* <input type={"color"}/> */}
                <input type={'submit'}/>
            </form>
        </div>
    );
}

export default Search;