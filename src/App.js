import React from 'react'
import FileZone from "./componenets/FileZone/FileZone"
import {buildStore} from "./data/store"
import { Provider } from 'react-redux'
import './App.css'

const text = "A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, and two of them worked for me. I was there to support them. The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, that modern design problems were very complex. And we ought to need a license to solve them."

const App = () => {
  return (
    <Provider store={buildStore({})}>
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <FileZone text={text} />
      </main>
    </div>
    </Provider>
  )
}

export default App;
