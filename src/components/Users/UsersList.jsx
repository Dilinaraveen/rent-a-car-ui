import { Dropdown, Menu, Space, Table, Tag, message } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetAllUsers } from "../../services/users.service";
import EditUserModal from "./EditUserModal";
import ConfirmationModal from "../ConfirmationModal";

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

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsDeleteModalVisible(false);
  };

  const handleDeleteClick = (user) => {
    setCurrentUser(user);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      //await deleteUser(jwt, currentUser.id);
      message.success("User deleted successfully.");
      fetchUsers();
      handleModalClose();
    } catch (error) {
      console.error("Failed to delete user", error);
      message.error("Failed to delete user.");
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
                <Menu.Item key={option} onClick={() => {}}>
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
                <Menu.Item key="edit" onClick={() => handleEditClick(record)}>
                  Edit
                </Menu.Item>
                <Menu.Item key="delete" onClick={() => {}}>
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
      {currentUser && (
        <EditUserModal
          visible={isModalVisible}
          user={currentUser}
          onClose={handleModalClose}
          onUpdate={fetchUsers}
          jwt={jwt}
        />
      )}
      {currentUser && (
        <ConfirmationModal
          heading="Delete User"
          body={`Are you sure you want to delete user ID ${currentUser.id}?`}
          isVisible={isDeleteModalVisible}
          onConfirm={handleDeleteConfirm}
          onCancel={handleModalClose}
        />
      )}
    </div>
  );
}

export default UsersList;
