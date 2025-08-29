import Header from "../componets/Header"
import Footer from "../componets/Footer"
export default function Registerpage(){
    return(
        <>
<Header/>

        <section className=" flex">
            <img src="welcome.png" alt="" className=" flex w-100 h-100" />
           <section className="text-3xl">
             <form action="border w-50"></form>
                 <label class="fullname">😀Fullname:</label>
                 <input type="text" placeholder="put in your full name" className="border rounded w-100 h-10" />

          <form action=""></form>
                <label class="email">📧Email:</label>
                <input type="email" placeholder="put in a valid email" className="border rounded w-100 h-10" />

                <form action=""></form>
                <label class="password">🔒Password:</label>
                <input type="password" placeholder="put in a correct password" className="border rounded w-100 h-10"/>

                <label class="gender">Male</label>
                <input type="radio" class />

                <label class="gender">Female</label>
                <input type="radio"/>
           </section>
    </section>
        <Footer/>
        </>
    )
}