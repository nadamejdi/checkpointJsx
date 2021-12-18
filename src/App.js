import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc.png"
function App() {
  return (
    <div className="App">
     <div style={{border:'solid (1)', color:"black", maxWidth:100}}/>

<h1 className ="title red">Your name here</h1>

<br/>
<br/>
<img src="/imageInPublic.jpg" alt= "imageInPublic" />
<img src={myWonderfulImage} alt ='imageInSrc' />
 <video style={{width:320, height:240}}controls="controls"/>
 <source src="/video.mp4" alt="video"  />
</div>

 );
}

export default App;
