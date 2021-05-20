import React,{useState} from 'react'
import Button from './Button'


function App(){

    const [value, setValue] = useState('');
    const [keyPressed, setKeyPressed] = useState({});

    const handleKeyDown = (e) => {
      const { key, code, keyCode } = e;
      console.log(key);
      setKeyPressed({ key, code, keyCode });
    };

    function handle(event){
        console.log(event.target)
        if(event.target.value === '=') {
            setValue(eval(value))
        }
        else if(event.target.value === 'AC'){
            setValue('');
        }
        else {setValue(value + event.target.value)}
        event.preventDefault(); 
    }


    return (
        <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
          <h1>Press a key</h1>
          <h2>
            You pressed: {keyPressed.key} which has code {keyPressed.code} and
            keycode is equal to {keyPressed.keyCode} which is to be used to make
            functional UIs
          </h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" style={{color: "black"}} href="#">Calculator</a>
          </nav>
           <form className="calc"  >
                <input className="input-group mb-3 inp" name="input" value={value} onChange={handle} placeholder='0' type="text"/>
                <div className="buttons-all">
                <Button value='(' buttonhandleClick={handle} />
                <Button value=')' buttonhandleClick={handle}/>
                <Button value='%' buttonhandleClick={handle}/> 
                <Button value='AC'buttonhandleClick={handle}/> 
                <Button value='7' buttonhandleClick={handle}/>
                <Button value='8' buttonhandleClick={handle}/>
                <Button value='9' buttonhandleClick={handle}/> 
                <Button value='/' buttonhandleClick={handle}/> 
                <Button value='4' buttonhandleClick={handle}/>
                <Button value='5' buttonhandleClick={handle}/>
                <Button value='6' buttonhandleClick={handle}/> 
                <Button value='*' buttonhandleClick={handle}/> 
                <Button value='1' buttonhandleClick={handle}/>
                <Button value='2' buttonhandleClick={handle}/>
                <Button value='3' buttonhandleClick={handle}/> 
                <Button value='-' buttonhandleClick={handle}/> 
                <Button value='0' buttonhandleClick={handle}/>
                <Button value='.' buttonhandleClick={handle}/>
                <Button value='=' buttonhandleClick={handle}/> 
                <Button value='+' buttonhandleClick={handle}/> 
                </div>  
             </form> 
  
        </div>
      );
    }


export default App;