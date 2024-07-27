import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Space, Table, Tag, message } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GetAllBookingsAdmin, changeBookingStatus } from "../../services/booking.service";
import { useSelector } from "react-redux";

const statusOptions = [
    "PENDING",
    "APPROVED",
    "REJECTED",
  ];

const items = [
  {
    key: "1",
    label: "Edit",
  },
  {
    key: "2",
    label: "Delete",
  },
];

function BookingList() {
  const [bookings, setBookings] = useState([]);

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
      message.success(`Booking ID ${bookingId} status updated to ${newStatus}.`);
      //message.success(`Booking ID ${bookingId} status updated to ${newStatus}.`);
      fetchBookings(); // Refresh bookings list
    } catch (error) {
      console.error("Failed to update booking status", error);
      message.error("Failed to update booking status.");
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
        let color = status === "PENDING" ? "volcano" : status === "APPROVED" ? "green" : "red";
        return (
          <Dropdown
            className="cursor-pointer"
            overlay={
              <Menu>
                {statusOptions.map(option => (
                  <Menu.Item key={option} onClick={() => handleStatusChange(record.id, option)}>
                    {option}
                  </Menu.Item>
                ))}
              </Menu>
            }
            trigger={['click']}
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
      render: () => (
        <Space size="middle">
          <Dropdown
            menu={{
              items,
            }}
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
        dataSource={bookings.map((booking) => ({ ...booking, key: booking.id }))}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
}

export default BookingList;
