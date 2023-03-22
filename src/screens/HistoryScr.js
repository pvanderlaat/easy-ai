// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import Draggable from '../util/dnd/Draggable';
import Droppable from '../util/dnd/Droppable'
import {DndContext, MultipleContainers} from '@dnd-kit/core';


export default function HistoryScr() {
    const [screen, setScreen] = useContext(ScreenContext);
    function render() {
        return (
            <button style={{
                position: 'absolute',
                left: '0',
                top: '0'
            }} onClick={() => { setScreen("home") }}>Home</button>
        )
    }

    return render();
};