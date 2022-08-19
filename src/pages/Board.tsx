import React from 'react';
import styled from 'styled-components';

function Board() {
  return (
    <Container>
      <Banner>
        <BannerPattern />
        <BannerChar src="/images/입주민_banner_char.png" alt="배너" />
      </Banner>
      <Content></Content>
    </Container>
  );
}

export default Board;

const Container = styled.div`
  width: 100%;
  overflow: hidden auto;
  max-width: 1920px;
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;
`;

const BannerPattern = styled.div`
  width: 2560px;
  background-image: url('/images/입주민_banner_pattern.png');
  height: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  z-index: -1;
  margin-top: 0px;
`;

const BannerChar = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 560px;
`;

const Content = styled.div`
  width: 100%;
`;
