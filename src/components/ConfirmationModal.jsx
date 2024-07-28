import React from 'react';
import { Modal, Button } from 'antd';

function ConfirmationModal({ heading, body, isVisible, onConfirm, onCancel }) {
  return (
    <Modal
      title={heading}
      visible={isVisible}
      onOk={onConfirm}
      onCancel={onCancel}
      centered
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" danger onClick={onConfirm}>
          Delete
        </Button>,
      ]}
    >
      <p>{body}</p>
    </Modal>
  );
}

export default ConfirmationModal;
