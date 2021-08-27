//getting About the game button
const openBtn = document.getElementById('openModal');
//getting start to play button
const playBtn = document.getElementById('playGame'); 
// getting modal element
const modal = document.getElementById('modal'); 
// getting close modal button
const close = document.getElementById('close'); 
//getting quiz main container
const quiz = document.querySelector('.quiz');
//getting quiz questions
const question = document.querySelector('.question')
//getting answers
const answer = document.querySelector('.answer')
//getting three individual answer choices
const choiceA = document.querySelector('#A')
const choiceB = document.querySelector('#B');
const choiceC = document.querySelector('#C');
//getting scores
const score = document.querySelector('.score')
//getting sound
const catSound = document.querySelector('#catSound')

//questions

let questions = [
	{
		imgQuestion: './images/jump.png',
		question: 'How high cats can jump?',
		choiceA: '6x their height',
		choiceB: '10x their height',
		choiceC: '3x their height',
		correctAnswer: '6x their height',
	},
	{
		imgQuestion: './images/toes.png',
		question: 'Cats have how many total toes?',
		choiceA: '10',
		choiceB: '20',
		choiceC: '18',
		correctAnswer: '18',
	},
	{
		imgQuestion: './images/speed.png',
		question: 'Cats run upto?',
		choiceA: '30mph',
		choiceB: '10mph',
		choiceC: '20mph',
		correctAnswer: '30mph',
	},
	{
		imgQuestion: './images/oldest.png',
		question: 'Maximum lived cat?',
		choiceA: '28 years',
		choiceB: '18 years',
		choiceC: '31 years',
		correctAnswer: '31 years',
	},
	{
		imgQuestion: './images/taste.png',
		question: "What taste does cats can't recognize?",
		choiceA: 'sweet',
		choiceB: 'sour',
		choiceC: 'bitter',
		correctAnswer: 'sweet',
	},
	{
		imgQuestion: './images/fat.png',
		question: 'Heaviest cat around on record?',
		choiceA: '20 lbs',
		choiceB: '46 lbs',
		choiceC: '34 lbs',
		correctAnswer: '34 lbs',
	},
	{
		imgQuestion: './images/nightVision.png',
		question: 'How sharp is the night vision of cats, if compared to humans?',
		choiceA: '6x',
		choiceB: '2x',
		choiceC: '10x',
		correctAnswer: '6x',
	},
	{
		imgQuestion: './images/taste1.png',
		question: 'Cats are?',
		choiceA: 'Herbivor',
		choiceB: 'Carnivore',
		choiceC: 'Omnivore',
		correctAnswer: 'Carnivore',
	},
	{
		imgQuestion: './images/cute.png',
		question: 'How many sounds can cats make?',
		choiceA: '100',
		choiceB: '50',
		choiceC: '200',
		correctAnswer: '100',
	},
	{
		imgQuestion: './images/brush.png',
		question: 'How many total teeth cats have?',
		choiceA: '32',
		choiceB: '25',
		choiceC: '30',
		correctAnswer: '30',
	}
];


//function to change the model display to 'block
const openModal = () => {
    modal.style.display = 'block';
}

//set an event listener on About the Game button
openBtn.addEventListener('click', openModal)

//set the event listener on play the game button
playBtn.addEventListener('click', playGame)

//close the model
const closeModal = () => {
    modal.style.display = 'none'
}
 
//set an event listener to close the modal
close.addEventListener('click', closeModal)
