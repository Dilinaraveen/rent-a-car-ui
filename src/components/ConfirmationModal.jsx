import React from 'react'

function ConfirmationModal({heading, body}) {
  return (
    <div className="modal-box w-3/4 md:1/2 max-w-5xl">
      
        <form method="dialog">
         <div className="border-b-[1px] pb-2">
          <h3 className="text-lg font-bold text-black">{heading}</h3>
         </div>
         <div className="text-sm text-gray-500 mt-2">
            {body}
         </div>
         <div className='flex justify-end gap-2 mt-4'>
         <button className="btn btn-md btn-outline">Cancel</button>
         <button className="btn btn-md bg-red-600 text-white">Delete</button>
         </div>
          
        </form>
      
    </div>
  )
}

export default ConfirmationModal