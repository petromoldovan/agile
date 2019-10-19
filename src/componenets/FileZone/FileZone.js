import React, { useMemo, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { createPortal } from 'react-dom'
import FileZoneContainer from './components/styled/FileZoneContainer'
import File from './components/styled/File'
import Word from "./components/Word"
import ControlPanel from "../control-panel/ControlPanel"
import {DOMIDS} from "../../constants"
import WordDetails from "./components/WordDetails/WordDetails"

const FileZone = ({ text = ''}) => {
  const [selectedItem, setSelectedItem] = useState(null)

  const renderedComponents = useMemo(() => {
    return text.split(' ').map((word, idx) => {
      const id = `${idx}-${word}`
      return <Word
        key={id}
        id={id}
        isSelected={id === selectedItem}
        onClick={() => setSelectedItem(id)}
        word={word} />
    })
  }, [text, selectedItem])

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
