
import './App.css';
import {useState} from "react"
function App() {
let obj = {
  "Score":60,
  "Wickets":2,
  "Overs":5.2
}

const [Score,setSchore] = useState(obj.Score);
const [Wickets,setWickets] = useState(obj.Wickets);
const [Overs,setOvers] = useState(obj.Overs);


  return (
<div className="App">
<header> 
<h1 className="header">India</h1>
</header>
<main>
 <div className="Schore">
 <span>Wickets:</span>
 <h1 className="scoreCount">50</h1>
 </div>
 <div className="Wickets">
 <span>Wickets:</span>
 <h1 className="WicketsCount">2</h1>
 </div>
 <div className="overs">
 <span>Overs:</span>
 <h1 className="WicketsCount">50</h1>
 </div>
 
 <div className = "buttonsDiv">
 <h1>Add Score</h1>
 <button className="btn1" onclick ={()=>{
   setScore(Score+1)
 }}>Add 1 </button>
 <button calssName = "btn2" onClick={()=>{
   setScore(Score+4)
 }}>Add 4</button>
 <button className = "btn3" onClick={()=>{
   setScore(Score+6)
 }}>Add 6</button>
 </div>
 <div className = "buttonDiv2">
  <h1>Add Wickets</h1>
 <button className="wicketbtn1" onClick={()=>{
   setWickets(Wickets+1)
 }} >Add 1</button>
 
 </div>
 <div className = "Overs">
 <h1>Add Overs</h1>
 <button className="Oversbtn1" onClick={()=>{
  setOvers(Overs+1)
}} ></button></div>
 </main>
</div>



  )}

  //function CricketSchore(itemobj,itemname,classname)

export default App;
