import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc.png"
import video1 from "./";
function App() {
  return (
    <div className="App">
     <div style={{border:'solid 1px black;max-width:100vw'}}/>

<h1 className ="title red">Your name here</h1>

<br/>
<br/>
<img src="/imageInPublic.jpg" alt= "imageInPublic" />
<img src={myWonderfulImage} alt ='imageInSrc' />

 {/*<div style={width="320", height="240" controls="controls" }/>
 <video src={video1} />
</div>*/}

  </div>
  );
}

export default App;
