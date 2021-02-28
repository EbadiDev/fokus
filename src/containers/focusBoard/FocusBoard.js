import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { FocussedTask } from "./../../components/FocusBoard/FocussedTask";
import { EmptyFocusBox } from "./../../components/FocusBoard/EmptyFocusBox";
import { Soundscapes } from "./../../components/MusicBox/Soundscapes";
import { DayDate } from "../../components/FocusBoard/DayDate";

const FocusBoardContainer = styled.div`
    flex: 1 1 0;
    min-width: 346px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0 0 0 20px;
    height:100%;
    /* background-color:silver; */
`;

const FocussedTaskContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-direction: column;
    width: 80%;
    max-width: 326px;
    height: 226px;
    margin: 10px 0;
    /* background-color: green; */
`;

const MusicBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    max-width: 326px;
    height: 186px;
    margin: 10px 0;
    /* border-radius: 10px;
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    background-color: #f7f7fa; */
`;

export function FocusBoard() {
    const focussedTaskIndex = useSelector((state) => state.tasks.meta.focussedTaskIndex);
    const totalTasksCount = useSelector((s) => s.tasks.taskArray.length);
    return (
        <FocusBoardContainer>
            <FocussedTaskContainer>
                {/* <DayDate /> */}
                {focussedTaskIndex !== -1 ? <FocussedTask /> : <EmptyFocusBox />}
            </FocussedTaskContainer>
            <MusicBoxContainer>
                <Soundscapes />
            </MusicBoxContainer>
        </FocusBoardContainer>
    );
}
