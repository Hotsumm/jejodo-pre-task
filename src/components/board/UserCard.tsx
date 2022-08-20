import React from 'react';
import styled from 'styled-components';
import { User } from '../../types/user';
import { JNameBadge, ONameBadge } from '../icons';

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <Container>
      <Wrapper>
        <Avatar>
          <img src="images/profile.png" alt="프로필 사진" />
        </Avatar>
        <UserInfo>
          <Row>
            <NickName>{user.nickname}</NickName>
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
  width: 60px;
  height: 60px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const NickName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-right: 15px;
`;

const BuildingCount = styled.div`
  color: #4498f2;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const UserId = styled.div`
  display: flex;
  gap: 0 4px;
  & + & {
    margin-left: 15px;
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
