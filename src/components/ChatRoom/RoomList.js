import React from 'react';
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from 'src/Context/AppProvider';
import { useNavigate } from 'react-router-dom';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: #1890ff !important;
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleSelectedRoomId = (id) => {
    navigate('/chat');
    setSelectedRoomId(id);
  };

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.length &&
          rooms.map((room) => (
            <LinkStyled key={room.id} onClick={() => handleSelectedRoomId(room.id)}>
              {room.name}
            </LinkStyled>
          ))}
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room" onClick={handleAddRoom}>
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
