import { useState } from "react"
import './style.css'


const NewClubModal = ({ closeModal }) => {


    const [clubName, setClubName] = useState('')

    // const onChange = (e) => {
    //     setClubName(e.target.value)
    // }

    const userClub = (e) => {

    setClubName(e.target.value)    
    }


    const teamSubmission = () => {

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
                <h1>Please enter your club name!</h1>
            </div>
            <form onSubmit={teamSubmission}>
                <label className="footer">
                    <input onChange={userClub} className='textbox' type="text"/>
                </label>
             </form>
            <div className="footer">
                <button onClick={closeDisplayModal} id="cancelBtn">Cancel</button>
                <button>Submit</button>
            </div>
        </div>
    </div>


    )
}

export default NewClubModal