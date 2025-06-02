import { Link, Outlet } from "react-router-dom"

export const Menu = () => {

  return (<div className="d-flex flex-col">


    <div >
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="form">  Form</Link>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="messages"> Messages </Link>
          <span className="badge bg-primary rounded-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="chat">  Chat</Link>
          <span className="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
    </div>

    <div   >
      <Outlet />
    </div>

  </div>)
}