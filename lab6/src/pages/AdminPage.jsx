import React from 'react'; 
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Routes, Route, Navigate } from 'react-router-dom';


import OverviewPage from '../pages/OverviewPage';
import ProjectsPage from '../pages/ProjectsPage';
import TeamPage from '../pages/TeamPage';
import AnalyticsPage from '../pages/Analytics';
import MessagesPage from '../pages/Messages';
import IntegrationsPage from '../pages/Integrations';

import './AdminPage.css';

function AdminPage() {
    return (
        <div className="admin-page">
            <div className="main-content-area">
                <div className="nav-side">
                    <Nav />
                </div>

                <div className="content-side">
                    <Header />
                    <div className="page-content"> 
                        <Routes>
                            <Route path="/overview" element={<OverviewPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/analytics" element={<AnalyticsPage />} />
                            <Route path="/messages" element={<MessagesPage />} />
                            <Route path="/integrations" element={<IntegrationsPage />} />

                            <Route path="/" element={<Navigate replace to="/overview" />} />
                            <Route path="*" element={
                                <div style={{ padding: '20px' }}> 
                                    <h1>404 - Page Not Found</h1>
                                    <p>The page you are looking for does not exist.</p>
                                </div>
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminPage;