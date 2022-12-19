
import './App.css';
import { Heading } from './components/advanceProps/Heading';
import { Oscar } from './components/advanceProps/Oscar';
import { Status } from './components/advanceProps/Status';
import { Button } from './components/eventProps/Button';
import { Input } from './components/eventProps/Input';
import { ObjectArray } from './components/basicProps/ObjectArray';
import { ObjectProps } from './components/basicProps/ObjectProps';
import { TypingProps } from './components/basicProps/TypingProps';
import { Container } from './components/styleProps/Container';

function App() {
  const personName = {
    fname: "vinod",
    lname: " jack"
  }
  const nameList = [
    {
      first: "brook",
      last: " rathod"
    },
    {
      first: "kelivin",
      last: " light"
    },
    {
      first: "sruth",
      last: " ping"
    }
  ]
  const stylesProperties ={
    border: '2px solid red', padding:'4rem'
  }
  return (
    <div className="App">
      <h2>
        {/* <TypingProps name="binod" messageCount={10} isLoggedin={false} />
      <ObjectProps name = {personName} />
      <ObjectArray names ={nameList} /> */}

        {/* <Status status='error'/>
      <Heading children={'brendon'}></Heading>
      <Oscar >
        <Heading  >oSCAr goes top you</Heading>
      </Oscar> */}

        {/* <Button handleClick={(event,id) => {
          console.log("implement",event,id)
        }} />
        <Input value='' handleChange={ (event)=>{
            console.log("event",event)
        }}/> */}

        <Container styles={{border: '1px solid black', padding:'1rem'}}/>
        <Container styles={stylesProperties}/>
      </h2>
    </div>
  );
}

export default App;
