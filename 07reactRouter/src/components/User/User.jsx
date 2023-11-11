import React from 'react'
import { useParams } from 'react-router-dom'

// we are using Useparams method becoz we want to access the id from url 
function User() {
    const {id} = useParams();
    return (
    <div>
      User:{id}
    </div>
  )
}

export default User
