import { Link } from "react-router-dom"

export const Messages = () => {
  return (<div className="d-flex flex-column flex-1">
    <h1>  Messages</h1>

    <div >
      <Link to="../" >Back to Home</Link>
    </div>
  </div>
  )
}