import styled from 'styled-components'
import React from "react"

const WordStyled = styled.div`
  margin-right: 5px;
  cursor: pointer;
  ${({isSelected}) => isSelected && 'color: red;'}
  ${({ isBold }) => isBold && 'font-weight: 900;'}
  ${({ isItalic }) => isItalic && 'font-style: italic;'}
  ${({ isUnderlined }) => isUnderlined && 'text-decoration: underline;'}
`

export default WordStyled
