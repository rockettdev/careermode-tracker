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
            <section className='clubsmenu'>
                <div className='clubname'>
                {clubData.clubName}
                {/* {clubData && <Club club={clubData} />} */}
                <button onClick={() => {
                        setOpenModal(true);}} className="newplayer"> New Player </button>
                        {openModal && <NewPlayerModal closeModal={setOpenModal} />}
                </div>
                <div className="playerlist">
                    <section> 
                        <div></div>
                        <div> Name </div>
                        <div> POS </div>
                        <div className="rating"> OVR </div>
                        <div className="potential"> POT </div>
                        <div> Played </div>
                        <div> Goals </div>
                        <div> Assists </div>
                        <div> Clean Sheets </div>
                    </section>
                    <section>
                        <div></div>
                        <div> Joao Felix </div>
                        <div> CF </div>
                        <div className="rating"> 82 </div>
                        <div className="potential"> 90 </div>
                        <div> 302 </div>
                        <div> 112 </div>
                        <div> 29 </div>
                        <div> 0 </div>
                        <div> <button className="playerupdate"> UPDATE </button></div>
                    </section>
                    <section> 
                        <div></div>
                        <div>Raheem Sterling </div>
                        <div> LW </div>
                        <div className="rating"> 84 </div>
                        <div className="potential"> 87 </div>
                        <div> 119 </div>
                        <div> 37 </div>
                        <div> 19 </div>
                        <div> 0 </div>
                        <div> <button className='playerupdate'> UPDATE </button></div>
                    </section>
                </div>
            </section>
            <section className='records'>
            <div className='recordstitle'>
                Records
            </div>
            <div className="recordslist">
                <div>
                    <div>Most Games Played</div>
                    <div className="recordplayer"> Joao Felix - 302 Appearances</div>
                </div>
                <div>
                    <div>Most Goals Scored</div>
                    <div className="recordplayer"> Joao Felix - 112 Goals </div>
                </div>
                <div>
                    <div>Most Goals Assisted</div>
                    <div className="recordplayer"> Mykhailo Mudryk - 45 Assists </div>
                </div>
                <div>
                    <div>Most Goals Scored</div>
                    <div className="recordplayer"> Joao Felix - 112 Goals </div>
                </div>
                <div> Most Goals Per Game Ratio </div>
                <div> Most Clean Sheets </div>
                <div> Most Red Cards </div>
                <div> Most Yellow Cards </div>

            </div>
            </section>
        </div>

        </div>
        </>

    )


}

export default ClubView