import { useState } from 'react'
import './App.css'

function App() {
  const [url, setURL] = useState("");

  const handleClick = () => {
    console.log("URL to shorten:", url);
    
    return url;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setURL(event.target.value);
  }


  return (
    <>
      <h1>Shortner URL</h1>
      <div className="card">
        <input 
          type="text" 
          placeholder="Enter URL to shorten" 
          value={url} 
          onChange={handleChange}
          name='url'
          className="urlInput"
        />
        <button onClick={() => setURL(handleClick())}>
          Shorten URL
        </button>
        <p>
          Add your long URL above and click "Shorten URL" to get a shortened version.
        </p>
      </div>
    </>
  )
}

export default App
