// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import Draggable from '../util/dnd/Draggable';
import Droppable from '../util/dnd/Droppable'
import {DndContext} from '@dnd-kit/core';

export default function MadLib() {
    const containers = ['A', 'B', 'C'];
    const [parent, setParent] = useState(null);
    const draggables = [
      { id: 'drag-1', label: 'Draggable 1' },
      { id: 'drag-2', label: 'Draggable 2' },
      { id: 'drag-3', label: 'Draggable 3' },
    ];
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
        <h1>hello</h1>
        {draggables.map((draggable) => (
          <Draggable key={draggable.id} id={draggable.id}>
            {draggable.label}
          </Draggable>
        ))}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? "Dropped!" : 'Drop here'}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Droppable>
        ))}
      </DndContext>
    );
  
    function handleDragEnd(event) {
      const {over} = event;
      const itemId = event.active.id;
  
      // If the item is dropped over a container, set it as the parent
      // otherwise reset the parent to `null`
      setParent(over ? over.id : null);
    }
  };