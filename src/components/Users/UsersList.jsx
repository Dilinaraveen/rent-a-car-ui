import { Dropdown, Menu, Space, Table, Tag, message } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetAllUsers, UpdateUserRole } from "../../services/users.service"; // Assuming updateUserRole is a function to update user role
import ConfirmationModal from "../ConfirmationModal";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const { jwt } = useSelector((state) => state.auth);

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

  const handleRoleChange = async (user, newRole) => {
    try {
      await UpdateUserRole(jwt, user.id, newRole);
      message.success("User role updated successfully.");
      fetchUsers();
    } catch (error) {
      console.error("Failed to update user role", error);
      message.error("Failed to update user role.");
    }
  };

  const handleDeleteClick = (user) => {
    setCurrentUser(user);
    setIsDeleteModalVisible(true);
  };

  const handleModalClose = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      // await deleteUser(jwt, currentUser.id);
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
                <Menu.Item
                  key={option}
                  onClick={() => handleRoleChange(record, option)}
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
                <Menu.Item
                  key="delete"
                  onClick={() => handleDeleteClick(record)}
                >
                  Delete
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
              <BsThreeDotsVertical className="cursor-pointer"/>
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
