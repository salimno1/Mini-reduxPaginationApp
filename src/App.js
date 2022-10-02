import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/action";
import "./App.css";
import { Flex } from "./components/flexContainer";
import UserCard from "./components/UserCard";
import Paginator from "./components/pagination";

import styled from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [initialPage, setInitialPage] = useState(1);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(initialPage));
  }, []);

  const handleFetchUser = (newPageNr) => {
    dispatch(fetchUsers(newPageNr));
  };

  const renderUsers = () => {
    if (users && Array.isArray(users.data) && users.data.length > 0) {
      const userArray = users.data.map((user) => (
        <UserCard user={user} key={user.id} />
      ));
      return (
        <>
          <Flex>{userArray}</Flex>
          <Paginator
            handleFetchUser={handleFetchUser}
            setInitialPage={setInitialPage}
            initialPage={initialPage}
          ></Paginator>
        </>
      );
    }
    return <div>We didnt find the users!</div>;
  };

  if (users.loading) {
    return <LoadingDiv>loading...............</LoadingDiv>;
  }

  return <div className="App">{renderUsers()}</div>;
}

export default App;
