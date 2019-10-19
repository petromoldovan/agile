import React from 'react'
import { useSelector } from 'react-redux'
import WordStyled from "./styled/WordStyled"
import get from 'lodash/get'
import {WORD_STYLES} from "../../../../constants"

const Word = ({word, id, ...props}) => {
  const wordStyles = useSelector(state => get(state, `[${id}]`, {}))

  return  (
    <WordStyled
      isBold={wordStyles[WORD_STYLES.BOLD]}
      isItalic={wordStyles[WORD_STYLES.ITALIC]}
      isUnderlined={wordStyles[WORD_STYLES.UNDERLINE]}
      {...props}>
      {word}
    </WordStyled>
  )
}

export default Word
