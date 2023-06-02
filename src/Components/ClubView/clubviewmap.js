const RenderPlayerList = ({ players }) => {

    return (     
        <>
        <div>
        {players.map((player) => (
                <div>
                    Name: { player.clubName }
                </div>
        ))}
        </div>
        </>
    )
}

export default RenderPlayerList