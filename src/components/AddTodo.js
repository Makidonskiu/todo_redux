import { InputGroup, FormControl, Button } from "react-bootstrap"
import { setTask , setDelite, setDone, setChange } from "../redux/actions/textAction"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";

import './addTodo.css'

export const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector( store => store.text);
    return <>
        <h1 className="center">AddTodo</h1>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="AddTodo"
            aria-label="AddTodo"
            aria-describedby="basic-addon2"
            onChange={ e => setText(e.target.value)}
            value={text}
            />
            <Button 
            variant="outline-secondary" 
            id="button-addon2"
            onClick={ () => dispatch(setTask({text: text, id: Math.random(),completed: false})) }>
                Добавить
            </Button>
        </InputGroup>
        {
            todos.map((item, index)=> (
                <div 
                    key={index + `${item}`}> 
                        <InputGroup className="mb-3">
                            <p className="margin" 
                            onClick={()=> dispatch(setDone(item.id))} 
                            style={{textDecoration : item.completed ? 'line-through' : 'none'}}>
                            {item.text}</p>
                            <Button 
                            className="btn btn-warning"
                            onClick={()=> dispatch(setDelite(item))}
                            variant="outline-secondary " id="button-addon2">
                            Удалить   
                            </Button>
                            {/* <Button 
                            onClick={()=> dispatch(setChange(item.id))}
                            variant="outline-secondary" id="button-addon2">
                            Изменить   
                            </Button> */}
                        </InputGroup>
                </div>
            ))
        }
    </>
}