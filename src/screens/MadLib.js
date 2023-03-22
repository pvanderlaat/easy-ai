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
        '1': null
    });
    var draggableList = []
    for (var m in draggables){
        draggableList.push(<Draggable id={m}>{m}</Draggable>)
    }

    return (
    <DndContext onDragEnd={handleDragEnd}>
        {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
            {/* {draggables === id ? draggableMarkup : 'Drop here'} */}
            </Droppable>
        ))}

        {
            
        }
        {draggableList.map((draggable) => {
            return draggables[draggable.props.id] === null ? draggable : null
            {/* return draggables[draggable.id] === null ? draggable : null */}
        })} 
        {/* {draggables === null ? draggableMarkup : null} */}

        
    </DndContext>
    );

    function handleDragEnd(event) {
    const {over} = event;
    if (over) {
        alert("over")
        // If the item is dropped over a container, set it as the draggables
        // otherwise reset the draggables to `null`
        setdraggables(over ? over.id : null);
    }
    }
    };