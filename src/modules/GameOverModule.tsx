import { STEPS } from "../constantes/steps";
import useGameStor from "../store/GameStore";
import useScoreState from "../store/ScoreStore";



const GameOverModule = () => {
    const setSteps = useGameStor(state => state.setStep)
    const resetScore = useScoreState(state => state.resetScore)

    const onClickPlayAgain = () => {
        setSteps(STEPS.SELECTION)
        resetScore()
    }

    return(
        <button className="bg-green-400 border-black border-2 hover:bg-slate-200 text-black  rounded-lg w-40 py-3 text-xl m-auto  block font-serif" onClick={onClickPlayAgain}>Jugar De Nuevo</button>   
    )
}


export default GameOverModule;