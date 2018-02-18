const shift = (letter, shiftAmount) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  letter = letter.toLowerCase()
  let newLetterIndex = alphabet.indexOf(letter) + shiftAmount

  if (newLetterIndex > alphabet.length) {
    newLetterIndex = newLetterIndex % alphabet.length
  } else if (newLetterIndex < 0) {
    newLetterIndex = alphabet.length + newLetterIndex
  }

  return alphabet[newLetterIndex]
}

const decodePart = (phrase) => {
  let decoded = ''
  const spaces = / +/g
  let firstSpace = spaces.exec(phrase)
  let numberOfSpaces = 0
  let arr

  if (firstSpace) {
    numberOfSpaces += firstSpace[0].length
  }

  while ((arr = spaces.exec(phrase)) !== null) {
    numberOfSpaces += arr[0].length
  }

  let shiftAmount = phrase.length - numberOfSpaces

  if (phrase === phrase.toUpperCase()) {
    shiftAmount = -shiftAmount
  }

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === ' ') {
      decoded += phrase[i]
    } else {
      decoded += shift(phrase[i], shiftAmount)
    }
  }

  return decoded
}

const decodeWhole = (code) => {
  const capitols = /( *[A-Z]+ *[A-Z]* *)/
  let sections = code.split(capitols)
  let message = ''

  sections.forEach(part => {
    if (part) {
      message += decodePart(part)
    }
  })
  console.log(sections)
  return message
}

// SOME ISSUE WITH SPACES IN LOWERCASE SECTIONS

console.log(decodeWhole('ZA CHzachzaCHZ  Ac h zaC H'))
console.log('vw ydFGINFGydv  wG l EFa f')
console.log(decodeWhole('vw ydFGINFGydv  wG l EFa f'))
console.log('ZA CHzachzaCHZ  Ac h zaC H')
// console.log('uv xcFGINFGwbt  uH m EFz e')
// console.log('zachZACHZAchz  aC H ZAc h')

const encodeJanus = (message) => {
  let partLength
  let encodedMessage
  message = message.split('')

  while (message.length) {
    if (message.length > 3) {
      partLength = Math.floor(Math.random(0, Math.floor(message.length * 0.3)))
    } else {
      partLength = Math.floor(Math.random(0, message.length))
    }

    // ADD TO ENCODEDMESSAGE
    encodedMessage
    // REMOVE PART AND SEND OT SHIFT

  }

  return encodedMessage
}
