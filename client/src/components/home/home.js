import React from 'react'
import CardHome from './cardHome'
import Navbar from '../navbar/navbar'
import SearchAndUpload from './searchAndUpload'
import './home.css'
const home = () => {
    return (
        <>
            <div className='bg-home'>
                <Navbar />
                <div className="width-80 m-auto">
                    <SearchAndUpload />

                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <CardHome />
                        <CardHome />
                        <CardHome />
                    </div>
                </div>
            </div>
        </>
    )
}

export default home