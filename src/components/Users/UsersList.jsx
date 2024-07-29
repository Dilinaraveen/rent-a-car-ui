import { Dropdown, Menu, Space, Table, Tag } from 'antd';
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GetAllUsers } from '../../services/users.service';

function UsersList() {
    const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const { jwt, userRole } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchUsers();
  }, [jwt]);

  const fetchUsers = async () => {
    try {
      const data = await GetAllUsers(jwt);
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

    const columns = [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Role",
          key: "userRole",
          dataIndex: "userRole",
          render: (role, record) => (
            <Dropdown
              className="cursor-pointer"
              overlay={
                <Menu>
                  {["ADMIN", "USER"].map((option) => (
                    <Menu.Item
                      key={option}
                      onClick={() => {}}
                    >
                      {option}
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Tag>{role}</Tag>
            </Dropdown>
          ),
        },
        {
          title: "",
          key: "operation",
          render: (text, record) => (
            <Space size="middle">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="edit" onClick={() => {}}>
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      key="delete"
                      onClick={() => {}}
                    >
                      Delete
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <a>
                  <BsThreeDotsVertical />
                </a>
              </Dropdown>
            </Space>
          ),
        },
      ];
  return (
    <div>
        <Table
        columns={columns}
        dataSource={users.map((user) => ({
          ...user,
          key: user.id,
        }))}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
      />
    </div>
  )
}

export default UsersList