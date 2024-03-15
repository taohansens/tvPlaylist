import React from 'react';
import CreateChannel from "../components/CreateChannel";
import {Link} from "react-router-dom";
import Header from "../components/Header";


function Create() {
    return (
        <div>
            <Header />
            <CreateChannel />
        </div>
    );
}

export default Create;