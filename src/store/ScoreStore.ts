import { create } from "zustand";

type ScoreState={
    score: number;
    maxScore: number;
    incrementScore: () => void;
    resetScore: () => void;
}

const useScoreState = create<ScoreState>((set,get) =>({
    score:0,
    maxScore:localStorage.getItem('maxScore') ? Number(localStorage.getItem('maxScore') as string) : 0,
    incrementScore: () => {
        const newScore = get().score + 1;
        if(newScore > get().maxScore){
            localStorage.setItem('maxScore', newScore.toString())
            set(() =>({score:newScore , maxScore:newScore}))
        }else set(() => ({score:newScore}))
        
    },
    resetScore: () => set(() => ({score: 0})),
}))


export default useScoreState;