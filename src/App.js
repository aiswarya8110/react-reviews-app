import './App.css';
import persons from './data';
import React, { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App(){
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = persons[index];

    function randomPersonHandler(){
      let randomIndex = Math.floor(Math.random() * persons.length);
      setIndex(randomIndex);
    }

    function previousPersonHandler(){
      setIndex((prevState)=>{
        let prevIndex = prevState - 1;
        if(prevIndex < 0){
          prevIndex = persons.length - 1;
        }

        return prevIndex;
      })
    }

    function nextPersonHandler(){
      setIndex((prevState)=>{
        let nextIndex = prevState + 1;
        if(nextIndex > persons.length - 1){
          nextIndex = 0;
        }

        return nextIndex;
      })
    }

    console.log(name);
    return (
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={previousPersonHandler}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPersonHandler}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPersonHandler}>
            surprise me!
          </button>
        </article>
      </main>
    )
}

export default App;
