import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const AvatarWrapper = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bg || "red"};
  padding-top: 20px;
  margin: 5px;
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;
const Name = styled.h1`
  margin-top: 25px;
  font-weight: 700;
  font-size: 12px;
`;
const Link = styled.a`
  margin-top: 5px;
  font-size: 12px;
  text-decoration: none;
  color: rgb(91, 91, 91);
`;

const UserCard = ({ user }) => {
  return (
    <ProfileCard
      bg={user.id % 2 == 0 ? "rgb(240, 240, 240)" : "rgb(240, 240, 235)"}
    >
      <AvatarWrapper src={user.avatar} />
      <Name>
        {user.first_name} {"  "}
        {user.last_name}
      </Name>
      <Link href={`mailto:${user.email}`}>Contact</Link>
    </ProfileCard>
  );
};
export default UserCard;
