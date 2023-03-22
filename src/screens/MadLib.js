// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import Draggable from '../util/dnd/Draggable';
import Droppable from '../util/dnd/Droppable'
import {DndContext, MultipleContainers} from '@dnd-kit/core';


export default function MadLib() {
    const containers = ['A', 'B', 'C'];
    const [draggables, setdraggables] = useState({
        '0': null,
        '1': null,
        '2': null,
        '3': null,
        '4': null,
        '5': null,
        '6': null,
        '7': null,
        '8': null,
        '9': null,
        '10': null,
        '11': null,
        '12': null,
        '13': null,
        '14': null,
        '15': null,
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
                {draggables['0']}
                {draggables['1']}
                <br></br>
                ----
                {containers.map((id) => (
                    // We updated the Droppable component so it would accept an `id`
                    // prop and pass it to `useDroppable`
                    <Droppable key={id} id={id}>
                    Drop here {id}
                    {draggableList.map((draggable) => {
                        return draggables[draggable.props.id] === id ? draggable : null
                    })}
                    </Droppable>
                ))}

                {
                    
                }
                {draggableList.map((draggable) => {
                    return draggables[draggable.props.id] === null ? draggable : null
                })} 

                
            </DndContext>
        )
    }

    function handleDragEnd(event) {
        const {over} = event;
        if (over) {
            let newDraggables = { ...draggables}
            newDraggables[event.active.id] = over.id 
            setdraggables(newDraggables);
            console.log(draggables)
        }
    }

    return render();
};