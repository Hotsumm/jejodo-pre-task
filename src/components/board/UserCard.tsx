import React from 'react';
import styled from 'styled-components';
import { User } from '../../types/user';
import { JNameBadge, ONameBadge } from '../icons';

type UserCardProps = {
  user: User;
  searchKeyword: string;
};

function UserCard({ user, searchKeyword }: UserCardProps) {
  const parts = user.nickname.split(new RegExp(`(${searchKeyword})`, 'gi'));
  return (
    <Container>
      <Wrapper>
        <Avatar>
          <img src="images/profile.png" alt="프로필 사진" />
        </Avatar>
        <UserInfo>
          <Row>
            <NickName>
              {searchKeyword ? (
                parts.map((part, index) =>
                  part === searchKeyword ? (
                    <Highlighting key={index}>{part}</Highlighting>
                  ) : (
                    <span>{part}</span>
                  )
                )
              ) : (
                <span>{user.nickname}</span>
              )}
            </NickName>
            <BuildingCount>지구家 아파트 {user.building_count}개</BuildingCount>
          </Row>
          <Row>
            <UserId>
              <BadgeIcon>
                <JNameBadge />
              </BadgeIcon>
              <Name>{user.nickname}</Name>
            </UserId>
            <UserId>
              <BadgeIcon>
                <ONameBadge />
              </BadgeIcon>
              <Name>{user.oname}</Name>
            </UserId>
          </Row>
        </UserInfo>
      </Wrapper>
    </Container>
  );
}

export default UserCard;

const Container = styled.div`
  width: 100%;
  height: 94px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

const Avatar = styled.div`
  display: block;
  margin-right: 20px;
  img {
    width: 60px;
    height: 60px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const NickName = styled.div`
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }
`;

const Highlighting = styled.span`
  background: rgba(68, 152, 242, 0.5);
`;

const BuildingCount = styled.div`
  color: #4498f2;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-left: 15px;
`;

const UserId = styled.div`
  display: flex;
  gap: 0 4px;
  :first-child {
    margin-right: 15px;
  }
`;

const BadgeIcon = styled.div`
  width: 16px;
  height: 16px;
`;

const Name = styled.span`
  font-size: 12px;
  line-height: 16px;
  margin-top: 1px;
  color: #999999;
`;
