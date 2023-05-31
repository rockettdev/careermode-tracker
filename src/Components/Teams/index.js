import { useState } from 'react'
import NewClubModal from '../NewClubModal/index.js'
import './teams.css'



function Teams() {

    const [openModal, setOpenModal] = useState(false)

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
                <div className='teamslist'>
                    <div> yo </div>
                    <div> yo 2</div>
                    <div> yo </div>
                    <div> yo </div>
                </div>   
            </section>
        </div>

        </div>
        </>

    )
}

export default Teams