
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  async function generateAnswer() {
    setAnswer("loading...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD-XX6Hv3qTslvmmkG6fkQ-MX0etHhYl10",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("Error: " + (error.response?.data?.error?.message || error.message));
    }
  }

  return (
    <>
      <h1>Chat AI</h1>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask something..." rows={4} cols={50} />
      <br />
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
