import {Link} from 'react-router-dom'

const NotFound = () => {
    return <div>
        <b>Page not found</b>
        <div>
            <Link to="/">Main page</Link>
        </div>
    </div>
}

export {NotFound}