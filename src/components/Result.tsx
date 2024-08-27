import { Status } from "../types/status";
import { STATUS } from "../constantes/status";
import winnerAudio from "../sonidos/winner.mp3"
import loserAudio from "../sonidos/loser.mp3"
import drawAudio from "../sonidos/draw.mp3"

interface ResultProps {
    status: Status | null;
}




export const Result: React.FC<ResultProps> = ({ status }) => {
    switch (status) {
        case STATUS.WIN:
            return (
                <>
                    <span className="block text-3xl text-center">Ganaste</span>
                    <audio typeof="audio/mpeg" src={`${winnerAudio}`} autoPlay></audio>
                </>
            )
        case STATUS.LOSE:
            return (
                <>
                    <span className="block text-3xl text-center">Perdiste</span>
                    <audio typeof="audio/mpeg" src={`${loserAudio}`} autoPlay></audio>
                </>

            )
        case STATUS.DRAW:
            return (
                <>
                    <span className="block text-3xl text-center">Empataste</span>
                    <audio typeof="audio/mpeg" src={`${drawAudio}`} autoPlay></audio>
                </>
            )
        default:
            return null;
    }
}