import React from 'react'
import WordStyled from "./styled/WordStyled"

const Word = ({word, ...props}) => {
  return  <WordStyled {...props}>{word}</WordStyled>
}

export default Word
