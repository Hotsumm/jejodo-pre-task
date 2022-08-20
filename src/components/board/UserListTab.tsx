import React from 'react';
import styled from 'styled-components';
import { Filter } from '../icons';

type UserListTabProps = {
  userCount: number;
};

function UserListTab({ userCount }: UserListTabProps) {
  return (
    <Container>
      <MenuList>
        <Menu>
          입주민들
          <UserCount>{userCount}</UserCount>
        </Menu>
      </MenuList>
      <FilterIcon>
        <Filter />
      </FilterIcon>
    </Container>
  );
}

export default UserListTab;

const Container = styled.div`
  width: 100%;
  margin-top: 56px;
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
