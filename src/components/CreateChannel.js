import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateChannel() {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        status: 'ACTIVE',
        tvgId: '',
        categoryId: '',
        tvgLogo: '',
        countryId: '',
        languageId: '',
    });

    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCountries();
        fetchLanguages();
        fetchCategories();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await api.get('/country');
            setCountries(response.data);
        } catch (error) {
            console.error('Erro ao buscar países:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await api.get('/category');
            setCategories(response.data);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
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
            await api.post(`/channels?countryId=${formData.countryId}&languageId=${formData.languageId}&categoryId=${formData.categoryId}`, formData);
            console.log('Canal criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar canal:', error);
        }
    };

    return (
        <div className="container p-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="url">URL:</label>
                    <input
                        className="form-control"
                        type="url"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tvgLogo">TVG Logo:</label>
                    <input
                        className="form-control"
                        type="url"
                        id="tvgLogo"
                        name="tvgLogo"
                        value={formData.tvgLogo}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tvgId">TVG ID:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="tvgId"
                        name="tvgId"
                        value={formData.tvgId}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryId">Categoria:</label>
                    <select className="form-control"
                            id="categoryId"
                            name="categoryId"
                            value={formData.category}
                            onChange={handleChange}
                    >
                        <option value="">Selecione uma categoria</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="countryId">País:</label>
                    <select className="form-control"
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
                <div className="form-group">
                    <label htmlFor="languageId">Idioma:</label>
                    <select className="form-control"
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
                <button type="submit" className="btn btn-primary mt-4">Criar Canal</button>
            </form>
        </div>
    );
}

export default CreateChannel;