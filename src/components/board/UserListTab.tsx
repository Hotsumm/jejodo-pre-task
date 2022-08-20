import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Filter } from '../icons';

type UserListTabProps = {
  userCount: number;
  filterUserList: (filter: string) => void;
};

const filterList: string[] = ['전체', '5개 이상', '4개', '3개', '2개', '1개'];

function UserListTab({ userCount, filterUserList }: UserListTabProps) {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<number | null>(null);

  function handleFilter() {
    setIsFilter((prev: boolean) => !prev);
  }

  function handleSelectFilter(index: number) {
    if (currentFilter === index) return;
    filterUserList(filterList[index]);
    setCurrentFilter(index);
  }
  return (
    <Container>
      <MenuTab>
        <MenuList>
          <Menu>
            입주민들
            <UserCount>{userCount}</UserCount>
          </Menu>
        </MenuList>
        <FilterIcon onClick={handleFilter}>
          <Filter />
        </FilterIcon>
      </MenuTab>
      <Border />
      {isFilter && (
        <FilterWrap>
          <Title>보유 아파트</Title>
          <FilterList>
            {filterList.map((filter, index) => (
              <FilterItem
                key={filter}
                isSelected={currentFilter === index}
                onClick={() => handleSelectFilter(index)}
              >
                {filter}
              </FilterItem>
            ))}
          </FilterList>
        </FilterWrap>
      )}
    </Container>
  );
}

export default UserListTab;

const Container = styled.div`
  width: 100%;
  margin-top: 56px;
`;

const Wrapper = styled.div``;

const MenuTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const MenuList = styled.div`
  min-height: 32px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
`;

const Menu = styled.button`
  word-break: keep-all;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  background: #000000;
  color: white;
  border: 1px solid rgb(0, 0, 0);
  border-image: initial;
  border-bottom: none;
  width: fit-content;
  height: 32px;
  padding: 6px 16px;
  border-radius: 10px 10px 0px 0px;
`;

const UserCount = styled.span`
  color: #4498f2;
  margin-left: 5px;
`;

const FilterIcon = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 0.7px solid #000000;
  border-radius: 5px;
  :hover {
    background: black;
    svg {
      filter: invert(100%);
    }
  }
  svg {
    width: 15px;
    height: 15px;
  }
`;

const FilterWrap = styled.div`
  padding-top: 25px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-right: 25px;
`;

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 25px;
`;

const FilterItem = styled.li<{ isSelected: boolean }>`
  color: #999999;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  padding: 5px 10px;
  :hover {
    color: black;
    font-weight: 700;
  }
  ${(props) =>
    props.isSelected &&
    css`
      color: white;
      background: #000000;
      border-radius: 20px;
      font-weight: 700;
      :hover {
        color: white;
      }
    `};
`;

const Border = styled.div`
  width: 100%;
  border-top: 1px solid rgb(0, 0, 0);
`;
