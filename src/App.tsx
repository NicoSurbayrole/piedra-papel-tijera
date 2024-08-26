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
      return <GameOverModule/>
    default:
      return null
  }
}

function App() {
  const step = useGameStor(state => state.step);
  const module = useMemo(() => renderModule(step), [step]);
  

  return (
    <>
      <h1 className='text-center text-5xl font-bold pt-12'>Juego Piedra,Papel o Tijera</h1>
      <Score/>
      {module}
    </>
  )
}

export default App
