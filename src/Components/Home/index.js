import { Link } from 'react-router-dom';
import '../../App.css';
import './index.css'

function Home () {


    return (

      <>
      <body>
        <div className="bg">
          <div className='blur'></div>
        </div>
          <div className='text'>
            {/* <img src={""} className="App-logo" alt="logo" /> */}
            <p>
              FIFA 23 Career Mode Tracker
            </p>
            <br></br>
            <Link to="teams"> <button className='basicbutton'> MY TEAMS </button> </Link>
        </div>
      </body>
      </>


    )


}

export default Home