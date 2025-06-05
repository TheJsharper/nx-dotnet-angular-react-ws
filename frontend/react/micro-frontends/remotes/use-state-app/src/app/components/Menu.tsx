import { Link, Outlet } from "react-router-dom"

export const Menu = () => {

  return (<div className="d-flex flex-col">


    <div >
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="form">  Form</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="messages"> Messages </Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="chat">  Chat</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="basic">  Basic UseState</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="basic-st">  Basic UseState Strong Typed</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="counter"> Simple Counter</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="text"> Simple Text</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="simple-counter-update"> Simple Counter Update</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="simple-form-object"> Simple Form Object</Link>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="simple-form-nested-object"> Simple Form Nesteed Object</Link>
        </li>
      </ul>
    </div>

    <div   >
      <Outlet />
    </div>

  </div>)
}