const decodeCaesar = (message, shift) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let decodedMessage = ''

  for (let i = 0; i < message.length; i++) {
    let letter = message[i].toLowerCase()

    if (alphabet.indexOf(letter) >= 0) {
      let newLetterIndex = alphabet.indexOf(letter) + shift

      if (newLetterIndex >= alphabet.length) {
        newLetterIndex = newLetterIndex % alphabet.length
      } else if (newLetterIndex < 0) {
        newLetterIndex = alphabet.length + newLetterIndex
      }

      decodedMessage += alphabet[newLetterIndex]
    } else {
      decodedMessage += message[i]
    }
  }

  return decodedMessage
}
