import React from "react";
import htmlIcon from "../img/logo_html.png";
import cssIcon from "../img/logo_css.png";
import logoIcon from "../img/logo_brush.png";
import Card from "../components/Card";

const cardData = [
    { id: "1", title: "HTML5 Markup", imgSrc: htmlIcon, sum: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime eveniet, quaerat quisquam laboriosam neque blanditiis? Provident, ullam?", detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem ipsam recusandae. Delectus, quibusdam sint laborum animi eaque maxime deserunt tempore consequuntur id sit possimus quas totam pariatur! Placeat praesentium culpa excepturi voluptas, consequatur quibusdam adipisci aperiam magni aut exercitationem ad vel pariatur doloribus, voluptatibus temporibus quis ea debitis repellendus!"},
    { id: "2", title: "CSS3 Styling", imgSrc: cssIcon, sum: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime eveniet, quaerat quisquam laboriosam neque blanditiis? Provident, ullam?",detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem ipsam recusandae. Delectus, quibusdam sint laborum animi eaque maxime deserunt tempore consequuntur id sit possimus quas totam pariatur! Placeat praesentium culpa excepturi voluptas, consequatur quibusdam adipisci aperiam magni aut exercitationem ad vel pariatur doloribus, voluptatibus temporibus quis ea debitis repellendus!" },
    { id: "3", title: "Graphic Design", imgSrc: logoIcon, sum: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime eveniet, quaerat quisquam laboriosam neque blanditiis? Provident, ullam?", detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem ipsam recusandae. Delectus, quibusdam sint laborum animi eaque maxime deserunt tempore consequuntur id sit possimus quas totam pariatur! Placeat praesentium culpa excepturi voluptas, consequatur quibusdam adipisci aperiam magni aut exercitationem ad vel pariatur doloribus, voluptatibus temporibus quis ea debitis repellendus!" }
];

const Home = () => {
  return (
    <main>
      <section className="section-top">
        <h2>Professional Web Design</h2>
        <p className="section-top__p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quas
          ipsum provident quia corrupti itaque suscipit sit modi aliquid
        </p>
      </section>
      <section className="section-subscribe dark">
        <span>Subscribe To Our Newsletter</span>
        <form action="">
          <input type="email" name="" id="" placeholder="Enter Email..." />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section className="section-bottom">
        {cardData.map(card=> <Card key={card.id} card={card}/>)}
        
      </section>
    </main>
  );
};

export default Home;
