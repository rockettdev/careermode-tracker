import { useState } from "react"
import './style.css'
import {useParams} from "react-router-dom";

const NewPlayerModal = ({ closeModal }) => {

    const [playerName, setPlayerName] = useState('')
    const [playerPos, setPlayerPos] = useState('')
    const [playerNation, setPlayerNation] = useState('')
    const [playerRating, setPlayerRating] = useState('')
    const [playerPot, setPlayerPot] = useState('')

    const {id} = useParams();

    const playerNameForm = (e) => {
    setPlayerName(e.target.value)    
    }

    const playerPosForm = (e) => {
        setPlayerPos(e.target.value)    
        }
        
    const playerNationForm = (e) => {
        setPlayerNation(e.target.value)    
        }

    const playerRatingForm = (e) => {
        setPlayerRating(e.target.value)    
        }
    const playerPotForm = (e) => {
        setPlayerPot(e.target.value)    
        }

    const TeamSubmission = (e) => {
        e.preventDefault()

        const playerInfo = {
                    "id": null ,
                    "teamId": id,
                    "playerName": playerName,
                    "playerPos": playerPos,
                    "playerNation": playerNation,
                    "playerRating": playerRating,
                    "playerPot": playerPot
                }

        fetch(`http://localhost:8000/players`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playerInfo)
        }).then(() => {
            console.log('new club added')
            closeDisplayModal()
        })
    }
    const closeDisplayModal = () => {
        closeModal(false)
    }

return (

    <div className="modalplayerBg">
        <div className="modalplayerContainer">
            <div className="titleCloseBtn">
                <button onClick={closeDisplayModal}> X </button>
            </div>
            <div className="title">
                <h1>New Player</h1>
            </div>
            <form>
                <label className="labels">
                    <p>Name:</p>
                    <input onChange={playerNameForm} className='textboxplayer' type="text"/>
                    <p>Position:</p>
                    <input onChange={playerPosForm} className='textboxplayer' type="text"/>
                    <p>Nationality:</p>
                    <input onChange={playerNationForm} className='textboxplayer' type="text"/>
                    <p>Rating:</p>
                    <input onChange={playerRatingForm} className='textboxplayer' type="text"/>
                    <p>Potential:</p>
                    <input onChange={playerPotForm} className='textboxplayer' type="text"/>
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