import React, { useCallback } from 'react';
import isEmpty from 'lodash/isEmpty'
import './ControlPanel.css';
import { useDispatch } from 'react-redux'
import {updateWordFormatting} from "../../data/actions/actions"

const STYLES = {
  BOLD: 'B',
  ITALIC: 'I',
  UNDERLINE: 'U'
}

const ControlPanel = ({item}) => {
  const dispatch = useDispatch()

  const updateStyle = useCallback((style = '') => {
    if (isEmpty(item)) {
      return null
    }
    dispatch(updateWordFormatting({item, style}))
  }, [item, dispatch])

  return (
    <div id="control-panel">
      <div id="format-actions">
        <button
          onClick={() => updateStyle(STYLES.BOLD)}
          className="format-action" type="button">
          <b>B</b>
        </button>
        <button onClick={() => updateStyle(STYLES.ITALIC)} className="format-action" type="button"><i>I</i></button>
        <button onClick={() => updateStyle(STYLES.UNDERLINE)} className="format-action" type="button"><u>U</u></button>
      </div>
    </div>
  )
}

export default ControlPanel;
