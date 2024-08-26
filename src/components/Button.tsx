import { STATUS } from "../constantes/status";
import { STEPS } from "../constantes/steps";
import useGameStor from "../store/GameStore";
import useScoreState from "../store/ScoreStore";
import  { Status }  from "../types/status";

interface ButtonProps {
    status: Status | null;
}

const Button: React.FC<ButtonProps> = ({ status }) => {
    const setStep = useGameStor(state => state.setStep)
    const incrementScore = useScoreState(state => state.incrementScore);

    const onClick = () => {
        switch (status) {
            case STATUS.WIN:
                incrementScore()
                setStep(STEPS.SELECTION)
                break;
            case STATUS.LOSE:
                setStep(STEPS.GAME_OVER)
                break;
            case STATUS.DRAW:
                setStep(STEPS.SELECTION)
                break;
            default:
                return null;
        }
    }
    return (
        <button className="bg-green-400 border-black border-2 hover:bg-slate-200 text-black  rounded-lg w-40 py-3 text-xl m-auto  block font-serif" onClick={onClick}>Continuar</button>
    )
}

export default Button;