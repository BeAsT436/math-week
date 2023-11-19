import { rebusData, yesNoData, textQuestionData } from './quizData.js'

// створення ребусів

function createRebus(id, imagePath, correctAnswer) {
  const rebusContainer = document.getElementById('rebus-container')

  const rebusDiv = document.createElement('div')
  rebusDiv.classList.add('rebus')
  rebusDiv.id = id

  const imageContainer = document.createElement('div')
  imageContainer.classList.add('image-container')

  const image = document.createElement('img')
  image.classList.add('fill-image')
  image.src = imagePath

  const input = document.createElement('input')
  input.type = 'text'

  const button = document.createElement('button')
  button.textContent = 'ввести'
  button.addEventListener('click', () =>
    checkAnswer(id, input.value, correctAnswer)
  )

  const paragraph = document.createElement('p')
  paragraph.classList.add('paragraph')

  imageContainer.appendChild(image)
  rebusDiv.appendChild(imageContainer)
  rebusDiv.appendChild(input)
  rebusDiv.appendChild(button)
  rebusDiv.appendChild(paragraph)

  rebusContainer.appendChild(rebusDiv)
}

// кінець створення ребусів
// створення запитань

function createYesNoQuestion(id, questionText, correctAnswer) {
  const yesNoContainer = document.getElementById('yes-or-no-container')

  const questionDiv = document.createElement('div')
  questionDiv.classList.add('question')
  questionDiv.id = id

  const questionParagraph = document.createElement('p')
  questionParagraph.textContent = questionText

  const buttonYes = document.createElement('button')
  buttonYes.classList.add('btn')
  buttonYes.textContent = 'Так'
  buttonYes.addEventListener('click', () =>
    checkYesNoAnswer(id, true, correctAnswer)
  )

  const buttonNo = document.createElement('button')
  buttonNo.classList.add('btn2')
  buttonNo.textContent = 'Ні'
  buttonNo.addEventListener('click', () =>
    checkYesNoAnswer(id, false, correctAnswer)
  )

  const paragraph = document.createElement('p')
  paragraph.classList.add('p')

  questionDiv.appendChild(questionParagraph)
  questionDiv.appendChild(buttonYes)
  questionDiv.appendChild(buttonNo)
  questionDiv.appendChild(paragraph)

  yesNoContainer.appendChild(questionDiv)
}

// кінець створення запитань
// створення текстових запитань

function createTextQuestion(id, questionText, correctAnswer) {
  const questionsContainer = document.getElementById('questions-container')

  const questionDiv = document.createElement('div')
  questionDiv.classList.add('question')
  questionDiv.id = id

  const questionParagraph = document.createElement('p')
  questionParagraph.textContent = questionText

  const input = document.createElement('input')
  input.type = 'text'

  const button = document.createElement('button')
  button.textContent = 'ввести'
  button.addEventListener('click', () =>
    checkTextQuestionAnswer(id, input.value, correctAnswer)
  )

  const paragraph = document.createElement('p')
  const resultParagraph = document.createElement('p')

  questionDiv.appendChild(questionParagraph)
  questionDiv.appendChild(input)
  questionDiv.appendChild(button)
  questionDiv.appendChild(paragraph)
  questionDiv.appendChild(resultParagraph)

  questionsContainer.appendChild(questionDiv)
}

// кінець створення текстових запитань
// перевірка відповідей

function checkAnswer(id, userAnswer, correctAnswer) {
  const paragraph = document.querySelector(`#${id} .paragraph`)
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    paragraph.textContent = 'Правильно!!!'
    paragraph.style.color = 'green'
  } else {
    paragraph.textContent = 'Спробуй ще раз'
    paragraph.style.color = 'red'
  }
}

function checkYesNoAnswer(id, userAnswer, correctAnswer) {
  const paragraph = document.querySelector(`#${id} .p`)
  if (userAnswer === correctAnswer) {
    paragraph.textContent = 'Правильно!!!'
    paragraph.style.color = 'green'
  } else {
    paragraph.textContent = 'Неправильно'
    paragraph.style.color = 'red'
  }
}

function checkTextQuestionAnswer(id, userAnswer, correctAnswer) {
  const paragraph = document.querySelector(`#${id} p`)
  const resultParagraph = document.querySelector(`#${id} p + p`)

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    resultParagraph.textContent = 'Правильно!!!'
    resultParagraph.style.color = 'green'
  } else {
    resultParagraph.textContent = 'Спробуй ще раз'
    resultParagraph.style.color = 'red'
  }
}
// кінець перевірки відповідей
// ініціалізація елементів

function initializeElements() {
  rebusData.forEach((data) =>
    createRebus(data.id, data.imagePath, data.correctAnswer)
  )
  yesNoData.forEach((data) =>
    createYesNoQuestion(data.id, data.questionText, data.correctAnswer)
  )
  textQuestionData.forEach((data) =>
    createTextQuestion(data.id, data.questionText, data.correctAnswer)
  )
}
// кінець ініціалізування елементів
// викликаємо ініціалізацію елементів
initializeElements()