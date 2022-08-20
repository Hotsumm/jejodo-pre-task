import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { BoardSearch, UserListTab, UserCard } from '../components/board';
import { User } from '../types/user';

function Board() {
  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch('data/user.json');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <Banner>
        <BannerPattern />
        <BannerChar src="/images/입주민_banner_char.png" alt="배너" />
      </Banner>
      <Content>
        <Box>
          <TitleWrap>
            <Title>화섬 아파트 지구家 입주민들</Title>
            <SubTitle>
              화섬 아파트에 입주한 입주민들입니다. <br />
              같이 화성에 가는날을 기다리며 화목하게 지내봐요!
            </SubTitle>
          </TitleWrap>
          <BoardSearch />
          {users ? (
            <>
              <UserListTab userCount={users.length} />
              <Border />
              <UserList>
                {users.map((user, index) => (
                  <UserCard key={index} user={user} />
                ))}
              </UserList>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Box>
      </Content>
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
  background-color: rgb(255, 255, 255);
`;

const Box = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans KR';
  font-weight: 700;
`;

const Title = styled.h1`
  padding-top: 48px;

  font-size: 40px;
  line-height: 56px;
  margin-bottom: 20px;
`;
const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const Border = styled.div`
  width: 100%;
  border-top: 1px solid rgb(0, 0, 0);
`;

const UserList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  gap: 15px 0;
`;
