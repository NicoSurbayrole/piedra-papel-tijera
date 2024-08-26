import { Answer } from '../types/answer';

interface ChoiceProops {
    choice: Answer | null;
    onClick?: (answer: Answer) => void;
}

const Choice = ({choice,onClick}:ChoiceProops) =>{

    const onClickChoice = () => (choice && onClick) && onClick(choice);

    return(
        <div className="rounded-full text-9xl">
            <button className="bg-gray-400 hover:bg-gray-600 rounded-full shadow-lg h-48 w-48" onClick={onClickChoice}>
                {choice ?? "🤔"}
            </button>
        </div>
    )
}


export default Choice;