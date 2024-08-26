import useScoreState from "../store/ScoreStore";



const Score = () =>{
    const [score,maxScore] = useScoreState(state => [state.score, state.maxScore]);

    return(
        <div className="w-80 m-auto flex justify-around py-12">
            <h2 className="text-3xl">Puntaje: {score}</h2>
            <h2 className="text-3xl">Record: {maxScore}</h2>
        </div>
    )
}


export default Score;