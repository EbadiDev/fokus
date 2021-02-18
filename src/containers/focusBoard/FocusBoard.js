import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { FocussedTask } from "./../../components/FocusBoard/FocussedTask";
import { EmptyFocusBox } from "./../../components/FocusBoard/EmptyFocusBox";
import { Soundscapes } from "./../../components/MusicBox/Soundscapes";

const FocusBoardContainer = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const TaskSummaryContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 276px;
    height: 90px;
    margin: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.4);
    background-color: #fff;
`;

const FocussedTaskContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 326px;
    margin: 20px;
    /* border-radius: 10px;
    box-shadow: 0 2px 10px rgba(166, 173, 201, 0.5);
    -webkit-box-shadow: 0 2px 10px rgba(166, 173, 201, 0.5);
    background-color:#f7faf7; */
`;

const MusicBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 90%;
    height: 200px;
    margin: 20px;
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
            {/* <TaskSummaryContainer>{totalTasksCount !== 0 ? <TaskSummary /> : <EmptyTaskSummary />}</TaskSummaryContainer> */}
            <FocussedTaskContainer>{focussedTaskIndex !== -1 ? <FocussedTask /> : <EmptyFocusBox />}</FocussedTaskContainer>
            <MusicBoxContainer>
                <Soundscapes />
            </MusicBoxContainer>
        </FocusBoardContainer>
    );
}
