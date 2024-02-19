import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navigation.css"
import Dashboard from '../pages/dashboard/Dashboard';
import User from '../pages/user/User';

export default function Navigation() {
    return (
        <Router>
            <nav className="">
                <div className="d-flex">
                    <Link className="heading" to="/">Pic Book</Link>
                    <div className="d-flex">
                        <Link className="sub-heading" to="/">Dashboard</Link>
                        <Link className="sub-heading" to="/user">User</Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}></Route>
                <Route path="/user" element={<User/>}></Route>
            </Routes>
        </Router>
    );
}
