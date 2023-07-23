import "./App.css";
import Card from './Card';
import Hdata from "./Hdata";

function App() {
  return (
    <>

      <h1 className="heading_style">List of Movies </h1>
 
     
      {Hdata.map((val)=>{
        return(
        <Card key={val.id}
              imgSrc={val.imgSrc} 
              sname={val.sname}
              title = {val.title} 
              link = {val.link} />
            )
      })}
    </>
  );
}

export default App;
