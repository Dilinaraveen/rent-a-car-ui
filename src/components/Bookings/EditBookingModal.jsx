import React, { useEffect } from "react";
import { Form, Input, Modal, message } from "antd";
import { updateBooking } from "../../services/booking.service";

const EditBookingModal = ({ visible, booking, onClose, onUpdate, jwt }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("booking",booking)
    if (booking) {
      form.setFieldsValue(booking);
    }
  }, [booking, form]);

  const handleOk = async () => {
    try {
      const values = form.getFieldsValue();
      values.carId = booking.carId;
      console.log(values);
      await updateBooking(jwt, booking.id, values);
      message.success("Booking details updated successfully.");
      onUpdate();
      onClose(); 
    } catch (error) {
      console.error("Failed to update booking", error);
      message.error("Failed to update booking details.");
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Edit Booking"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <div className="flex gap-5">
          <Form.Item name="fromDate" label="From Date">
            <Input type="date" size="large"/>
          </Form.Item>
          <Form.Item name="toDate" label="To Date">
            <Input type="date" size="large"/>
          </Form.Item>
        </div>
        <Form.Item name="pickupLocation" label="Pickup Location">
          <Input size="large"/>
        </Form.Item>
        <div className="flex gap-5">
          <Form.Item name="pickupTime" label="Pickup Time">
            <Input type="time" size="large"/>
          </Form.Item>
          <Form.Item name="dropTime" label="Drop Time">
          <Input type="time" size="large" />
          </Form.Item>
        </div>
        <Form.Item name="contactNumber" label="Contact No">
          <Input size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBookingModal;
