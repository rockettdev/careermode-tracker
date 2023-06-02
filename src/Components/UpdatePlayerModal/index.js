import { useState } from "react"
import './style.css'
import {useParams} from "react-router-dom";

const UpdatePlayerModal = ({ closeModal }) => {

    const [playerName, setPlayerName] = useState('')
    const [playerPos, setPlayerPos] = useState('')
    const [playerRating, setPlayerRating] = useState('')
    const [playerPot, setPlayerPot] = useState('')

    const {id} = useParams();

    const playerNameForm = (e) => {
    setPlayerName(e.target.value)    
    }

    const playerPosForm = (e) => {
        setPlayerPos(e.target.value)    
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
                    "playerRating": playerRating,
                    "playerPot": playerPot,
                    "gamesPlayed": 0,
                    "goalsScored": 0,
                    "goalsAssisted": 0,
                    "cleanSheets": 0,
                    "redCards": 0,
                    "yellowCards": 0
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

    <div className="modalupdateplayerBg">
        <div className="modalupdateplayercontainer">
            <div className="titleCloseBtn">
                <button onClick={closeDisplayModal}> X </button>
            </div>
            <div className="title">
                <h1>Update Player</h1>
            </div>
            <form>
                <label className="labels">
                    <p>Games Played:</p>
                    <input onChange={playerNameForm} className='textboxplayer' type="text"/>
                    <p>Goals Scored:</p>
                    <input onChange={playerPosForm} className='textboxplayer' type="text"/>
                    <p>Goals Assisted:</p>
                    <input onChange={playerRatingForm} className='textboxplayer' type="text"/>
                    <p>Clean Sheets:</p>
                    <input onChange={playerPotForm} className='textboxplayer' type="text"/>
                    <p>Yellow Cards:</p>
                    <input onChange={playerPotForm} className='textboxplayer' type="text"/>
                    <p>Red Cards:</p>
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

export default UpdatePlayerModal