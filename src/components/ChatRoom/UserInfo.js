import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';

import { auth } from 'src/firebase/config';
import { AuthContext } from 'src/Context/AuthProvider';
import { AppContext } from 'src/Context/AppProvider';
import { useNavigate } from 'react-router-dom';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
  const navigate = useNavigate();
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  const { clearState } = React.useContext(AppContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar onClick={() => navigate('/user/info')} src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
          // clear state in App Provider when logout
          clearState();
          auth.signOut();
        }}
      >
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}
