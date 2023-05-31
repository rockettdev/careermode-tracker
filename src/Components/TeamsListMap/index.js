const TeamsList = ({ teams }) => {

    return (

        
        <div className='teamslist'>
        {teams.map((team) => (
            <a className="teamslist" href={`http://localhost:3000/teams/${team.id}`}>
                <div>
                    { team.clubName }
                </div>
            </a>
        ))
        }
        </div>

    )
}

export default TeamsList