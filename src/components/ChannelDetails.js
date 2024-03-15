import React from 'react';
import styled from 'styled-components';

const ChannelDetailsContainer = styled.div`
  /* Estilos para o contêiner dos detalhes do canal */
`;

const ChannelDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ChannelLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
`;

const ChannelDetailsBody = styled.div`
    color: #fff;
  /* Estilos para o corpo dos detalhes do canal */
`;

function ChannelDetails({ channel }) {
    if (!channel) {
        return <div>Selecione um canal</div>;
    }

    return (
        <ChannelDetailsContainer>
            <ChannelDetailsHeader>
                <ChannelLogo src={channel.tvgLogo} alt={`Logo de ${channel.name}`} />
                <div>
                    <h2>{channel.name}</h2>
                    <p>{channel.country}</p>
                </div>
            </ChannelDetailsHeader>
            <ChannelDetailsBody>
                {/* Renderizar informações do corpo do canal */}
            </ChannelDetailsBody>
        </ChannelDetailsContainer>
    );
}

export default ChannelDetails;