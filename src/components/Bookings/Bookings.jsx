import React from 'react'
import BookingList from './BookingList'

function Bookings() {
  return (
    <div className='p-5'>
      <h1 className="text-2xl font-bold mb-4">Review All Bookings</h1>
      <BookingList />
    </div>
  )
}

export default Bookings