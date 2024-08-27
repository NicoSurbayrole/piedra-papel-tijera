import { Answer } from '../types/answer';

interface ChoiceProops {
    choice: Answer | null;
    onClick?: (answer: Answer) => void;
}

const Choice = ({choice,onClick}:ChoiceProops) =>{

    const onClickChoice = () => (choice && onClick) && onClick(choice);

    return(
        <div className="rounded-full text-9xl border-black border-2 max-sm:border-none">
            <button className="bg-green-400  shadow-black hover:bg-slate-200 rounded-full shadow-lg h-48 w-48 max-sm:text-7xl max-sm:h-28 max-sm:w-28" onClick={onClickChoice}>
                {choice ?? "❔"}
            </button>
        </div>
    )
}


export default Choice;