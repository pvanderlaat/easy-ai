// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import Draggable from '../util/dnd/Draggable';
import Droppable from '../util/dnd/Droppable'
import {DndContext, MultipleContainers} from '@dnd-kit/core';


export default function Freestyle() {
    const [prompt, setPrompt] = useState('')
    const [filled, setFilled] = useState({
        'Noun': null,
        'Adjective': null,
        'Verb': null
    })
    const containers = ['Adjective', 'Noun', 'Verb'];
    const [draggables, setdraggables] = useState({
        'car': [null, 'Noun'],
        'tree': [null, 'Noun'],
        'bear': [null, 'Noun'],
        'dog': [null, 'Noun'],
        'cat': [null, 'Noun'],
        'red': [null, 'Adjective'],
        'sad': [null, 'Adjective'],
        'blue': [null, 'Adjective'],
        'tall': [null, 'Adjective'],
        'shiny': [null, 'Adjective'],
        'wet': [null, 'Adjective'],
        'dancing': [null, 'Verb'],
        'eating food': [null, 'Verb'],
        'punching the air': [null, 'Verb'],
        'pointing upwards': [null, 'Verb'],
        'stretching': [null, 'Verb'],
    });
    const [draggableList, setDraggableList] = useState([]);
    useEffect(() => {
        var draggableList = []
        for (var m in draggables){
            draggableList.push(<Draggable id={m}>{m}</Draggable>)
        }
        setDraggableList(draggableList);
    },[draggables]);


    function render() {
        return (
            <DndContext onDragEnd={handleDragEnd}>
                <div
                    style={{
                        width: '90%',
                        height: '5vh',
                        // backgroundColor: 'gray',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    {containers.map((id) => (
                            // We updated the Droppable component so it would accept an `id`
                            // prop and pass it to `useDroppable`
                            <Droppable key={id} id={id}>
                            <h3 style={{display: 'flex'}}>{id}</h3>
                            {draggableList.map((draggable) => {
                                return draggables[draggable.props.id][0] === id ? draggable : null
                            })}
                            </Droppable>
                    ))}
                </div>
                {prompt != '' ? 
                    <OpenAI
                        prompt={prompt}
                    /> : null  
                }
                <br></br><br></br>
                <div
                    style={{
                        width: '90%',
                        height: '30vh',
                        // backgroundColor: 'gray',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    {/* Render the adjectives */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Adjectives
                        {draggableList.map((draggable) => {
                            return draggables[draggable.props.id][0] === null && draggables[draggable.props.id][1] === 'Adjective' ? draggable : null
                        })} 
                    </div>
                    {/* Render the nouns */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Nouns
                        {draggableList.map((draggable) => {
                            return draggables[draggable.props.id][0] === null && draggables[draggable.props.id][1] === 'Noun' ? draggable : null
                        })} 
                    </div>
                    {/* Render the verbs */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Verbs
                        {draggableList.map((draggable) => {
                            return draggables[draggable.props.id][0] === null && draggables[draggable.props.id][1] === 'Verb' ? draggable : null
                        })} 
                    </div>
                </div>
                <button onClick={() => {
                    if (filled['Adjective'] == null || filled['Noun'] == null || filled['Adjective'] == null) {
                        alert("ERROR. Please fill in all the boxes")
                    }
                    else {
                        setPrompt("a " + filled['Adjective'] + " " + filled['Noun'] + " " + filled['Verb'])
                    }
                }}>
                    Submit
                </button>
            </DndContext>
        )
    }

    function handleDragEnd(event) {
        const {over} = event;
        let newDraggables = { ...draggables}
        if (over) {
            if (newDraggables[event.active.id][1] != over.id) {
                alert(event.active.id + ' is not a(n) ' + over.id)
                newDraggables[event.active.id][0] = null
            }
            else if (filled[over.id] == null) {
                newDraggables[event.active.id][0] = over.id                 
                let newFilled = { ...filled}
                newFilled[over.id] = event.active.id
                setFilled(newFilled)
            }
            else {
                console.log("A")
                console.log(filled)
                alert("The " + over.id + " box already contains a word")
            }
        }
        else {
            if (filled[newDraggables[event.active.id][1]] === event.active.id) {
                let newFilled = { ...filled}
                newFilled[newDraggables[event.active.id][0]] = null
                newDraggables[event.active.id][0] = null
                setFilled(newFilled)
            }
        }
        setdraggables(newDraggables);
    }

    return render();
};