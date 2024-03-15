import styled from 'styled-components';

export const CountryListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    background-color: #1F2937;
`;

export const CountryCard = styled.div`
    background-color: #1F2937;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const CountryFlag = styled.img`
    width: 30px;
    height: 20px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 5px;
`;

export const CountryName = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const CountryCode = styled.p`
    margin: 5px 0 0;
    font-size: 14px;
    color: #fff;
`;