import React from 'react'
import './searchAndUpload.css'
import searchIcon from '../../icons/search.png'
import uploadIcon from '../../icons/upload.png'
import filterIcon from '../../icons/filter1.svg'
const searchAndUpload = () => {
    return (

        <div className="filter-upload d-flex justify-content-between align-items-center">
            <div className="filter">
                <input id="search" type="search" placeholder="Search Your Project Here" />
                <img src={searchIcon} className="search" alt="search" />
                <button className='btn'><img src={filterIcon} className="filter-icon" alt="filter" /> </button>
            </div>
            <div className="upload-project">
                <button className='btn upload-button'>Upload Project <img src={uploadIcon} alt="upload" /> </button>
            </div>
        </div>

    )
}

export default searchAndUpload