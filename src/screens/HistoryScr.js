// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import Draggable from '../util/dnd/Draggable';
import Droppable from '../util/dnd/Droppable'
import {DndContext, MultipleContainers} from '@dnd-kit/core';
import { getHistory } from '../util/History';


export default function HistoryScr() {
    const [screen, setScreen] = useContext(ScreenContext);
    const history = getHistory()
    console.log(history)
    function render() {
        return (
            <div>
                <button style={{
                    position: 'absolute',
                    left: '0',
                    top: '0'
                }} onClick={() => { setScreen("home") }}>Home</button>

                {history.map((item,index) => (
                    <div key = {index}>
                        <h1>{item.prompt}</h1>
                        <img
                            src={item.Image}
                            style={{
                                width:'20vw',
                                marginTop: '100px'
                            }}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return render();
};