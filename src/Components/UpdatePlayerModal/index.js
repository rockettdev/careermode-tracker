import { useState } from "react"
import './style.css'
import {useParams} from "react-router-dom";

const UpdatePlayerModal = ({ closeModal, playerId }) => {

    const [gamesPlayed, setGamesPlayed] = useState('')
    const [playerPos, setPlayerPos] = useState('')
    const [playerRating, setPlayerRating] = useState('')
    const [playerPot, setPlayerPot] = useState('')

    const {id: teamId} = useParams();

    const gamesPlayedForm = (e) => {
    setGamesPlayed(e.target.value)    
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
                    "gamesPlayed": gamesPlayed,
                    "goalsScored": 0,
                    "goalsAssisted": 0,
                    "cleanSheets": 0,
                    "redCards": 0,
                    "yellowCards": 0
                }

        fetch(`http://localhost:8000/players/${playerId}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playerInfo)
        }).then(() => {
            console.log('Player Stats Updated')
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
                    <input onChange={gamesPlayedForm} className='textboxplayer' type="text"/>
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