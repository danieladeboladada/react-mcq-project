//import logo from './logo.svg';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

const questions_arr = [
  {
    id: 1,
    question: "What is the capital of Croatia?",
    options: {
      A: "Osijek",
      B: "Zagreb",
      C: "Rijeka",
      D: "Split"
    },
    answer: "B"

  },
  {
    id: 2,
    question: "Who is the president of South Africa?",
    options: {
      A: "Cyril Ramaphosa",
      B: "Nelson Mandela",
      C: "Jacob Zuma",
      D: "Nomazizi Mtshotshisa"
    },
    answer: "A"
  },
  {
    id: 3,
    question: "Which is the most successful team in the UEFA Champions League?",
    options: {
      A: "Arsenal",
      B: "AC Milan",
      C: "Real Madrid",
      D: "Liverpool"
    },
    answer: "C"
  },
  {
    id: 4,
    question: "What is the full meaning of CcHub?",
    options: {
      A: "Candy Crush Hub",
      B: "Coca-Cola Hub",
      C: "Co-Creation Hub",
      D: "Cameroon Cane Hub"
    },
    answer: "C"
  }
]

function DisplayQuestionOptions({q_id, options}){
  var letters = [];

  for(var i in options){
    letters.push(i);
  }
  
  return (
    <>
      {letters.map(letter => (
        <div key={q_id + letter} >
          <input type="radio" id={q_id + letter} name={q_id} value={letter} />
          <label> {options[letter]} </label><br></br>
        </div>
      ))}
    </>
  );
}

function DisplayAllQuestions({questions}){
  var q_no=1;

  return (
    <>
      {questions.map(qobject => (
      <div key={qobject.id.toString()} >
        <h1> {q_no++}) {qobject.question} </h1>
        <DisplayQuestionOptions q_id={qobject.id} options={qobject.options} />
      </div>
      ))}
    </>
    
  );
}

function ComputeScore({questions}){
  var score = 0;
  for(var i=0;i<questions.length;i++){
    if(document.getElementById(questions[i].id+questions[i].answer).checked){
      score++
    }
  }

  return (
    <>
      <h1> Your Score is {score}/4 </h1>
    </>
  );

}


function App() {
  const [submit_state,setSubmit] = useState(0);

  if (submit_state === 1){
    return <ComputeScore questions={questions_arr} />;
  }

  return (
    <>
      <DisplayAllQuestions questions={questions_arr} /><br />
      <button onClick={() => setSubmit(1)} > Finish </button>
    </>
  );
}

export default App;
