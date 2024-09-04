import React from 'react'

import { useParams } from 'react-router-dom'
//we can use paramter

function User() {

    //creating our custom hooks
        //{      }
    const {userid} = useParams()

  return (

            // passed in the parameter{userid}
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User