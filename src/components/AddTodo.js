import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import {nanoid} from 'nanoid'

function AddTodo({addTodo}) {

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault();

        if (!content) {
            toast({
                title: 'You cannot add an empty Todo!',
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            return
        }

        const todo = {
            id: nanoid(),
            body: content,
        };

        addTodo(todo);
        
        //form becomes empty after submit
        setContent('')
    }

    const [content, setContent] = useState("")    

    return (
    <form onSubmit={handleSubmit}>
        <HStack marginTop="8">
            <Input variant="filled"
            placeholder='Input Todo Here!'
            value={content}
            onChange={(e) => setContent(e.target.value)}/>
            <Button colorScheme="pink" paddingX="8" type="submit">Add Todo</Button>
        </HStack>
    </form>
  );
}

export default AddTodo;