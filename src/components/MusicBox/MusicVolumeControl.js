import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-input-slider";
import { updateSoundscapeVolume } from "./../../containers/taskBoard/taskBoardSlice";
import { debounce } from "./../../helpers";
import styled from "styled-components";

const VolumeFeedbackText = styled.div`
    span{
        font-weight:bold;
        font-size:0.7em;
    }
`;

export function MusicVolumeControl({ isDisabled }) {
    const ssVolume = useSelector((s) => s.tasks.soundscape.volume);
    const dispatch = useDispatch();
    const [volume, setVolume] = useState(ssVolume * 100);

    const debouncedUpdateSoundscapeVolume = debounce((vol) => {
        dispatch(updateSoundscapeVolume(vol / 100));
    }, 200);

    function onVolumeChangeHandler(vol) {
        setVolume(vol);
        debouncedUpdateSoundscapeVolume(vol);
    }

    return (
        <>
            <Slider
                axis="x"
                disabled={isDisabled}
                xstep={5}
                xmin={0}
                xmax={100}
                x={volume}
                onChange={({ x }) => onVolumeChangeHandler(x)}
                styles={{
                    track: {
                        backgroundColor: "#c1c1d7",
                        width: "100%",
                    },
                    active: {
                        backgroundColor: "#0000cd",
                    },
                    disabled: {
                        opacity: 0.2,
                    },
                }}
            />
            {/* <VolumeFeedbackText>
                <span>{volume}</span>
            </VolumeFeedbackText> */}
        </>
    );
}
