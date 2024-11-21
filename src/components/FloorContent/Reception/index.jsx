import React from 'react';
import styled from 'styled-components';
import GlassFacade from '../../common/GlassFacade';
import Booth from './Booth';
import CloudLights from '../../common/CloudLights';
import Bar from './Bar';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Floor = styled.div`
    width: 750px;
    height: 15px;
    background-color: #5F90B8;
    border-left: 100px solid #131E41;
`;

const Top = styled.div`
    height: 50%;
    width: 450px;
    position: relative;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    right: 2vw;
`;

const Bottom = styled.div`
    height: 50%;
    position: relative;
`;

const TopBoothContainer = styled.div`
    position: relative;
    bottom: 5px;
`;

const CloudContainer = styled.div`
    display: flex;
    width: 500px;
    height: 20vh;
    position: absolute;
    top: calc(45% - 50px);
    left: 180px;
`;

const BottomBoothContainer = styled.div`
    position: absolute;
    bottom: 5px;
    right:0;
    height: 10px;
    width: 850px;
    z-index: -1;
`;

export default function Reception() {
  const scaleRatio = window.innerWidth / 1980;

  return (
    <Wrapper>
      <GlassFacade />
      <Top>
        <CloudContainer style={{ transform: `scale(${scaleRatio})` }}>
          <CloudLights />
          <CloudLights style={{ top: '10%' }} />
          <CloudLights style={{ top: '25%' }} />
          <CloudLights style={{ top: '-10%', left: -70 }} />
          <CloudLights style={{ top: '15%', left: -80 }} />
          <CloudLights style={{ top: '-20%', left: -80 }} />
          <CloudLights style={{ top: '5%', left: -100 }} />
        </CloudContainer>
        <TopBoothContainer>
          <Booth left="500px" />
          <Booth left="250px" />
          <Booth />
        </TopBoothContainer>
        <Floor />
      </Top>
      <Bottom id="bedroom-bottom">
        <BottomBoothContainer>
          <Booth />
          <Booth left="250px" />
          <Booth left="500px" />
        </BottomBoothContainer>
        <Bar />
      </Bottom>
    </Wrapper>
  );
}
