import React, { useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import ShipSection from "./components/ShipSection"
import { useState, useEffect } from "react"
import MissionS from "./components/MissionS"
import History from "./components/History"
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useAuth } from "./context/AuthContext";

    function App(){
       const [isMenuVisible, setMenuVisible] = useState(false);
       const [selectedMission, setSelectedMission] = useState(null);
       const [isProgress, setIsProgress] = useState(false);
       const [missions, setMissions] = useState([]);
       const [elapsedTime, setElapsedTime] = useState(0);
       const [currentMode, setCurrentMode] = useState('normal_mode'); 
       const [isModeSelected, setIsModeSelected] = useState(false);
       const {currentUser} = useAuth();

       useEffect(() => {
        const saveCompletedMission = async () => {
          if (selectedMission && !isProgress) {
            const missionData = {
              ...selectedMission,
              timestamp: Date.now(),
              finalTime: elapsedTime
            };
      
            setMissions((prev) => [...prev, missionData]);
      
            if (currentUser) {
              try {
                await addDoc(collection(db, "users", currentUser.uid, "missions"), missionData);
              } catch (err) {
              }
            }
          }
        };
      
        saveCompletedMission();
      }, [isProgress, elapsedTime, currentUser]);
      
       
         // Таймер для поточної місії
         useEffect(() => {
           let missionTimer;
           
           if (isProgress) {
             setElapsedTime(0);
             missionTimer = setInterval(() => {
               setElapsedTime((prevTime) => prevTime + 1);
             }, 1000);
           } else {
             clearInterval(missionTimer);
           }
       
           return () => clearInterval(missionTimer);
         }, [isProgress]);
       
       
       const handleMissionClick = (mission) => {
        alert(`Обрано місію: ${mission.title}`);
        setSelectedMission(mission); // Зберігаємо обрану місію у стані
       }
       const handleLoginSuccess = () =>{
        setMenuVisible(true);
       }
        return (
                    <Router>
                    <div className="App">
                    <Routes>
                    <Route path="/" element={<Home onLoginSuccess={handleLoginSuccess} isMenuVisible={isMenuVisible}/> } />
                    <Route path="/ship" element={<ProtectedRoute><ShipSection currentMode={currentMode} isModeSelected={isModeSelected} setCurrentMode={setCurrentMode} setIsModeSelected={setIsModeSelected} selectedMission={selectedMission} isProgress={isProgress} isMenuVisible={isMenuVisible} setIsProgress={setIsProgress}/> </ProtectedRoute>} />
                    <Route path="/missions" element={<MissionS onMissionClick={handleMissionClick} isProgress={isProgress} isMenuVisible={isMenuVisible}/>} />
                    <Route path="/journeys" element={<ProtectedRoute><History missions={missions} setMissions={setMissions} setElapsedTime={setElapsedTime} elapsedTime={elapsedTime} selectedMission ={selectedMission} isProgress={isProgress} isMenuVisible={isMenuVisible}/></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    </Routes>
                    </div>
                    </Router>
        
             )
    }

export default App



