const TeamsList = ({ teams }) => {

    return (

        <div className='teamslist'>
        {teams.map((team) => (
            <div>
                <h2>{ team.clubName }</h2>
            </div>
        ))
        }
        </div>

    )
}

export default TeamsList