import React from "react";
import { Link } from 'react-router-dom'

function MainLayout({ children }) {
    return (
        <div>
            <header>
                <nav class="navbar navbar-light bg-primary">
                    <div class="container">
                        <Link to="/" class="navbar-brand" href="#">Ali Shopping Expo</Link>
                        <Link to="/basic-training" className="navbar-brand">Basic Training</Link>
                    </div>
                </nav>        
            </header>
            <main>
                <div className="container mt-3">
                    {children}
                 </div>
            </main>
        </div>
    );
}

export default MainLayout;