import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './../../styles/components/Search.css';

interface SortProps {
    sortBy: string;
    setSortBy: (newValue: string) => void;
    sortMovies: () => void;
    resetMovies: () => void;
}

export const Sort: React.FC<SortProps> = ({ sortBy, setSortBy, sortMovies, resetMovies }) => {
    const [showSortMenu, setShowSortMenu] = useState(false);

    return (
        <Dropdown className='col-1 sort-section'>
            <DropdownButton
                show={showSortMenu}
                id="dropdownMenu2"
                title={sortBy}
                variant="secondary"
                onClick={() => { setShowSortMenu(!showSortMenu) }}
            >
                <div className='d-flex justify-content-between px-3 close-dropdown pb-2'>
                    <div className='sort-title w-100' onClick={() => { resetMovies(); setSortBy('Sort by...') }}>
                        Sort by
                    </div>
                    <div className='sort-title' onClick={() => { setShowSortMenu(!showSortMenu) }}>
                        x
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <Dropdown.Item onClick={() => { setSortBy('year'); sortMovies(); }} eventKey="2">Year</Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item onClick={() => { setSortBy('episodes'); sortMovies(); }} eventKey="3">Episodes</Dropdown.Item>
                <div className="dropdown-divider"></div>
            </DropdownButton>
        </Dropdown>
    );
};