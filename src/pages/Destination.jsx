
import { useState } from "react";

export default function Destination() {
  
  const [currentPage, setCurrentPage] = useState('page1');
  const openPage1 = () => setCurrentPage('page1');
  const openPage2 = () => setCurrentPage('page2');
  const openPage3 = () => setCurrentPage('page3');
  const openPage4 = () => setCurrentPage('page4');


  function Page1() {
    return (
      <div>
        <div className="destination">
          <h2><span>01 </span>Pick your destination</h2>
          <img src="moon.jpg" alt="" />
        
          <div className="moon">
            <button onClick={openPage1} className={`button ${currentPage === 'page1' ? 'active' : ''}`}>MOON</button>
            <button onClick={openPage2}>MARS</button>
            <button onClick={openPage3}>EUROPA</button>
            <button onClick={openPage4}>TITAN</button>
          </div>

          <h1>MOON</h1>
          <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <h6></h6>

          <h3>AVG. DISTANCE</h3>
          <h4>384,400 KM</h4>
          <h3>EST. TRAVEL TIME</h3>
          <h4>3 DAYS</h4>
        </div>

        <div className="destination2">
          <h2><span>01 </span>Pick your destination</h2>
          <img src="8.png" alt="" />

          <div className="moon">
            <button onClick={openPage1} className={`button ${currentPage === 'page1' ? 'active' : ''}`}>MOON</button>
            <button onClick={openPage2}>MARS</button>
            <button onClick={openPage3}>EUROPA</button>
            <button onClick={openPage4}>TITAN</button>
          </div>

          <h1>MOON</h1>
          <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <h6></h6>
        
          <ul className="venus">
            <h3>AVG. DISTANCE</h3>
            <h4>384,400 KM</h4>
            <h3>EST. TRAVEL TIME</h3>
            <h4>3 DAYS</h4>
          </ul>

          <ul className="plato">
            <li>
              <h3>AVG. DISTANCE</h3>
              <h4>384,400 KM</h4>
            </li>
            <li>
              <h3>EST. TRAVEL TIME</h3>
              <h4>3 DAYS</h4>
            </li>
          </ul>

        </div>
      </div>
      
    );
  }
  
  function Page2() {
    return (
      <div>
        <div className="destination">
          <h2><span>01 </span>Pick your destination</h2>
          <img src="mars.jpg" alt="" />

          <div className="moon">
            <button onClick={openPage1}>MOON</button>
            <button onClick={openPage2} className={`button ${currentPage === 'page2' ? 'active' : ''}`}>MARS</button>
            <button onClick={openPage3}>EUROPA</button>
            <button onClick={openPage4}>TITAN</button>
          </div>

          <h1>MARS</h1>
          <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
          <h6></h6>

          <h3>AVG. DISTANCE</h3>
          <h4>225 MIL. KM</h4>
          <h3>EST. TRAVEL TIME</h3>
          <h4>9 MONTHS</h4>
        </div>

        <div className="destination2">
          <h2><span>01 </span>Pick your destination</h2>
          <img src="mars.jpg" alt="" />
      
          <div className="moon">
            <button onClick={openPage1}>MOON</button>
            <button onClick={openPage2} className={`button ${currentPage === 'page2' ? 'active' : ''}`}>MARS</button>
            <button onClick={openPage3}>EUROPA</button>
            <button onClick={openPage4}>TITAN</button>
          </div>

          <h1>MARS</h1>
          <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
          <h6></h6>

          <ul className="venus">
            <h3>AVG. DISTANCE</h3>
            <h4>225 MIL. KM</h4>
            <h3>EST. TRAVEL TIME</h3>
            <h4>9 MONTHS</h4>
          </ul>

          <ul className="plato">
            <li>
              <h3>AVG. DISTANCE</h3>
              <h4>225 MIL. KM</h4>
            </li>
            <li>
              <h3>EST. TRAVEL TIME</h3>
              <h4>9 MONTHS</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  function Page3() {
    return (
      <div>
        <div className="destination">
          <h2 className="europa"><span>01 </span>Pick your destination</h2>
          <img src="europa.png" alt="" />

          <div className="moon">
            <button onClick={openPage1}>MOON</button>
            <button onClick={openPage2}>MARS</button>
            <button onClick={openPage3} className={`button ${currentPage === 'page3' ? 'active' : ''}`}>EUROPA</button>
            <button onClick={openPage4}>TITAN</button>
          </div>

          <h1>EUROPA</h1>
          <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
          <h6></h6>

          <h3>AVG. DISTANCE</h3>
          <h4>628 MIL. KM</h4>
          <h3>EST. TRAVEL TIME</h3>
          <h4>3 YEARS</h4>
        </div>

        <div className="destination2">
          <h2 className="europa"><span>01 </span>Pick your destination</h2>
          <img src="9.png" alt="" />

          <div className="moon">
            <button onClick={openPage1}>MOON</button>
            <button onClick={openPage2}>MARS</button>
            <button onClick={openPage3} className={`button ${currentPage === 'page3' ? 'active' : ''}`}>EUROPA</button>
            <button onClick={openPage4}>TITAN</button>
          </div>

          <h1>EUROPA</h1>
          <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
          <h6></h6>

          <ul className="venus">
            <h3>AVG. DISTANCE</h3>
            <h4>628 MIL. KM</h4>
            <h3>EST. TRAVEL TIME</h3>
            <h4>3 YEARS</h4>
          </ul>

          <ul className="plato">
            <li>
              <h3>AVG. DISTANCE</h3>
              <h4>628 MIL. KM</h4>
            </li>
            <li>
              <h3>EST. TRAVEL TIME</h3>
              <h4>3 YEARS</h4>
            </li>
          </ul>

        </div>
      </div>
    );
  }

  function Page4() {
    return (
      <div>
        <div className="destination">
          <h2><span>01 </span>Pick your destination</h2>
          <img src="titan.png" alt="" />
      
          <div className="moon">
            <button onClick={openPage1}>MOON</button>
            <button onClick={openPage2}>MARS</button>
            <button onClick={openPage3}>EUROPA</button>
            <button onClick={openPage4} className={`button ${currentPage === 'page4' ? 'active' : ''}`}>TITAN</button>
          </div>

          <h1>TITAN</h1>
          <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
          <h6></h6>

          <h3>AVG. DISTANCE</h3>
          <h4>1.6 BIL. KM</h4>
          <h3>EST. TRAVEL TIME</h3>
          <h4>7 YEARS</h4>
        </div>

        <div className="destination2">
          <h2><span>01 </span>Pick your destination</h2>
          <img src="10.png" alt="" />

          <div className="moon">
            <button onClick={openPage1}>MOON</button>
            <button onClick={openPage2}>MARS</button>
            <button onClick={openPage3}>EUROPA</button>
            <button onClick={openPage4} className={`button ${currentPage === 'page4' ? 'active' : ''}`}>TITAN</button>
          </div>

          <h1>TITAN</h1>
          <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
          <h6></h6>

          <ul className="venus">
            <h3>AVG. DISTANCE</h3>
            <h4>1.6 BIL. KM</h4>
            <h3>EST. TRAVEL TIME</h3>
            <h4>7 YEARS</h4>
          </ul>

          <ul className="plato">
            <li>
              <h3>AVG. DISTANCE</h3>
              <h4>1.6 BIL. KM</h4>
            </li>
            <li>
              <h3>EST. TRAVEL TIME</h3>
              <h4>7 YEARS</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }



  return (
    
    <div>
      {currentPage === 'page1' && <Page1 openPage2={openPage2} openPage3={openPage3} openPage4={openPage4}  />}
      {currentPage === 'page2' && <Page2 openPage1={openPage1} openPage3={openPage3} openPage4={openPage4} />}
      {currentPage === 'page3' && <Page3 openPage1={openPage1} openPage2={openPage2} openPage4={openPage4} />}
      {currentPage === 'page4' && <Page4 openPage1={openPage1} openPage2={openPage2} openPage3={openPage3}/>}
    </div>


  );
}