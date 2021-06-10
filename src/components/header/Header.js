import React, {useEffect, useRef, useState} from "react";
import "./Header.scss";
import search from "../../images/search.svg";

export function Header(props) {

    const searchRef = useRef();

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);

        if (e.target.value === "") {
            // dispatch(fetchGifs());
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== "") {
            // dispatch(searchGifs(inputValue));
        } else {
            // dispatch(fetchGifs());
        }

    };

    return (
        <div className="header">
            <div>
                <form onSubmit={handleSubmit} noValidate autoComplete="off" className="form">
                    <div className="d-flex">
                        <input value={inputValue} ref={searchRef} onChange={handleChange} name="search"
                               className="w-100"
                               placeholder="Search..."/>
                        <button className="search-btn" disabled={!inputValue}>
                            <img src={search} alt="search"/>
                        </button>
                    </div>
                </form>

            </div>
            <h2 className="city-title">Tashkent, UZ</h2>
        </div>
    )
}
