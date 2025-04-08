import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <>
            <div className="nav">
                <ul>
                    <li><Link>Link </Link></li>
                    <li><Link>Link </Link></li>
                    <li><Link>Link </Link></li>
                    <li><Link>Link </Link></li>
                    <li><Link>Link </Link></li>
                    <li><Link>Link </Link></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;