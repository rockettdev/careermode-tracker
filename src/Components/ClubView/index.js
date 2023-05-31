import React, { useState } from "react";
import {useParams} from "react-router-dom";
import { useEffect } from 'react'
import Club from "./clubviewmap";


const ClubView = () => {

    const [clubData, setClubData] = useState({})

    const {id} = useParams();



    useEffect(() => {

        console.log('i fire once');
        fetch(`http://localhost:8000/teams/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClubData(data);
            })
    }, [id]);


    console.log(clubData)


    return (
        <>
        <div className="teamsbg">
            <header className='navbar'>
                <div></div>
                <div className='navoptions'>
                    <h1 className='title'> Career Mode Tracker </h1>
                    <div className='navbuttonslist'>
                    </div>
                </div>
            </header>

        <div className='main'>
            <section className='teamsmenu'>
                <div className='teamsmenuheader' >
                    Name: {clubData.clubName}

                {/* {clubData && <Club club={clubData} />} */}
                
                </div>
            </section>
        </div>

        </div>
        </>

    )


}

export default ClubView