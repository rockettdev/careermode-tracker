import { useState } from "react"
import './style.css'

const NewClubModal = ({ closeModal }) => {

    const [clubName, setClubName] = useState('')

    const userClub = (e) => {
    setClubName(e.target.value)    
    }

    const teamSubmission = (e) => {
        e.preventDefault()

        const clubname = { clubName }

        fetch('http://localhost:8000/teams', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(clubname)
        }).then(() => {
            console.log('new club added')
            closeDisplayModal()
        })
    }

    const closeDisplayModal = () => {
        closeModal(false)
    }

return (

    <div className="modalBg">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={closeDisplayModal}> X </button>
            </div>
            <div className="title">
                <h1>Please enter your club name</h1>
            </div>
            <form>
                <label className="footer">
                    <input onChange={userClub} className='textbox' type="text"/>
                </label>
             </form>
            <div className="footer">
                <button onClick={closeDisplayModal} id="cancelBtn">Cancel</button>
                <button onClick={teamSubmission}>Submit</button>
            </div>
        </div>
    </div>

    )
}

export default NewClubModal