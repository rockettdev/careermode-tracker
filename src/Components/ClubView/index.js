import React, { useState } from "react";
import {useParams} from "react-router-dom";
import { useEffect } from 'react'
import NewPlayerModal from "../NewPlayerModal";
import RenderPlayerList from "./playermap";
import './index.css'


const ClubView = () => {

    const [clubData, setClubData] = useState({})
    const [playerData, setPlayerData] = useState(null)
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
    }, [clubData, id]);

    useEffect(() => {
        fetch(`http://localhost:8000/teams/${id}/players`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPlayerData(data);
            })
    }, [playerData, id]);


    console.log(clubData)
    console.log(playerData)


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
                    {playerData && <RenderPlayerList players={playerData}/>}
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
                    <div>Most Goal Contributions</div>
                    <div className="recordplayer"> Joao Felix - 141 Goal Contributions </div>
                </div>
                <div>
                    <div>Most Goals Per Game Ratio</div>
                    <div className="recordplayer"> Enzo Fernandez - 0.47 Goals Per Game </div>
                </div>
                <div>
                    <div>Most Clean Sheets</div>
                    <div className="recordplayer"> Kepa Arrizabalaga - 56 Clean Sheets </div>
                </div>
                <div>
                    <div>Most Red Cards</div>
                    <div className="recordplayer"> Antonio Rudiger - 4 Red Cards </div>
                </div>
                <div>
                    <div>Most Yellow Cards</div>
                    <div className="recordplayer"> Antonio Rudiger - 12 Yellow Cards </div>
                </div>

            </div>
            </section>
        </div>

        </div>
        </>

    )


}

export default ClubView