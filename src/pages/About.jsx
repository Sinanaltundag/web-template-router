import React from 'react'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <main>
     <Subscribe/>
      <section className="section-middle light">
        <div className="left">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, voluptatem nisi at cupiditate accusantium fuga nesciunt
            nostrum asperiores facere, molestias dolor, et libero dolorum iste
            molestiae vel adipisci laudantium voluptas!
          </p><div className="about--inner dark"><p className="section-about__p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione in
            accusamus nulla repellendus velit, ipsa laboriosam nesciunt animi
            aut modi adipisci consequatur atque explicabo consequuntur est neque
            deleniti quo autem eius architecto voluptate. Nobis quam aut, omnis
            laborum fugit illo? Natus voluptatem minima nisi? Repellat placeat
            quasi iure atque facilis.
          </p></div>
          
        </div>
        <div className="right">
          <div className="about--inner dark"><h3>What We Do</h3>
          <p className="section-about__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic
            itaque velit odit magni veritatis fugit dolorum sequi nihil quos
            similique totam, iusto ratione unde, praesentium atque, minima porro
            maxime.
          </p></div>  
        </div>
      </section>
    </main>
  )
}

export default About