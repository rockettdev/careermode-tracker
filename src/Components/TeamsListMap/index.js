import { Link } from 'react-router-dom';

const TeamsList = ({ teams }) => {

    return (

        
        <div className='teamslist'>
        {teams.map((team) => (
            <Link to={`/teams/${team.id}`} className='teamslist'>
                <div>
                    { team.clubName }
                    <img className='clublogo' src={team.clubUrl} alt='' height="140"></img>
                </div>
                </Link >
        ))
        }
        </div>
    )
}

export default TeamsList