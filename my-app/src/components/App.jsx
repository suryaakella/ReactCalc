import React,{useState} from 'react'
import Button from './Button'

function App(){

    const [value, setValue] = useState('');

    function handle(event){
        console.log(event.target)
        if(event.target.value == '=') {
            setValue(eval(value))
        }
        else if(event.target.value == 'AC'){
            setValue('');
        }
        else {setValue(value + event.target.value)}
        event.preventDefault(); 
    }

    return (
        <div>
            <form >
                <input name="input" value={value} onChange={handle} placeholder='0' type="text"/> <br/>
                <Button value='(' buttonhandleClick={handle} />
                <Button value=')' buttonhandleClick={handle}/>
                <Button value='%' buttonhandleClick={handle}/> 
                <Button value='AC'buttonhandleClick={handle}/> <br/>
                <Button value='7' buttonhandleClick={handle}/>
                <Button value='8' buttonhandleClick={handle}/>
                <Button value='9' buttonhandleClick={handle}/> 
                <Button value='/' buttonhandleClick={handle}/> <br/>
                <Button value='4' buttonhandleClick={handle}/>
                <Button value='5' buttonhandleClick={handle}/>
                <Button value='6' buttonhandleClick={handle}/> 
                <Button value='*' buttonhandleClick={handle}/> <br/>
                <Button value='1' buttonhandleClick={handle}/>
                <Button value='2' buttonhandleClick={handle}/>
                <Button value='3' buttonhandleClick={handle}/> 
                <Button value='-' buttonhandleClick={handle}/> <br/>
                <Button value='0' buttonhandleClick={handle}/>
                <Button value='.' buttonhandleClick={handle}/>
                <Button value='=' buttonhandleClick={handle}/> 
                <Button value='+' buttonhandleClick={handle}/> <br/>


            </form>
        </div>
    );
}

export default App;