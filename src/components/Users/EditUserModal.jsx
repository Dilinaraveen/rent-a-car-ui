import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Select, message, Button } from "antd";

const { Option } = Select;

const EditUserModal = ({ visible, user, onClose, onUpdate, jwt }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        userRole: user.userRole,
      });
    }
  }, [user, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      //await updateUser(jwt, user.id, values); 
      onUpdate(); 
      onClose(); 
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input the user's name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input the user's email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="userRole"
          label="Role"
          rules={[{ required: true, message: "Please select the user's role!" }]}
        >
          <Select>
            <Option value="ADMIN">Admin</Option>
            <Option value="CUSTOMER">User</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
