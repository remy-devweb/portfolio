import React from "react"
import { OIcon } from "./OIcon"
import { XIcon } from "./XIcon"

interface PlayerProp {
    handlePlayerX(): void,
    handlePlayerO(): void,
    handleNewGame(): void,
  }
  
  export const ChoosePlayer = ({handlePlayerX, handleNewGame, handlePlayerO }: PlayerProp) => {
  
  
    return (
      <div className="mt-20 md:mt-16 w-[500px] flex flex-col items-center justofy-center mx-auto">
        <div className="flex rounded-xl px-6 py-2 items-center justify-center space-x-4">
        <XIcon />
        <OIcon />
        </div>
        <div className="flex flex-col items-center py-8 w-[400px] md:w-[500px] h-64 md:h-72 rounded-xl bg-[#3f4045] mt-6 space-y-6 md:space-y-8">
          <p className="text-md text-gray-300 font-semibold  md:text-xl ">
            Please Select 
            {"  "}
            <span className="text-[#f6ae2d] text-xl font-bold ">X</span> 
            {"  "}
            or 
            {"  "}
            <span className="text-[#5da9e9] text-xl font-bold">O</span>
          </p>
          <div className="w-3/4 bg-gray-800  flex items-center justify-evenly h-24 rounded-xl p-6 ">
            <button onClick={handlePlayerX} className="focus:bg-gray-300 hover:bg-[#ffe1a9] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 ">
              <XIcon />
            </button>
            <button onClick={handlePlayerO} className="focus:bg-gray-300 hover:bg-[#bcfefb] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 " >
              <OIcon />
            </button>
          </div>
          <p className="text-md text-gray-500 font-semibold  md:text-xl "> Remember: X goes first</p>
        </div>
        <button onClick={handleNewGame} className="button hover:ring-2 hover:ring-yellow-300 rounded-xl mt-8 px-6 py-3 bg-[#5da9e9] hover:bg-[#f6ae2d]">
          Start Game
        </button>
      </div>
    )
  }