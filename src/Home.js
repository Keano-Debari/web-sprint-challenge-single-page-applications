import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

export default function Home() {
    const { url } = useRouteMatch()
    return (
        <div className="mainContainer">
            <h1>Your favorite food, delivered while coding</h1>
            <Link to={`${url}pizza`}><button id="redirect">Pizza?</button></Link>
        </div>
    );
};