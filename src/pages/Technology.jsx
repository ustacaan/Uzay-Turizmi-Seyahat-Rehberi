
import { useState } from "react";

export default function Technology() {

  const [currentPage, setCurrentPage] = useState('page1');

  const openPage1 = () => setCurrentPage('page1');
  const openPage2 = () => setCurrentPage('page2');
  const openPage3 = () => setCurrentPage('page3');

  function Page1() {
    return (
      <div className="content">

        <h2><span>03 </span>SPACE LAUNCH 101</h2>
        <img className="rocket2" src="1.png" alt="" />
        <img className="rocket" src="rocket.png" alt="" />

        <div className="sun">
          <button onClick={openPage1} className={`button ${currentPage === 'page1' ? 'active' : ''}`}>1</button>
          <button onClick={openPage2}>2</button>
          <button onClick={openPage3}>3</button>
        </div>

          <h3>THE TERMINOLOGY…</h3>
          <h1>LAUNCH VEHICLE</h1>
          <p className="info">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
      </div>
    );
  }
  
  function Page2() {
    return (
      <div className="content">

        <h2><span>03 </span>SPACE LAUNCH 101</h2>
        <img className="rocket2" src="2.png" alt="" />
        <img className="rocket" src="rocket3.png" alt="" />


        <div className="sun">
          <button onClick={openPage1}>1</button>
          <button onClick={openPage2} className={`button ${currentPage === 'page2' ? 'active' : ''}`}>2</button>
          <button onClick={openPage3}>3</button>
        </div>

        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACEPORT</h1>
        <p className="info2">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
    </div>
    );
  }
  
  function Page3() {
    return (
      <div className="content">

        <h2><span>03 </span>SPACE LAUNCH 101</h2>
        <img className="rocket2" src="3.png" alt="" />
        <img className="rocket" src="rocket4.png" alt="" />


        <div className="sun">
          <button onClick={openPage1}>1</button>
          <button onClick={openPage2}>2</button>
          <button onClick={openPage3} className={`button ${currentPage === 'page3' ? 'active' : ''}`}>3</button>
        </div>

        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACE CAPSULE</h1>
        <p className="info2">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
    </div>
    );
  }



  return (
    
    <div>
      {currentPage === 'page1' && <Page1 openPage2={openPage2} openPage3={openPage3} />}
      {currentPage === 'page2' && <Page2 openPage1={openPage1} openPage3={openPage3} />}
      {currentPage === 'page3' && <Page3 openPage1={openPage1} openPage2={openPage2} />}
    </div>


  );
}