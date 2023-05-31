import { useState } from 'react'
import NewClubModal from '../NewClubModal/index.js'
import TeamsList from '../TeamsListMap/index.js'
import './teams.css'
import { useEffect } from 'react'



function Teams() {

    const [openModal, setOpenModal] = useState(false);
    const [teams, setTeams] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/teams')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTeams(data);
            })
    }, [teams]);

    return (
        <>
        <div className="teamsbg">
            <header className='navbar'>
                <div></div>
                <div className='navoptions'>
                    <h1 className='title'> Career Mode Tracker </h1>
                    <div className='navbuttonslist'>
                        <div>MY TEAMS</div>
                        <div>NEW TEAM</div>
                    </div>
                </div>
            </header>

        <div className='main'>
            <section className='teamsmenu'>
            {openModal && <NewClubModal closeModal={setOpenModal} />}
                <div className='teamsmenuheader' >
                    <button className='basicbutton' onClick={() => {
                        setOpenModal(true);
                    }}> CREATE NEW TEAM </button>
                </div>
                   { teams && <TeamsList teams={teams}/> } 
            </section>
        </div>

        </div>
        </>

    )
}

export default Teams