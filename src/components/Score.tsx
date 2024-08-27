import useScoreState from "../store/ScoreStore";



const Score = () =>{
    const [score,maxScore] = useScoreState(state => [state.score, state.maxScore]);

    return(
        <div className="w-80 m-auto flex justify-around pt-12 max-sm:pt-10">
            <h2 className="text-3xl font-serif">Puntaje: {score}</h2>
            <h2 className="text-3xl font-serif">Record: {maxScore}</h2>
        </div>
    )
}


export default Score;