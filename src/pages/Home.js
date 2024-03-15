import React from 'react';
import CountryList from '../components/CountryList';
import Header from "../components/Header";
import ChannelTable from "../components/ChannelTable";

function Home() {
    return (
        <div>
            <Header />
            <ChannelTable />
        </div>
    );
}

export default Home;