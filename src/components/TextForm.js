import React, { useState } from 'react'

//both tailwind and bootstrap is used in this file.

const TextForm = (props) => {
    

    const [text,setText]=useState("");
    const [isuppercase,setIsUpperCase]=useState(false);

    function changeTextArea(event){
        setText(event.target.value);
    }

    function toLower(){
        setIsUpperCase(false);
        setText(text.toLowerCase());
    }
    function toUpper(){
        setIsUpperCase(true);
        const temp=text.toUpperCase();
        setText(temp);
    }
    function ToggleCase(){
        if(isuppercase===true){
            toLower();
        }
        else{
            toUpper();
        } 
    }
    function Reverse(){
        const temp = text.split('').reverse().join('');
        setText(temp);
    }
    //this is very nice...
    function Speak(){
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);  
    }
    function VowelCount(){
        let vowel=0;
        let arr=['a','e','i','o','u','A','E','I','O','U'];
         for(let i=0;i<text.length;i++){
            if(arr.includes(text[i]))
            vowel=vowel+1;
         }
        alert("Vowels are:"+vowel);
    }
    function Clear(){
        setText("");
    }
    function Replace(){
        const toreplace=prompt("Enter the word to be replaced");
        const newword=prompt("Enter the new word to be placed");
        setText(text.replace(toreplace,newword));
    }
    

  return (
    <>
    <div className='flex items-center flex-col p-[1rem] ' >

    <div className="w-[70%] ">
    <h3 className='text-[1.5rem] font-medium p-2'>Enter your Text here</h3>
  <textarea className="form-control text-[0.9rem]" id="exampleFormControlTextarea1" value={text} onChange={changeTextArea} rows="7"></textarea>

<div className='my-2'>

  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={toLower}>Convert to LowerCase</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={toUpper}>Convert to UpperCase</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={Speak}>Speak</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={ToggleCase}>Toggle Case</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={VowelCount}>VowelCount</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={Reverse}>Reverse the String</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={Replace}>Replace</button>
  <button className="btn btn-primary m-1 text-[0.8rem]" onClick={Clear}>Clear</button>
</div>
<div>
    <p>{text.split(' ').length} words, {text.length} characters</p>
    <p className='text-[1.25rem] font-[500] '>Preview your Text</p>
    <p className='text-[0.9rem] py-2'>{text===""?"Enter some text above for Preview":text}</p>
</div>
</div>

    </div>


    </>     
    
  )
}

export default TextForm
