import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Search } from '../icons';
import { User } from '../../types/user';

type BoardSearchProps = {
  users: User[];
  handleSearch: (keyword: string) => void;
};

function BoardSearch({ users, handleSearch }: BoardSearchProps) {
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [autoCompleteList, setAutoCompleteList] = useState<string[]>([]);

  const nicknameList = users.map((user) => user.nickname);
  const searchRef = useRef<HTMLInputElement | null>(null);

  function onBlur() {
    setIsFocus(false);
  }

  function onFocus() {
    setIsFocus(true);
  }

  function onkeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      if (!searchRef.current) return;
      handleSearch(searchRef.current.value);
    }
  }

  function onChange() {
    if (!searchRef.current) return;

    const value = searchRef.current.value.trim();
    if (!value) {
      setAutoCompleteList([]);
      return;
    }

    const filterSearch = nicknameList.filter((nickname) =>
      nickname.includes(value)
    );
    setAutoCompleteList(filterSearch);
  }

  function handleClickKeyword(nickname: string) {
    if (!searchRef.current) return;
    searchRef.current.value = nickname;
    handleSearch(searchRef.current.value);
  }

  return (
    <Container>
      <Wrapper>
        <input
          ref={searchRef}
          type="text"
          placeholder="검색"
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          onKeyPress={onkeyPress}
        />
        <SearchIcon
          onClick={() => {
            if (!searchRef.current) return;
            handleSearch(searchRef.current.value);
          }}
        >
          <Search />
        </SearchIcon>
      </Wrapper>
      {isFocus && autoCompleteList.length > 0 && (
        <AutoCompleteList>
          {autoCompleteList.map((keyword, index) => (
            <AutoCompleteItem
              key={index}
              onClick={() => handleClickKeyword(keyword)}
            >
              {keyword}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      )}
      <HashtagList>
        {nicknameList.slice(0, 4).map((nickname, index) => (
          <HashtagItem key={index} onClick={() => handleClickKeyword(nickname)}>
            #{nickname}
          </HashtagItem>
        ))}
      </HashtagList>
    </Container>
  );
}

export default BoardSearch;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
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
  z-index: 999;
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

const AutoCompleteList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: rgb(153, 153, 153);
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  max-width: 400px;
  overflow: hidden auto;
  font-size: 14px;
  z-index: 99;
  top: 20px;
  left: 50%;
  transition: opacity 0.5s ease 0s, height 0.3s ease 0s, padding 0.1s ease 0s;
  transform: translateX(-50%);
  background-color: rgb(255, 255, 255);
  font-weight: 500;
  padding: 16px 0px 8px;
  border: 0.7px solid rgb(0, 0, 0);
  border-radius: 0px 0px 15px 15px;
`;

const AutoCompleteItem = styled.li`
  width: calc(100% - 4px);
  display: flex;
  align-items: center;
  min-height: 28px;
  color: rgb(153, 153, 153);
  margin: 0 4px;
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    background-color: rgb(238, 238, 238);
    color: rgb(0, 0, 0);
  }
`;

const HashtagList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const HashtagItem = styled.li`
  padding-left: 16px;
  margin-top: 8px;
  width: auto;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: rgb(153, 153, 153);
  cursor: pointer;
`;
