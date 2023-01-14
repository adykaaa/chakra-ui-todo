import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'
import {FaSun, FaMoon} from 'react-icons/fa';
import { useState, useEffect } from "react";

function App() {
  const initialTodos = [
    {
        id: 1,
        body: 'get bread',
    },
    {
        id:2,
        body: 'walk the dog'
    },
    {
      id:3,
      body: 'study React'
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
    );

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]
  );

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <VStack p={5}>
      <IconButton icon={ colorMode === 'light' ? <FaSun /> : <FaMoon/>} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode}/>
      <Heading p={10} fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, pink.500, pink.300, blue.500)" bgClip="text">
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} addTodo={addTodo} />
      <AddTodo addTodo={addTodo}/>
    </VStack>
    
  );
}

export default App;