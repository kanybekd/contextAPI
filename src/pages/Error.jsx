import { Link } from 'react-router-dom'
function Error(){
    return(
        <div className="error">
            <div>

            <p>Oops! It's a Dead End</p>
            </div>
            <div>
                <Link to='/'>
                <button id="back">Back Home</button>
                </Link>
            </div>
        </div>
        )
}

export default Error;