import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../api';
import ChannelDetails from "./ChannelDetails";

const ChannelListContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: #374151;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChannelCard = styled.div`
    color: #fff;
    background-color: #1F2937;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    &hover {
        background-color: #374151;
    }
`;

function ChannelList({ countryId }) {
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useEffect(() => {
        fetchChannels();
    }, [countryId]);

    const fetchChannels = async () => {
        try {
            const response = await api.get(`/channels?countryId=${countryId}`);
            setChannels(response.data);
        } catch (error) {
            console.error('Erro ao buscar canais:', error);
        }
    };
    const handleChannelClick = (channel) => {
        setSelectedChannel(channel);
    };

    return (
        <div>
        <ChannelListContainer>
            {channels.map(channel => (
                <ChannelCard key={channel.id} onClick={() => handleChannelClick(channel)}>
                    <img src={channel.tvgLogo} alt={`Logo do canal ${channel.name}`} width="30" height="30" />
                    <span style={{ marginLeft: '10px' }}>{channel.name}</span>
                </ChannelCard>
            ))}
        </ChannelListContainer>
        </div>
    );
}

export default ChannelList;