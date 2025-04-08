import Board from "../components/Board/Board";
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Overview from '../assets/Squares four 1.png';
import Detailedreport from '../assets/Filetext1.png';
import Download from '../assets/Download.png';
import Export from '../assets/Moveup.png';

import './AdminPage.css';

function AdminPage() {
    return (
        <div className="admin-page">
            <div className="main-content-area">
                <div className="nav-side">
                    <Nav></Nav>
                </div>
                <div className="content-side">
                    <Header></Header>
                    <div className="view">
                       <img src={Overview} alt="Biểu tượng nhỏ" />
                       <p>Overview</p>
                    </div>
                    <div className="dash-board">
                        <Board title="Turnover" />
                        <Board title="Profit" />
                        <Board title="New customer" />
                    </div>
                    <div className="report">
                         <div className="left">
                            <img src={Detailedreport} alt="Biểu tượng nhỏ" />
                            <p>Detaild report</p>
                        </div>
                         <div className="right">
                            <button className="import-button">
                            <img src={Download} alt="Download" className="button-icon"/>
                            <span>Import</span>
                        </button>
                        <button className="import-button">
                            <img src={Export} alt="Export" className="button-icon"/>
                            <span>Export</span>
                        </button>
                    </div>
                </div>
                     <Table></Table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminPage;