import './Header.css'
import Search from '../../assets/Search.png';
import Bell from '../../assets/Bell1.png';  
import Question from '../../assets/Question1.png'; 
import Avatar from '../../assets/Avatar6.png';

function Header() {
    return (
        <>
            <div className="header">
                <span className="dashboard">Dashboard</span>
                <span className='iconright'>
                     <span className="search-container">
                         <img src={Search} alt="Search Icon" class="search-icon"/>
                         <span className="search-text">Search</span>
                     </span>
                    <img src={Bell} alt="Bell" class="icon"/>
                    <img src={Question} alt="Bell" class="icon"/>
                    <img src={Avatar} alt="Bell" class="icon"/>
                </span>
            </div>
        </>
    );
}

export default Header;