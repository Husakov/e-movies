import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './../../styles/components/Search.css';

interface SearchProps {
    searchTerm: string;
    setSearchTerm: (newValue: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="input-group col-8">
            <div className="input-group-prepend">
                <span className="search-icon input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
            <input type="text" value={searchTerm} className="search-input col-10" onChange={handleSearch} placeholder="Type to search..." aria-label="search" aria-describedby="basic-addon1" />
        </div>
    );
};