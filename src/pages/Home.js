import React from 'react';
import CountryList from '../components/CountryList';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Bem-vindo ao playlistTV</h1>
            <Link to={'/create'}>Criar Canal</Link>
            <CountryList />
        </div>
    );
}

export default Home;