// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import Draggable from '../util/dnd/Draggable';
import Droppable from '../util/dnd/Droppable'
import {DndContext, MultipleContainers} from '@dnd-kit/core';
import {getPrompts} from '../util/spanishWords';


export default function MadLib() {
    const [screen, setScreen] = useContext(ScreenContext);
    const [prompt, setPrompt] = useState('')
    const [filled, setFilled] = useState({
        'Noun': null,
        'Adjective': null,
        'Verb': null
    })
    const [tempPrompt, setTempPrompt] = useState(getPrompts())
    const containers = ['Adjective', 'Noun', 'Verb'];
    const madLibPrompt = [tempPrompt[0], tempPrompt[1], tempPrompt[2]]
    const [draggables, setdraggables] = useState({
        'carro': [null, 'Noun'], //car
        'arbol': [null, 'Noun'], //tree
        'oso': [null, 'Noun'], //bear
        'perro': [null, 'Noun'], //dog
        'gato': [null, 'Noun'], //cat
        'rojo': [null, 'Adjective'], //red
        'triste': [null, 'Adjective'], //sad
        'azul': [null, 'Adjective'], //blue
        'alto': [null, 'Adjective'], //tall
        'brillante': [null, 'Adjective'], //shiny
        'mojado': [null, 'Adjective'], //wet
        'bailando': [null, 'Verb'], //dancing
        'comiendo': [null, 'Verb'], //eating food
        'acostando': [null, 'Verb'], //resting
        'corriendo': [null, 'Verb'], //running
        'extensión': [null, 'Verb'], //stretching
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
                <button style={{
                    position: 'absolute',
                    left: '0',
                    top: '0'
                }} onClick={() => { setScreen("home") }}>Home</button>
                <button style={{
                    position: 'absolute',
                    right: '0',
                    top: '0'
                }} onClick={() => { setScreen("History") }}>History</button>
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
                    <h6>Un(a)(os) </h6>
                    {/* {containers.map((id) => (
                            <Droppable key={id} id={id}>
                            <h6 style={{display: 'flex'}}>{id}</h6>
                            {draggableList.map((draggable) => {
                                return draggables[draggable.props.id][0] === id ? draggable : null
                            })}
                            <h6 style={{display: 'flex'}}>{madLibPrompt[0]}</h6>
                            </Droppable>
                    ))} */}
                    <h6 style={{display: 'flex'}}>{madLibPrompt[0][0]}</h6>
                    <Droppable key={'Adjective'} id={'Adjective'}>
                        <h6 style={{display: 'flex', color: 'yellow'}}>{'Adjective'}</h6>
                        {draggableList.map((draggable) => {
                            return draggables[draggable.props.id][0] === 'Adjective' ?
                                <div style={{
                                    marginTop: '-100px'
                                }}>
                                    {draggable}
                                </div>
                            : null
                        })}
                    </Droppable>
                    <h6 style={{display: 'flex'}}>{madLibPrompt[0][1]}</h6>
                    <Droppable key={'Noun'} id={'Noun'}>
                        <h6 style={{display: 'flex', color: 'yellow'}}>{'Noun'}</h6>
                        {draggableList.map((draggable) => {
                            return draggables[draggable.props.id][0] === 'Noun' ? 
                            <div style={{
                                    marginTop: '-100px'
                                }}>
                                    {draggable}
                            </div>
                            : null
                        })}
                    </Droppable>
                    <h6 style={{display: 'flex'}}>{madLibPrompt[0][2]}</h6>
                    <Droppable key={'Verb'} id={'Verb'}>
                        <h6 style={{display: 'flex', color: 'yellow'}}>{'Verb'}</h6>
                        {draggableList.map((draggable) => {
                            return draggables[draggable.props.id][0] === 'Verb' ? 
                            <div style={{
                                marginTop: '-100px'
                            }}>
                                {draggable}
                            </div>
                            : null
                        })}
                    </Droppable>
                </div>
                {prompt != '' ? 
                    <OpenAI
                        prompt={prompt}
                    /> : null  
                }
                <button onClick={() => {
                    setTempPrompt(getPrompts())
                }}>Generate New Prompt</button>
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
                        setPrompt("Un(a)(os) " + madLibPrompt[0] + " " + filled['Adjective'] + " " + madLibPrompt[1] + " " + filled['Noun'] + " " + madLibPrompt[2] + " " + filled['Verb'])
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