import React from "react";
import {Link} from 'react-router-dom'
import MainLayout from "../Layout/MainLayout";

function HomePage() {
    return (
        <MainLayout>
            <div className="bg-light p-5 mt-4 rounded-5">
                <h1>Welcome to the simple POS for small buiness</h1>
                <p>Labore tempor ipsum duis ea exercitation laboris laborum mollit qui exercitation.</p>
                <Link to='/pos' className='btn btn-primary'>Click here to sell products</Link>
            </div>
        </MainLayout>
    )
}

export default HomePage