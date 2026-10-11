import React, { useState, useEffect } from 'react'; // Imports React library along with useState and useEffect hooks
import Header from './Components/Header.jsx'; // Imports the Header component from the Components folder
import Profile from './Components/Profile.jsx'; // Imports the Profile component from the Components folder
import Education from './Components/Education.jsx'; // <-- Fixed path here // Imports the Education component from the Components folder with a fixed relative path
import Skills from './Components/Skills.jsx'; // Imports the Skills component from the Components folder
import Experience from './Components/Experience.jsx'; // Imports the Experience component from the Components folder
import Projects from './Components/Projects.jsx'; // Imports the Projects component from the Components folder
import References from './Components/References.jsx'; // Imports the References component from the Components folder
import Footer from './Components/Footer.jsx'; // Imports the Footer component from the Components folder
import './App.css'; // Imports the global application stylesheet
import sidebarBg from './assets/sidebarBg.jpg'; // Imports the sidebar background image asset for Vite bundling

function App() { // Declares the main functional component App
  const [darkMode, setDarkMode] = useState(false); // Initializes darkMode state to false (light mode by default)
  const [showSkills, setShowSkills] = useState(true); // Initializes showSkills state to true (skills visible by default)

  useEffect(() => { // Runs side effects after the component mounts
    document.title = "Relebohile Duma - Professional Portfolio"; // Sets the browser tab title
  }, []); 

  return ( // Returns the JSX layout tree to be rendered onto the screen
    <div className={darkMode ? "app dark" : "app light"}> {/* Root app container div with dynamic class name switching between dark and light themes */}
      {/* Control Buttons Panel */} 
      <div className="controls"> {/* Container wrapper for all interactive control buttons */}
        <button onClick={() => setDarkMode(!darkMode)}> {/* Button that toggles the darkMode boolean state on click */}
          {darkMode ? " Light Mode" : " Dark Mode"} {/* Dynamic button text displaying theme options based on current darkMode state */}
        </button> {/* Closes the theme toggle button */}
        <button onClick={() => setShowSkills(!showSkills)}> {/* Button that toggles the showSkills boolean state on click */}
          {showSkills ? "Hide Skills" : "Show Skills"} {/* Dynamic button text to show or hide the skills component */}
        </button> {/* Closes the skills toggle button */}
        <button onClick={() => window.print()}> Print CV</button> {/* Button that triggers the browser's native print dialog window */}
      </div> 

      
      <div className="cv-container"> {/* Main wrapper container implementing the asymmetric grid layout */}
        {/* Left Sidebar Column with Conditional Background Image */} 
        <aside  // Aside element representing the left sidebar column
          className="sidebar"  // Sets the CSS class name to sidebar
          style={{  // Inline style object for dynamic styling properties
            backgroundImage: darkMode ? 'none' : `url(${sidebarBg})`  // Sets background image to none if darkMode is true, else uses the imported sidebar background photo
          }} // Closes style object
        > {/* Closes opening aside tag */}
          <Header  // Renders the Header child component
            name="Relebohile Duma"  // Passes name prop to Header
            title="Full-Stack Developer & UI Designer"  // Passes professional title prop to Header
            email="duma@gmail.com"  // Passes email prop to Header
            phone="+26662343535"  // Passes phone number prop to Header
            location="Berea, Lesotho"  // Passes location prop to Header
          /> {/* Closes Header component */}
          {showSkills && <Skills />} {/* Conditionally renders the Skills component if showSkills state is true */}
        </aside> {/* Closes aside tag */}

        {/* Right Content Area Column */} 
        <main className="main-content"> {/* Main tag acting as the right-side content container */}
          <Profile summary="Creative Full-Stack Developer with a passion for designing pixel-perfect user interfaces and building scalable web applications. Adept at bridging the gap between design and engineering." /> {/* Renders Profile component with summary prop */}
          <Education /> {/* Renders Education component */}
          <Experience /> {/* Renders Experience component */}
          <Projects /> {/* Renders Projects component */}
          <References /> {/* Renders References component */}
          <Footer name="Relebohile Duma" contact="duma@gmail.com" /> {/* Renders Footer component with name and contact props */}
        </main> {/* Closes main tag */}
      </div> {/* Closes cv-container div */}
    </div> // Closes root app div
  ); // Closes return statement
} // Closes App function component block

export default App; // Exports the App component as the default export of this file