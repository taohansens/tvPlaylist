import React, { useEffect, useState } from 'react';
import api from '../api';
import ChannelList from './ChannelList';
import {
    CountryListContainer,
    CountryCard,
    CountryFlag,
    CountryName,
    CountryCode,
} from './CountryList.styles';

function CountryList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await api.get('/country');
            setCountries(response.data);
        } catch (error) {
            console.error('Erro ao buscar países:', error);
        }
    };

    return (
        <CountryListContainer>
            {countries.map(country => (
                <CountryCard key={country.id}>
                    <CountryFlag src={country.flagUrl} alt={`Bandeira de ${country.name}`} />
                    <CountryName>{country.name}</CountryName>
                    <CountryCode>{country.isoCode}</CountryCode>
                    <ChannelList countryId={country.id} />
                </CountryCard>
            ))}
        </CountryListContainer>
    );
}

export default CountryList;