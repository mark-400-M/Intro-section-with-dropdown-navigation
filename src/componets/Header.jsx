import { Link } from "react-router-dom"
import { useState } from "react"
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <>
      <header className="flex justify-between w-full h-30 p-7 items-center">
        <section className=" flex mt-3 p-7 ">
          <h1 className="font text-5xl">Snap</h1>
          <nav>
            <button className="relative mt-3 p-2" onClick={() => setOpenDropdown(openDropdown === 'Features' ? null : 'Features')}>Features <span>{openDropdown === "Features" ? "▲" : "▼"}</span></button>
            {openDropdown === 'Features' && ( 
              <section className="absolute border p-1 bg-white hover:underline">
                <ul>
                  <li> 📃Todo list</li>
                  <li> 📅Carlender</li>
                  <li> 🔔Reminders</li>
                  <li> 🕐Planning</li>
                </ul>
              </section>
            )}

            <button className="relative mt-3 p-2 click " onClick={() => setOpenDropdown(openDropdown === 'Company' ? null : 'Company')}>Company <span>{openDropdown === "Company" ? "▲" : "▼"}</span></button>
          {openDropdown === 'Company' && (
            <section className="absolute left-64 p-1 flex border bg-white hover:underline">
              <ul>
                <li>🚄History</li>
                <li>👩🏽‍🤝‍👩🏻Our team</li>
                <li>🅱Blog</li>
              </ul>
            </section>
          )}

          <a href="" className=" p-5 hover:underline">careers</a>
          <a href="" className=" p-5 hover:underline">About</a>
        </nav>

      </section>

      <section className="flex gap-2 p-6">
        <nav className="">
          <Link to="/Login">Login</Link>
        </nav>
        <nav className="border rounded text-center w-19 h-9">
          <Link to="/Register" >Register</Link>
        </nav>
      </section>
    </header >
    </>
  )


} 