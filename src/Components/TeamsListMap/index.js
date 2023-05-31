import { Link } from 'react-router-dom';

const TeamsList = ({ teams }) => {

    return (

        
        <div className='teamslist'>
        {teams.map((team) => (
            <Link to={`/teams/${team.id}`} className='teamslist'>
                <div>
                    { team.clubName }
                </div>
                </Link >
        ))
        }
        </div>
    )
}

export default TeamsList