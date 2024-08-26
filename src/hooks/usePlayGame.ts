import { useCallback, useState } from "react"
import { Answer } from "../types/answer"
import { Status } from "../types/status"
import { ANSWERS } from "../constantes/answers"
import { STATUS } from "../constantes/status"



const usePLayGame = () => {
    const [status, setStatus] = useState<Status | null>(null)
    const [cpuAnswer, setCpuAnswer] = useState<Answer | null>(null)

    const generateCpuChoice = useCallback((choice: Answer) => {
        const randomIndex = Math.floor(Math.random() * ANSWERS.length);
        const cpuChoice = ANSWERS[randomIndex]
        
        setCpuAnswer(cpuChoice)

        if (choice === cpuChoice) {
            setStatus(STATUS.DRAW)
            setCpuAnswer(cpuChoice)
            return;
        }

        if (choice === ANSWERS[2] && cpuChoice === ANSWERS[0] || choice === ANSWERS[0] && cpuChoice === ANSWERS[1] || choice === ANSWERS[1] && cpuChoice === ANSWERS[2]) {
            setStatus(STATUS.WIN)
            return;
        } else {
            setStatus(STATUS.LOSE)
            return;
        }

    },[]);

    return {status,cpuAnswer,generateCpuChoice}
}



export default usePLayGame;