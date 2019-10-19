import React, {useEffect, useState} from 'react'
import WordDetailsContainer from "./styled/WordDetailsContainer"
import {useSelector} from "react-redux"
import get from "lodash/get"
import axios from 'axios'
import {WORD_STYLES, WORDS_API} from "../../../../constants"

const WordDetails = ({ id }) => {
  const [syns, setSyns] = useState(() => [])
  const wordStyles = useSelector(state => get(state, `[${id}]`, {}))

  const getSynonims = async (id, callback) => {
    const wArr = id.split('-')
    if (wArr.length !== 2) {
      return null
    }
    const qWord = wArr[1].replace(/[^a-zA-Z ]/g, "")
    const d = await axios.get(`${WORDS_API}${qWord}`)
    callback(d.data)
  }

  useEffect(() => {
    getSynonims(id, setSyns)
  }, [id])

  return (
    <WordDetailsContainer>
      <p>Applied styles:</p>
      <p>Bold: {wordStyles[WORD_STYLES.BOLD] ? 'TRUE' : 'FALSE'}</p>
      <p>Italic: {wordStyles[WORD_STYLES.ITALIC] ? 'TRUE' : 'FALSE'}</p>
      <p>Underline: {wordStyles[WORD_STYLES.UNDERLINE] ? 'TRUE' : 'FALSE'}</p>
      {
        syns.length > 0 && (
          <div>
            Synonyms
            {
              syns.map((s, idx) => <div key={`${idx}${s.word}`}>{s.word}</div>)
            }
          </div>
        )
      }
    </WordDetailsContainer>
  )
}

export default WordDetails
