import React, { useState } from "react";
import {useParams} from "react-router-dom";
import { useEffect } from 'react'
import NewPlayerModal from "../NewPlayerModal";
import './index.css'


const ClubView = () => {

    const [clubData, setClubData] = useState({})
    const [openModal, setOpenModal] = useState(false);

    const {id} = useParams();

    useEffect(() => {
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
                <div className='clubname'>
                {clubData.clubName}
                {/* {clubData && <Club club={clubData} />} */}
                <button onClick={() => {
                        setOpenModal(true);}} className="newplayer"> New Player </button>
                        {openModal && <NewPlayerModal closeModal={setOpenModal} />}
                </div>
                <div className="playerlist">
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>
                    <div>Shush mate</div>   
                </div>
            </section>
        </div>

        </div>
        </>

    )


}

export default ClubView