import {create} from 'zustand';
import {Answer} from '../types/answer';

type GameStoreState = {
    step: number;
    choice: Answer | null;
    setStep: (step: number) => void;
    setChoice: (choice: number) => void;
}


const useGameStor = create<GameStoreState>((set) =>({
    step: 0,
    choice: null,
    setStep: (step: number) => set({step}),
    setChoice: (choice: any) => set({choice})
}))



export default useGameStor;