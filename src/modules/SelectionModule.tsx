import Choice from "../components/Choice";
import { ANSWERS } from "../constantes/answers";
import { STEPS } from "../constantes/steps";
import useGameStore from '../store/GameStore';


const SelectionModule = () => {
    const [setChoice, setStep] = useGameStore(state => [state.setChoice, state.setStep])

    const onClickChoice = (choice: any) => {
        setChoice(choice);
        setStep(STEPS.PLAY);
    }


    return (
        <div className="flex row justify-around max-sm:block text-center">
            {ANSWERS.map((answers) => <Choice key={answers} choice={answers} onClick={onClickChoice} />)}
        </div>
    )
}


export default SelectionModule;