import React from 'react';
import CreateChannel from "../components/CreateChannel";
import {Link} from "react-router-dom";


function Create() {
    return (
        <div>
            <h1>Criar Canal</h1>
            <Link to={'/home'}>Home</Link>
            <CreateChannel />
        </div>
    );
}

export default Create;