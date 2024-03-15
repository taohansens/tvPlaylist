import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../api';
import { useParams } from 'react-router-dom';

const CreateChannelContainer = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CreateChannelTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const CreateChannelForm = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ced4da;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ced4da;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
function CreateChannel() {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        status: 'ACTIVE',
        tvgId: '',
        category: '',
        tvgLogo: '',
        countryId: '',
        languageId: '',
    });

    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchCountries();
        fetchLanguages();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await api.get('/country');
            setCountries(response.data);
        } catch (error) {
            console.error('Erro ao buscar países:', error);
        }
    };

    const fetchLanguages = async () => {
        try {
            const response = await api.get('/language');
            setLanguages(response.data);
        } catch (error) {
            console.error('Erro ao buscar idiomas:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            await api.post(`/channels?countryId=${formData.countryId}&languageId=${formData.languageId}`, formData);
            console.log('Canal criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar canal:', error);
        }
    };

    return (
        <CreateChannelContainer>
            <h2>Criar Novo Canal</h2>
            <form onSubmit={handleSubmit} className={FormGroup}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        className={Input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="url">URL:</label>
                    <input
                        type="text"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="tvgId">TVG ID:</label>
                    <input
                        type="text"
                        id="tvgId"
                        name="tvgId"
                        value={formData.tvgId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Categoria:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="tvgLogo">TVG Logo:</label>
                    <input
                        type="text"
                        id="tvgLogo"
                        name="tvgLogo"
                        value={formData.tvgLogo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="countryId">País:</label>
                    <select className={Select}
                        id="countryId"
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                    >
                        <option value="">Selecione um país</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="languageId">Idioma:</label>
                    <select
                        id="languageId"
                        name="languageId"
                        value={formData.languageId}
                        onChange={handleChange}
                    >
                        <option value="">Selecione um idioma</option>
                        {languages.map((language) => (
                            <option key={language.id} value={language.id}>
                                {language.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Criar Canal</button>
            </form>
        </CreateChannelContainer>
    );
}

export default CreateChannel;