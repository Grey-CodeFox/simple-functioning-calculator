function press(userValue) {
  let operators = ['*', '/', '-', '+', '.']
  let inputTag = document.getElementById('input-tag')

  // first element in input field is space and first user value is operator
  if (
    inputTag.value === '' &&
    (userValue === '+' ||
      userValue === '-' ||
      userValue === '*' ||
      userValue === '/' ||
      userValue === '=' ||
      userValue === '.')
  ) {
    return

    // secondly if currentUser value is operator 'AND' last value in input field is operator
  } else if (
    operators.includes(userValue) &&
    operators.includes(inputTag.value.charAt(inputTag.value.length - 1)) ===
      true
  ) {
    return
  } else if (userValue === '.' && inputTag.value.includes('.')) {
    return
  }

  // THIRD IF C CLEARS THE FIELD
  else if (userValue === 'C') {
    inputTag.value = ''
  } else inputTag.value = inputTag.value + userValue
}

function calculate() {
  let operators = ['*', '/', '-', '+', '.']
  let inputTag = document.getElementById('input-tag')
  // IF NO VALUE IS GIVEN AT BEGINING THEN NO CALCULATION 'OR' LAST VALUE IS JUST OPERATOR ONLY
  if (
    inputTag.value === '' ||
    operators.includes(inputTag.value.charAt(inputTag.value.length - 1)) ===
      true
  ) {
    return
  }
  // calculation of the input field happens

  let expression = inputTag.value
  inputTag.value = eval(expression)
}

function backspace() {
  // DELETNING THE LAST ELEMENT

  let inputTag = document.getElementById('input-tag')
  if (inputTag.value) {
    let expression = Array.from(inputTag.value)
    inputTag.value = expression.slice(0, expression.length - 1).join('')
  }
}
