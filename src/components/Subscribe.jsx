import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
const [subscribed, setSubscribed] = useState([])
    const handleSubmit = (e)=> {
        e.preventDefault();
        const {  email} = e.target.elements;
        
        console.log(subscribed)
        //! ternary but hard to read with setSubscribed func
      /*   email.value?!subscribed.includes(email.value)? (toast(` Your email ${  email.value  } has been subscribed.`)):toast(` Your email ${  email.value  } is registered before.`):toast(` Please enter your email`); */
        
        if (email.value) {
            if (subscribed.includes(email.value)) {
                toast(` Your email ${  email.value  } is registered before.`)
            } else {
                toast(` Your email ${  email.value  } has been subscribed.`)
                setSubscribed(subscribed.concat(email.value))
            }
        } else {
            toast(` Please enter your email`)
        }
}

  return (
    <section className="section-subscribe dark" >
    <span>Subscribe To Our Newsletter</span>
    <form onSubmit={handleSubmit} >
      <input type="email" name="email" id="" placeholder="Enter Email..." />
      <button type="submit" >Subscribe</button>
    <ToastContainer />
    </form>
  </section>
  )
}

export default Subscribe