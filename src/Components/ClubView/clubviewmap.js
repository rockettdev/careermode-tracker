const Club = ({ club }) => {

    return (     
        <>
        <div>
        {club.map((team) => (
                <div>
                    Name: { team.clubName }
                </div>
        ))}
        </div>
        <div>
            sssssssssssss
        </div>
        </>
    )
}

export default Club