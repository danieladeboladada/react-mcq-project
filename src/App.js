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
        <div key={q_id + letter} style= {{
          backgroundColor: "lightsalmon",
          borderStyle: "outset"
        }}>
          <input type="radio" id={q_id + letter} name={q_id} value={letter} />
          <label> {options[letter]} </label><br></br>
        </div>
      ))}
    </>
  );
}

function DisplayAllQuestions({questions}){

  return (
    <>
      {questions.map(qobject => (
        <div key={qobject.id.toString()} >
          <h1 style= {{
            backgroundColor: "mintcream"
            // borderStyle: "double"
          }}> 
            {qobject.id}) {qobject.question} 
          </h1>
          <DisplayQuestionOptions q_id={qobject.id} options={qobject.options} />
        </div>
      ))}
    </>
    
  );
}

function ComputeScore({questions}){
  var score = 0;
  var incorrect={};//{question: answer, q1: a1, ...}
  var q=[];//[question1, question2, ...]

  for(var i=0;i<questions.length;i++){
    if(document.getElementById(questions[i].id+questions[i].answer).checked){
      score++;
    }
    else{
      q.push(questions[i].question);
      incorrect[questions[i].question] = questions[i].options[questions[i].answer];
    }
  }

  return (
      <>
        <h1> Your Score is {score}/4 </h1>
        {q.map(q_question => (
          <div key={ q_question } >
            <h4 > Question: { q_question } </h4>
            <h5 style={{
              backgroundColor: "forestgreen",
              borderStyle: "none"
            }} > Answer: { incorrect[q_question] } </h5>
          </div>
        ))}
      </>
  );

}


function App() {
  const [submit_state,setSubmit] = useState(0);

  if (submit_state === 1){
    return (
      <>
        <ComputeScore questions={questions_arr} />
        <button id="start-over" onClick={() => setSubmit(0)} > START OVER </button>
      </>
    );
  }

  return (
    <div>
      <DisplayAllQuestions questions={questions_arr} /><br />
      <button id="finish" onClick={() => setSubmit(1)} > FINISH </button>
    </div>
  );
}

export default App;
