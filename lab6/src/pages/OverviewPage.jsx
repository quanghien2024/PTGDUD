import React from 'react'; 
import Board from "../components/Board/Board"; 
import Table from "../components/Table/Table";  
import Overview from '../assets/Squares four 1.png';
import Detailedreport from '../assets/Filetext1.png';
import Download from '../assets/Download.png';
import Export from '../assets/Moveup.png';
import './AdminPage.css'; 

function OverviewPage() {
    return (
        <>
            <div className="view">
                <img src={Overview} alt="Overview Icon" />
                <p>Overview</p>
            </div>
            <div className="dash-board">
                <Board title="Turnover" />
                <Board title="Profit" />
                <Board title="New customer" />
            </div>
            <div className="report">
                <div className="left">
                    <img src={Detailedreport} alt="Detailed Report Icon" />
                    <p>Detailed report</p>
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
            <Table /> 
        </>
    );
}

export default OverviewPage;