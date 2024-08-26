import { useEffect, useState } from "react";
import Choice from "../components/Choice";
import usePLayGame from "../hooks/usePlayGame";
import useGameStor from "../store/GameStore";
import { Result } from "../components/Result";
import Button from "../components/Button";




const PlayModule = () => {
    const choice = useGameStor(state => state.choice);
    const { status, cpuAnswer, generateCpuChoice } = usePLayGame();
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        if (choice) generateCpuChoice(choice)
    }, [choice, generateCpuChoice])

    useEffect(() => {
        if (countDown > 0) {
            setTimeout(() => setCountDown(countDown - 1), 1000);
        }
    }, [countDown])

    if (countDown > 0) {
        return <span className="block h-48 text-5xl text-center content-center">{countDown}</span>
    }
    return (
        <>
            <Result status={status} />
            <div className="flex justify-around">
                <div className="flex flex-col align-center pointer-events-none">
                    <span className="text-3xl text-center pb-5 ">Jugador</span>
                    <Choice choice={choice} />
                </div>
                <div className="flex flex-col align-center pointer-events-none">
                    <span className="text-3xl text-center pb-5">CPU</span>
                    <Choice choice={cpuAnswer} />
                </div>
            </div>
            <Button status={status}/>
        </>
    )

}


export default PlayModule;