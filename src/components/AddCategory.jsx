import React, { useState } from 'react';
import Navbar from "./Navbar";

const AddCategory = ({ setCategory }) => {

    window.onload = function () {
        document.querySelector(".input-text").focus();
        setCategory("flower")
    }

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchPhoto = e => {
        e.preventDefault();
        if (value === "") {
            setCategory("flower")
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
    }

    return (
        <>
            <Navbar />

            <form onSubmit={searchPhoto}>
                <input type="text" className="input-text" placeholder='Zoekwoord...'
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </form>
            {error ? <p className='error'>Vul iets in</p> : ""}
        </>
    );
}

export default AddCategory;