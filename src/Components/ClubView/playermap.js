import { useState } from "react";

const RenderPlayerList = ({ players, UpdatePlayerModal }) => {

    const [openPlayerModal, setOpenPlayerModal] = useState(false)

    return (     
        <>
        <section>
            {players.map((player) => (
                <>
                    <div></div>
                    <div>
                        { player.playerName }
                    </div>
                    <div>
                        { player.playerPos }
                    </div>
                    <div>
                        { player.playerRating }
                    </div>
                    <div>
                        { player.playerPot }
                    </div>
                    <div>
                        { player.gamesPlayed }
                    </div>
                    <div>
                        { player.goalsScored }
                    </div>
                    <div>
                        { player.goalsAssisted }
                    </div>
                    <div>
                        { player.cleanSheets }
                    </div>
                    <div> <button onClick={() => {
                        setOpenPlayerModal(true);}} className="playerupdate"> UPDATE </button>
                        {openPlayerModal && <UpdatePlayerModal playerId={player.id} closeModal={setOpenPlayerModal} />}
                        </div>
                        
                </>
            ))}
        </section>
        </>
    )
}

export default RenderPlayerList