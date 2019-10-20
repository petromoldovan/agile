import React, { useMemo, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { createPortal } from 'react-dom'
import FileZoneContainer from './components/styled/FileZoneContainer'
import File from './components/styled/File'
import Word from "./components/Word"
import ControlPanel from "../control-panel/ControlPanel"
import {DOMIDS} from "../../constants"
import WordDetails from "./components/WordDetails/WordDetails"
import {breakText} from "../utils"

const FileZone = ({ text = ''}) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const textProcessed = useMemo(() => breakText(text), [text])

  const renderedComponents = useMemo(() => {
    return textProcessed.map((wordObj, idx) => {
      const id = `${idx}-${wordObj.text}`
      return <Word
        key={id}
        id={id}
        noMarginRight={wordObj.noMarginRight}
        isSelected={id === selectedItem}
        onClick={() => setSelectedItem(id)}
        word={wordObj.text} />
    })
  }, [textProcessed, selectedItem])

  return (
    <React.Fragment>
      <ControlPanel item={selectedItem} />
      <FileZoneContainer>
        <File>
          {
            isEmpty(text)
              ? <div>no text provided</div>
              : renderedComponents
          }
        </File>
      </FileZoneContainer>
      {
        !isEmpty(selectedItem) &&
        createPortal(<WordDetails id={selectedItem} />, document.getElementById(DOMIDS.PORTAL_CONTAINER))
      }
    </React.Fragment>
  )
}

export default FileZone;
