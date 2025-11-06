import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer]= useState("");

async function generateAnswer(){
  setAnswer("loading");
  const response = await axios({
    url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD-XX6Hv3qTslvmmkG6fkQ-MX0etHhYl10",
   method: "post",
   data: {
    contents: [
      {"parts": [{"text": question }] },
    ],

   },
  });
 setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
}

  return (
    <>
      <h1>Chat AI</h1>
      <textarea value={question} onChange={(e)=>setQuestion(e.target.value)}   name="" id=""></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
