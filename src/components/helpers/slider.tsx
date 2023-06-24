import React, { useState } from "react";

import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
  `;

  const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #667df0;
    border-radius: 50%;
    cursor: grab;
    outline: none;
  `;

  const Thumb = (props:any, state:any) => (
    <StyledThumb {...props}></StyledThumb>
  );

  const StyledTrack = styled.div`
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    background: ${(props:any) => props.index === 1 ? "#D9D9D9" : "#667DF0"};
    border-radius: 999px;
    height: 3px
  `;
  const Track = (props:any, state:any) => (
    <StyledTrack {...props} index={state.index} />
  );

function Slider({
  minVal,
  maxVal,
  title,
  valPrefix,
  valSuffix,
  subtitle,
  step,
  value,
  setValue
}: {
  minVal: number;
  maxVal: number;
  value: number;
  setValue: (arg0: number) => void;
  title: string;
  step:number;
  valPrefix?: string;
  valSuffix?: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between items-center">
        <p className="text-3xl text-[#F5F5F8]">
          {title} <span className="text-lg">{subtitle}</span>
        </p>
        <p className="text-3xl">
          {valPrefix}
          {value}
          {valSuffix}
        </p>
      </div>
      <div className="">
        <StyledSlider
          defaultValue={value}
          min={minVal}
          max={maxVal}
          renderTrack={Track}
          renderThumb={Thumb}
          onChange={(value:any) => setValue(value)}
          step={step}
        />
      </div>
      <div className="flex justify-between">
        <p className="text-[#7D7D7D]">
          Min {valPrefix}
          {minVal}
          {valSuffix}
        </p>
        <p className="text-[#7D7D7D]">
          Max {valPrefix}
          {maxVal}
          {valSuffix}
        </p>
      </div>
    </div>
  );
}

export default Slider;
