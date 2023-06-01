import { useState } from "react"
import './style.css'

const NewPlayerModal = ({ closeModal }) => {

    const [clubName, setClubName] = useState('')

    const userClub = (e) => {
    setClubName(e.target.value)    
    }

    const TeamSubmission = (e) => {
        e.preventDefault()

        // const clubname = { clubName }

        // fetch('http://localhost:8000/teams', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(clubname)
        // }).then(() => {
        //     console.log('new club added')
        //     closeDisplayModal()
        // })

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
                <h1>New Player</h1>
            </div>
            <form>
                <label className="labels">
                    <p>Name:</p>
                    <input onChange={userClub} className='textbox' type="text"/>
                    <p>Position:</p>
                    <input onChange={userClub} className='textbox' type="text"/>
                    <p>Nationality:</p>
                    <input onChange={userClub} className='textbox' type="text"/>
                    <p>Rating:</p>
                    <input onChange={userClub} className='textbox' type="text"/>
                    <p>Potential:</p>
                    <input onChange={userClub} className='textbox' type="text"/>
                </label>

             </form>
            <div className="footer">
                <button onClick={closeDisplayModal} id="cancelBtn">Cancel</button>
                <button onClick={TeamSubmission}>Submit</button>
            </div>
        </div>
    </div>

    )
}

export default NewPlayerModal