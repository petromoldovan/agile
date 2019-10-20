const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

export const breakText = (text) => {
  let arr = text.split(' ')
  let arrFin = []
  let elem = ''
  for(let i = 0; i < arr.length; i++) {
    elem = arr[i].trim()
    if (!specialChars.test(elem[elem.length - 1])){
      arrFin.push({text: elem})
      continue
    }

    arrFin.push({text: elem.slice(0, -1), noMarginRight: true})
    arrFin.push({text: elem[elem.length - 1]})
  }
  return arrFin
}
