
import { useState } from "react";

export default function Crew() {

  const [currentPage, setCurrentPage] = useState('page1');

  const openPage1 = () => setCurrentPage('page1');
  const openPage2 = () => setCurrentPage('page2');
  const openPage3 = () => setCurrentPage('page3');
  const openPage4 = () => setCurrentPage('page4');


  function Page1() {
    return (
      <div>
        <div className="crew">
          <div className="word"></div>
          <h2><span>02</span> Meet your crew</h2>
          <img src="crew.png" alt="" />
          <h6></h6>

          <div className="team">
            <button onClick={openPage1} className={`button ${currentPage === 'page1' ? 'active' : ''}`}></button>
            <button onClick={openPage2}></button>
            <button onClick={openPage3}></button>
            <button onClick={openPage4}></button>
          </div>

          <h3>Commander </h3>
          <h1>Douglas Hurley</h1>
          <p className="pen">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>

        <div className="crewTeam">
          <h2><span>02 </span>Meet your crew</h2>
          <h3>Commander </h3>
          <h1>Douglas Hurley</h1>
          <p className="pen">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>

          <div className="team">
            <button onClick={openPage1} className={`button ${currentPage === 'page1' ? 'active' : ''}`}></button>
            <button onClick={openPage2}></button>
            <button onClick={openPage3}></button>
            <button onClick={openPage4}></button>
          </div>

          <img className="man2" src="4.png" alt="" />
          <img className="man" src="man.png" alt="" />
        </div>
      </div>
    );
  }
  
  function Page2() {
    return (
      <div>
        <div className="crew">
          <h2><span>02 </span>Meet your crew</h2>
          <img src="crew2.png" alt="" />
          <h6></h6>

          <div className="team">
            <button onClick={openPage1}></button>
            <button onClick={openPage2} className={`button ${currentPage === 'page2' ? 'active' : ''}`}></button>
            <button onClick={openPage3}></button>
            <button onClick={openPage4}></button>
          </div>

          <h3>Mission Specialist </h3>
          <h1>MARK SHUTTLEWORTH</h1>
          <p className="pilot">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        </div>

        <div className="crewTeam">
          <h2><span>02 </span>Meet your crew</h2>
          <h3>Mission Specialist </h3>
          <h1>MARK SHUTTLEWORTH</h1>
          <p className="pilot">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>

          <div className="team">
            <button onClick={openPage1}></button>
            <button onClick={openPage2} className={`button ${currentPage === 'page2' ? 'active' : ''}`}></button>
            <button onClick={openPage3}></button>
            <button onClick={openPage4}></button>
          </div>

          <img className="man2" src="5.png" alt="" />
          <img className="man3" src="man2.png" alt="" />

        </div>
      </div>
    );
  }
  
  function Page3() {
    return (
    <div>
      <div className="crew">
        <h2><span>02 </span>Meet your crew</h2>
        <img src="crew3.png" alt="" />
        <h6></h6>

        <div className="team">
          <button onClick={openPage1}></button>
          <button onClick={openPage2}></button>
          <button onClick={openPage3} className={`button ${currentPage === 'page3' ? 'active' : ''}`}></button>
          <button onClick={openPage4}></button>
        </div>

        <h3>PILOT</h3>
        <h1>Victor Glover</h1>
        <p className="pilot2">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
      </div>

      <div className="crewTeam">
        <h2><span>02 </span>Meet your crew</h2>
        <h3>PILOT</h3>
        <h1>Victor Glover</h1>
        <p className="pilot2">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>

        <div className="team">
          <button onClick={openPage1}></button>
          <button onClick={openPage2}></button>
          <button onClick={openPage3} className={`button ${currentPage === 'page3' ? 'active' : ''}`}></button>
          <button onClick={openPage4}></button>
        </div>

        <img className="man2" src="6.png" alt="" />
        <img className="man3" src="man3.png" alt="" />
      </div>
    </div>
    );
  }

  function Page4() {
    return (
      <div>
        <div className="crew">
          <h2><span>02 </span>Meet your crew</h2>
          <img src="crew4.png" alt="" />
          <h6></h6>

          <div className="team">
            <button onClick={openPage1}></button>
            <button onClick={openPage2}></button>
            <button onClick={openPage3}></button>
            <button onClick={openPage4} className={`button ${currentPage === 'page4' ? 'active' : ''}`}></button>
          </div>

          <h3>Flight Engineer</h3>
          <h1>Anousheh Ansari</h1>
          <p className="pilot">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
        </div>

        <div className="crewTeam">
          <h2><span>02 </span>Meet your crew</h2>
          <h3>Flight Engineer</h3>
          <h1>Anousheh Ansari</h1>
          <p className="pilot">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>

          <div className="team">
            <button onClick={openPage1}></button>
            <button onClick={openPage2}></button>
            <button onClick={openPage3}></button>
            <button onClick={openPage4} className={`button ${currentPage === 'page4' ? 'active' : ''}`}></button>
          </div>

          <img className="man2" src="7.png" alt="" />
          <img className="man4" src="woman.png" alt="" />
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