import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const actions = {
  rock: <FaHandRock size={100} />,
  paper: <FaHandPaper size={100} />,
  scissors: <FaHandScissors size={100} />,
};
export default function App() {
  const [result, setResult] = useState("");
  const [action, setAction] = useState();
  const [aiAction, setAiAction] = useState();

  function handleGame(action) {
    const results = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    const aiRandom = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];
    setAction(action);
    setAiAction(aiRandom);
    if (results[action] === aiRandom) {
      setResult("Win");
    } else if (action === aiRandom) {
      setResult("Tie");
    } else {
      setResult("Loss");
    }
  }

  console.log([action, aiAction]);

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center p-2">
      <h1 className="text-3xl">Rock Paper Scissors</h1>
      <div className="flex justify-center items-center gap-3 flex-col text-center">
        {action && aiAction && result && (
          <div>
            <h2 className="text-3xl p-3">
              Result:{" "}
              <span
                className={
                  "text-4xl " +
                  (result === "Win"
                    ? "text-green-500"
                    : result === "Tie"
                    ? "text-gray-400"
                    : result === "Loss"
                    ? "text-red-500"
                    : "")
                }
              >
                {result}
              </span>
            </h2>
            <div className="flex gap-10 text-3xl items-center">
              You {actions[action]} - {actions[aiAction]} AI
            </div>
          </div>
        )}
        <div className="w-full flex justify-center items-center gap-3 flex-col">
          <h2 className="text-xl">Choose your action:</h2>
          <div className="flex gap-5 p-2">
            <FaHandRock
              size={100}
              className="cursor-pointer"
              onClick={() => handleGame("rock")}
            />
            <FaHandPaper
              size={100}
              className="cursor-pointer"
              onClick={() => handleGame("paper")}
            />
            <FaHandScissors
              size={100}
              className="cursor-pointer"
              onClick={() => handleGame("scissors")}
            />
          </div>
          <button
            className="border py-2 px-4 bg-white text-black rounded-lg"
            onClick={() => {
              setResult("");
              setAction("");
              setAiAction("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <h1 className="text-3xl">Thanks for checking out💖</h1>
    </div>
  );
}
