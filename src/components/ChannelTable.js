import React, { useEffect, useState } from 'react';
import api from '../api';
import './ChannelTable.css';
function ChannelTable() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetchChannels();
    }, []);

    const fetchChannels = async () => {
        try {
            const response = await api.get(`/channels`);
            setChannels(response.data);
        } catch (error) {
            console.error('Erro ao buscar canais:', error);
        }
    };

    return (
        <table className="table table-striped table-hover" style={{ width: '100%' }}>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Idioma</th>
                <th>País</th>
                <th>Status</th>
                <th>Categoria</th>
            </tr>
            </thead>
            <tbody>
            {channels.map((channel) => (
                <tr key={channel.id}>
                    <td><img src={channel.tvgLogo} alt={`Logo do canal ${channel.name}`} width="30" height="30" /> {channel.name}
                    </td>
                    <td><img src={channel.language.flagUrl} alt={`Idioma ${channel.language.ietfTag}`} width="20" height="15" /></td>
                    <td><img src={channel.country.flagUrl} alt={`Logo do canal ${channel.name}`} width="20" height="15" /> {channel.country.name}
                    </td>
                    <td>{channel.status}</td>
                    <td>{channel.category.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ChannelTable;