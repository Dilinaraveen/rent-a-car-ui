import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Space, Table, Tag, message } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  GetAllBookingsAdmin,
  changeBookingStatus,
  deleteBooking,
} from "../../services/booking.service";
import { useSelector } from "react-redux";
import EditBookingModal from "./EditBookingModal";
import ConfirmationModal from "../ConfirmationModal";

const statusOptions = ["PENDING", "APPROVED", "REJECTED"];

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);

  const { userRole, jwt } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchBookings();
  }, [jwt]);

  const fetchBookings = async () => {
    try {
      const data = await GetAllBookingsAdmin(jwt);
      setBookings(data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    }
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await changeBookingStatus(jwt, bookingId, newStatus);
      message.success(
        `Booking ID ${bookingId} status updated to ${newStatus}.`
      );
      //message.success(`Booking ID ${bookingId} status updated to ${newStatus}.`);
      fetchBookings();
    } catch (error) {
      console.error("Failed to update booking status", error);
      message.error("Failed to update booking status.");
    }
  };

  const handleEditClick = (booking) => {
    setCurrentBooking(booking);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsDeleteModalVisible(false);
  };

  const handleDeleteClick = (booking) => {
    setCurrentBooking(booking);
    setIsDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteBooking(jwt, currentBooking.id);
      message.success("Booking deleted successfully.");
      fetchBookings();
      handleModalClose();
    } catch (error) {
      console.error("Failed to delete booking", error);
      message.error("Failed to delete booking.");
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
      title: "From Date",
      dataIndex: "fromDate",
      key: "fromDate",
    },
    {
      title: "To Date",
      dataIndex: "toDate",
      key: "toDate",
    },
    {
      title: "Days",
      dataIndex: "days",
      key: "days",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Pickup Location",
      dataIndex: "pickupLocation",
      key: "pickupLocation",
    },
    {
      title: "Pickup Time",
      dataIndex: "pickupTime",
      key: "pickupTime",
    },
    {
      title: "Drop Time",
      dataIndex: "dropTime",
      key: "dropTime",
    },
    {
      title: "Contact No",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Status",
      key: "bookCarStatus",
      dataIndex: "bookCarStatus",
      render: (status, record) => {
        let color =
          status === "PENDING"
            ? "volcano"
            : status === "APPROVED"
            ? "green"
            : "red";
        return (
          <Dropdown
            className="cursor-pointer"
            overlay={
              <Menu>
                {statusOptions.map((option) => (
                  <Menu.Item
                    key={option}
                    onClick={() => handleStatusChange(record.id, option)}
                  >
                    {option}
                  </Menu.Item>
                ))}
              </Menu>
            }
            trigger={["click"]}
          >
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          </Dropdown>
        );
      },
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
        dataSource={bookings.map((booking) => ({
          ...booking,
          key: booking.id,
        }))}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
      />
      {currentBooking && (
        <EditBookingModal
          visible={isModalVisible}
          booking={currentBooking}
          onClose={handleModalClose}
          onUpdate={fetchBookings}
          jwt={jwt}
        />
      )}
      {currentBooking && (
        <ConfirmationModal
          heading="Delete Booking"
          body={`Are you sure you want to delete booking ID ${currentBooking.id}?`}
          isVisible={isDeleteModalVisible}
          onConfirm={handleDeleteConfirm}
          onCancel={handleModalClose}
        />
      )}
    </div>
  );
}

export default BookingList;
