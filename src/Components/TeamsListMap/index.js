const TeamsList = ({ teams }) => {

    return (

        <div className='teamslist'>
        {teams.map((team) => (
            <div>
                { team.clubName }
            </div>
        ))
        }
        </div>

    )
}

export default TeamsList