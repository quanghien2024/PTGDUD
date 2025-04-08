import Board from "../components/Board/Board";
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

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
                    <div className="dash-board">
                        <Board title="Turnover" />
                        <Board title="Profit" />
                        <Board title="New customer" />
                    </div>
                    <Table></Table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminPage;