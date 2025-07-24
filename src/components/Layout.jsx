import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


export default function Layout() {
  return (
      <div className="flex flex-col h-dvh">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
  )
}