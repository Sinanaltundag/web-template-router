import React from 'react'

const Services = () => {
  return (
    <main>
      <section className="section-subscribe dark">
        <span>Subscribe To Our Newsletter</span>
        <form action="">
          <input type="email" name="" id="" placeholder="Enter Email..." />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section className="section-middle light">
        <div className="left">
          <h3>Services</h3>
          <div className="section-about__left--opt">
            <h3>Website Design</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, voluptate.
            </p>
            <p>Pricing: $1000 - $3000</p>
          </div>
          <div className="section-about__left--opt">
            <h3>Website Maintenance</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, voluptate. Lorem ipsum dolor sit amet.
            </p>
            <p>Pricing: $250 per month</p>
          </div>
          <div className="section-about__left--opt">
            <h3>Website Hosting</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, voluptate.
            </p>
            <p>Pricing: $25 per month</p>
          </div>
          
        </div>
        <div className="right">
          <div className="about--inner dark">
            <form action="" method="get">
                <h3>Get A Quote</h3>
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" placeholder="Name"/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="text" id="name" placeholder="Email Address"/><br/>
                <label htmlFor="message">Message</label><br/>
                <textarea name="message" id="message" cols="30" rows="3" placeholder="Message"></textarea><br/>
                <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services