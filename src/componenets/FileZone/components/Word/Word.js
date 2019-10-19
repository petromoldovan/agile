import React from 'react'
import { useSelector } from 'react-redux'
import WordStyled from "./styled/WordStyled"
import get from 'lodash/get'
import {WORD_STYLES} from "../../../../constants"

const Word = ({word, id, ...props}) => {
  const wordState = useSelector(state => get(state, `[${id}]`, {}))
  const wordValue = useSelector(state => get(state, `[${id}].value`, word))

  const value = wordValue ? wordValue : word

  return (
    <WordStyled
      isBold={wordState[WORD_STYLES.BOLD]}
      isItalic={wordState[WORD_STYLES.ITALIC]}
      isUnderlined={wordState[WORD_STYLES.UNDERLINE]}
      {...props}>
      {value}
    </WordStyled>
  )
}

export default Word
