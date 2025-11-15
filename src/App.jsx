import person from "./assets/images/person.svg";
import mexico from "./assets/images/mexico.svg";
import columbia from "./assets/images/colombia.svg";
import spain from "./assets/images/spain.svg";
import argentina from "./assets/images/argentina.svg";
const App = () => {
  return (
    <div className="body">
      <div className="container">
        <header>
          <nav>
            <div className="header-list-Wrapper">
              <ul className="header-list">
                <a href="#" className="link-style">
                  <li className="list-none">Home</li>
                </a>
                <a href="#" className="link-style">
                  <li className="list-none">Countries</li>
                </a>
                <a href="#" className="link-style">
                  <li className="list-none">Duration</li>
                </a>
                <a href="#" className="link-style">
                  <li className="list-none">Examples</li>
                </a>
              </ul>
              <a href="#" className="header-btn link-style">
                Get started
              </a>
            </div>
          </nav>
        </header>
        <section className="hero">
          <div className="banner">
            <div className="hero-context">
              <h2 className="hero-title">
                Learn Spanish Online from Native Teachers
              </h2>
              <div className="hero-text">
                Grow your confidence in Spanish conversation, grammar and
                reading with live, online classes, professional teachers and a
                schedule that suits you.
              </div>
              <a href="#" className="header-btn link-style">
                Get started
              </a>
            </div>
            <div className="hero-pic-section">
              <img src={person} alt="hero-pic" className="hero-pic" />
            </div>
          </div>
        </section>
        <section className="travel">
          <h2 className="travel-title">Truly Experience Foreign Countries</h2>
          <p className="travel-text">
            Travel around the world and meet millions of spanish speaking
            perople
          </p>
          <ul>
            <div className="countries">
              <li className="list-none">
                <div className="country --country_1">
                  <img src={mexico} alt="mexico" />
                  <div className="country-info">
                    <div className="country-title">Mexico</div>
                    <div className="country-text">+130 million speakers</div>
                  </div>
                </div>
              </li>
              <li className="list-none">
                <div className="country --country_2">
                  <img src={columbia} alt="columbia" />
                  <div className="country-info">
                    <div className="country-title">Colombia</div>
                    <div className="country-text">+50 million speakers </div>
                  </div>
                </div>
              </li>
              <li className="list-none">
                <div className="country --country_3">
                  <img src={spain} alt="spain" />
                  <div className="country-info">
                    <div className="country-title">Spain</div>
                    <div className="country-text">+47 million speakers </div>
                  </div>
                </div>
              </li>
              <li className="list-none">
                <div className="country --country_4">
                  <img src={argentina} alt="argentina" />
                  <div className="country-info">
                    <div className="country-title">Argentina</div>
                    <div className="country-text">+45 million speakers </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </section>
      </div>
      <section className="ready">
        <div className="container">
          <div className="ready-row">
            <div className="ready-title">
              Ready to start learning Spanish? Lets try some!
            </div>
            <div className="btn --ready-btn">
              <a href="#" className="header-btn link-style">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="long">
          <h2 className="long-title">
            How long does it take to learn Spanish?
          </h2>
          <p className="long-text">
            People often want to know how to learn Spanish fast or are looking
            for the easiest way to learn Spanish. The US Foreign Service
            Institute suggests it takes{" "}
            <a href="#" className="phrase-link">
              600-750 hours
            </a>{" "}
            for an English-speaker to learn Spanish fluently. Remember, how long
            it takes to learn Spanish really depends on you. Your time
            commitment, learning plan, materials, and other resources are all
            important. Students without a learning plan can be confused about
            what to study and lack awareness of whether they’re improving. A
            lack of a study plan is often why students reach a basic level of
            Spanish and then plateau or stop studying altogether. Your materials
            and resources will also be a big factor. With an effective
            curriculum of lessons and a native-speaking teacher, your Spanish
            learning will not only be quicker but more comprehensive. Some
            people also have the resource of an immersive environment: If you
            live in a Spanish-speaking country you’re likely to learn faster.
            Finally, your time commitment will determine how quickly you learn.
            A student that can learn 8 hours per week will learn much faster
            than a student who studies just 1 hour per week.
          </p>
        </section>

        <section className="phrases-sec">
          <h2 className="phrases-title">Common Spanish phrases</h2>
          <p className="phrases-text">
            There are some common Spanish phrases that can help you go from zero
            to 60 in your speaking ability.
          </p>
          <div className="phrases">
            <ul>
              <li>
                How are you?{" "}
                <a href="#" className="phrase-link">
                  ¿Qué tal?
                </a>
              </li>
              <li>
                This can also be used for “how is [something]?” For example,
                “how was your weekend?” ¿Qué tal tu fin de semana?
              </li>
              <li>Nice to meet you. Mucho gusto.</li>
              <li>Where are you from? ¿De dónde eres?</li>
              <li>I’m from… Soy de…</li>
              <li>Have a good one! Que le vaya bien.</li>
              <li>
                You can say this whenever you leave a shop or a restaurant
              </li>
              <li>Excuse me. Disculpe.</li>
              <li>
                This is for calling the attention of someone like a waiter.
              </li>
            </ul>
          </div>
        </section>
        <footer>© 2025 Lingo - All Rights Reserved</footer>
      </div>
    </div>
  );
};
export default App;
