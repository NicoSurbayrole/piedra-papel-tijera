import { useMemo } from 'react';
import { STEPS } from './constantes/steps';
import PlayModule from './modules/PLayModule';
import SelectionModule from './modules/SelectionModule';
import useGameStor from './store/GameStore';
import GameOverModule from './modules/GameOverModule';
import Score from './components/Score';

const renderModule = (step: STEPS) => {
  switch (step) {
    case STEPS.SELECTION:
      return <SelectionModule />
    case STEPS.PLAY:
      return <PlayModule />
    case STEPS.GAME_OVER:
      return <GameOverModule />
    default:
      return null
  }
}

function App() {
  const step = useGameStor(state => state.step);
  const module = useMemo(() => renderModule(step), [step]);


  return (
    <>
      <div className='box-border bg-green-600 h-lvh pt-20'>
      <h1 className='bg-green-600 text-center text-5xl font-bold pb-12 font-serif max-sm:pb-0 max-sm:text-3xl'>Juego Piedra,Papel o Tijera</h1>
        {module}
        <Score  />
      </div>
    </>
  )
}

export default App
