import React from 'react';
import styled from 'styled-components';
import { Search } from '../icons';

function BoardSearch() {
  return (
    <Container>
      <Wrapper>
        <input type="text" placeholder="검색" />
        <SearchIcon>
          <Search />
        </SearchIcon>
      </Wrapper>
    </Container>
  );
}

export default BoardSearch;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 20px;
  background: rgb(255, 255, 255);
  max-width: 400px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 24px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;

const SearchIcon = styled.div`
  box-sizing: content-box;
  padding-right: 12px;
  width: 20px;
  height: 20px;
  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
