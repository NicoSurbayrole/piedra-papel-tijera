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
        <button className="bg-gray-400 hover:bg-gray-600 rounded-lg w-40 py-3 text-xl m-auto text-white block" onClick={onClickPlayAgain}>Jugar De Nuevo</button>   
    )
}


export default GameOverModule;