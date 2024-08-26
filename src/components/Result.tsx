import { Status } from "../types/status";
import { STATUS } from "../constantes/status";

interface ResultProps {
    status: Status | null;
}




export const Result: React.FC<ResultProps> = ({ status }) => {
    switch (status) {
        case STATUS.WIN:
            return <span className="block text-3xl text-center">Ganaste</span>
        case STATUS.LOSE:
            return <span className="block text-3xl text-center">Perdiste</span>
        case STATUS.DRAW:
            return <span className="block text-3xl text-center">Empataste</span>
        default:
            return null;
    }
}