const RenderPlayerList = ({ players }) => {

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
                    <div> <button className="playerupdate"> UPDATE </button></div>
                </>
            ))}
        </section>
        </>
    )
}

export default RenderPlayerList