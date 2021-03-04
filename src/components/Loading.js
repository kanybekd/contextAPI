import React from 'react'
import {Spinner} from "reactstrap"
const Loading = () => {
 return (
  <div className="loader">
      <Spinner animation="grow" />
  </div>
 )
}

export default Loading