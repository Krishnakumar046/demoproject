import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div class='container'>
      <p class='lh-lg'>In this Document-page.I have done some projects on the javascript through my skill's on Front-End and I built the whole project through the React library framework.In this project I have created the Calculator, Todo List, Rock Paper Scissor, Loan Calculator, Weather App </p>
      <p class='lh-lg'><bold class="fw-bold">Calculator : </bold> In this calculator we can do the simple calculation and it also work like an normal calculator.And you visit the Calculator through clicking the Calculator Button or Press the Link <Link to={'/Calculator'}>Calculator</Link> </p>
      <p class='lh-lg'><bold class="fw-bold">Todo List : </bold> In this Todo List's We can able to store some Description and we can able to Add some more description and Delete the Description and the special thing is we can edit the saved description. And you can visit through Clicking the Todo List Button Below or press the Link   <Link to={'/Todolist'}>Todo List</Link> </p>
      <p class='lh-lg'><bold class="fw-bold">Rock Paper Scissor : </bold> In this Rock Scissor Paper We can play with the computer and you can can see who win's the game and it has only 10 move's by clicking the Rock Paper Scissor button the computer also provide some random values and comparing of these two values it show's the result.And you can visit through clicking the Rock Paper Scissor Button or press the Link      <Link to={'/RockPaperScissor'}>Rock Paper Scissor</Link> </p>
      <p class='lh-lg'><bold class="fw-bold">Loan Calculator : </bold> In this calculator we can do the simple calculation and it also work like an normal calculator.And you visit the Calculator through clicking the Calculator Button or Press the Link <Link to={'/Calculator'}>Calculator</Link> </p>
      <p class='lh-lg'><bold class="fw-bold">Calculator : </bold> In this calculator we can do the simple calculation and it also work like an normal calculator.And you visit the Calculator through clicking the Calculator Button or Press the Link <Link to={'/Calculator'}>Calculator</Link> </p>


    </div>
  )
}
