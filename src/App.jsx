import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const actions = [
  <FaHandRock size={100} />,
  <FaHandPaper size={100} />,
  <FaHandScissors size={100} />,
];
// const aiActions = [
//   <FaHandRock size={100} />,
//   <FaHandPaper size={100} />,
//   <FaHandScissors size={100} />,
// ];
export default function App() {
  const [result, setResult] = useState("");
  const [action, setAction] = useState();
  const [aiAction, setAiAction] = useState();
  // const aiAction = Math.floor(Math.random() * 2);
  // const  = aiActions[aiRandom];
  // if (action) {
  //   const results = {
  //     rock: "scissors",
  //     paper: "rock",
  //     scissors: "paper",
  //   };

  //   setResult(
  //     results[action] == aiAction
  //       ? "Win"
  //       : action === aiAction
  //       ? "Draw"
  //       : "Loss"
  //   );
  // }

  function handleGame(action) {
    setAction(action);
    setAiAction(Math.floor(Math.random() * 3));
  }

  console.log([action, aiAction]);

  return (
    <div className="flex justify-center items-center gap-3 flex-col text-center p-2">
      <h1 className="text-3xl font-semibold">Rock Paper Scissors</h1>
      <div>
        <h2 className="text-3xl p-3">Result: {result}</h2>
        <div className="flex gap-10 text-3xl items-center">
          You {actions[action]} - {actions[aiAction]} AI
        </div>
      </div>
      <div className="border-t w-full flex justify-center items-center flex-col">
        <h2 className="text-xl">Choose your action:</h2>
        <div className="flex gap-5 p-2">
          <FaHandRock
            size={100}
            className="cursor-pointer"
            onClick={() => handleGame(0)}
          />
          <FaHandPaper
            size={100}
            className="cursor-pointer"
            onClick={() => handleGame(1)}
          />
          <FaHandScissors
            size={100}
            className="cursor-pointer"
            onClick={() => handleGame(2)}
          />
        </div>
        {/* <button className="border py-2 px-4 bg-white text-black rounded-lg">
          Reset
        </button> */}
      </div>
    </div>
  );
}
