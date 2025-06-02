import { Link, Outlet } from "react-router-dom"

export const Menu = () => {

  return (<div>
    <h1>Menu</h1>
    <div> <Link to="form">  Form</Link> </div>
    <div> <Link to="messages"> Messages </Link> </div>
    <div> <Link to="chat">  Chat</Link> </div>

    <div>
      <Outlet />
    </div>

  </div>)
}