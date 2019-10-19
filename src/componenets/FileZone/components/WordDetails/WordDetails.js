import React, {useEffect, useState} from 'react'
import WordDetailsContainer from "./styled/WordDetailsContainer"
import {useDispatch, useSelector} from "react-redux"
import get from "lodash/get"
import axios from 'axios'
import {WORD_STYLES, WORDS_API} from "../../../../constants"
import {updateWordRequest} from "../../../../data/actions/actions"
import DetailRow from "./styled/DetailRow"

const WordDetails = ({ id }) => {
  const dispatch = useDispatch()
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
      <h2>Applied styles:</h2>
      <DetailRow>Bold: {wordStyles[WORD_STYLES.BOLD] ? 'TRUE' : 'FALSE'}</DetailRow>
      <DetailRow>Italic: {wordStyles[WORD_STYLES.ITALIC] ? 'TRUE' : 'FALSE'}</DetailRow>
      <DetailRow>Underline: {wordStyles[WORD_STYLES.UNDERLINE] ? 'TRUE' : 'FALSE'}</DetailRow>
      {
        syns.length > 0 && (
          <div>
            <h2>Synonyms(click to apply):</h2>
            {
              syns.map((s, idx) => <DetailRow
                key={`${idx}${s.word}`}
                isClickable
                onClick={() => dispatch(updateWordRequest({item: id, value: s.word}))}>{s.word}</DetailRow>)
            }
          </div>
        )
      }
    </WordDetailsContainer>
  )
}

export default WordDetails
