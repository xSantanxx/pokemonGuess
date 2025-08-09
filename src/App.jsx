import './App.css'
import { useState } from 'react'

function App() {

  const [gameNumber, setGameNumber] = useState(1);
  const [fade, setFade] = useState(false);
  const [popup, setPopup] = useState(false);
  const [regionName, setRegionName] = useState('');
  const [regionLock, setRegionLock] = useState(false);
  const [regionPop, setRegionPop] = useState(false);

  function mainGame(){
    if(gameNumber === 1){
      setPopup(!popup);

      setTimeout(() => {
        setPopup(false);
      }, 2000)
    } else {
      setFade(!fade);
      
      setTimeout(() => {
        setRegionPop(!regionPop);
      }, 1000)
    }
  }

  function inputCheck(){
    alert('done');
  }

  return (
    <div className='w-screen h-screen bg-violet-950 flex'>
      <div className='w-2/5 h-2/3 border-solid border-2 relative
      left-[25%] top-[15%] bg-[url(src/pokemonWallpaper.png)]
      bg-cover bg-center opacity-62 flex justify-center'>
        <p className='
        absolute top-[14%] font-bold text-yellow-500 text-xl hover:text-yellow-100
        '>Pokemon Guesser</p>
        {/* region lock popup */}
        <div className={`${regionPop ? "opacity-70 transition-all delay-150 duration-300" : "opacity-0 invisible transition-all delay-150 duration-300"} absolute top-[23%]
        w-5/8 h-1/4 border-2 border-solid bg-red-500 rounded-2xl`}>
          <p className='absolute left-[15%]'>Do you want to region lock?</p>
          <div className='rounded-2xl absolute w-full h-[85%] top-[15%]'>
            <input onChange={() => setRegionLock(true)} onClick={() => setRegionPop(!regionPop)} className='relative left-[40%] top-[5%]' type="checkbox" />
            <label className='relative left-[42%] top-[5%]' htmlFor="yes">Yes</label>
            <input onChange={() => setRegionLock(false)} onClick={() => setRegionPop(!regionPop)} className='relative left-[27%] top-[20%]' type="checkbox" />
            <label className='relative left-[30%] top-[20%]' htmlFor="no">No</label>
          </div>
        </div>
        <div className={`${fade ? "opacity-0 invisible transition-all delay-250 duration-300" : "opacity-100"} flex justify-center absolute top-[27%] bg-transparent w-full h-24`}>
          <button onClick={() => {setGameNumber(151); setRegionName('Kanto')}} className='cursor-pointer border-2 border-solid my-4 mx-4 w-20 rounded-xl bg-white hover:bg-green-400
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:outline-green-400'>Kanto</button>
          <button onClick={() => {setGameNumber(251); setRegionName('Johto')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-lime-400
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:outline-lime-400'>Johto</button>
          <button onClick={() => {setGameNumber(386); setRegionName('Hoenn')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-orange-600
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:outline-orange-600'>Hoenn</button>
          <button onClick={() => {setGameNumber(493); setRegionName('Sinnoh')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-sky-400
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:outline-sky-400'>Sinnoh</button>
          <button onClick={() => {setGameNumber(649); setRegionName('Unova')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-gray-500
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:outline-gray-500'>Unova</button>
        </div>
        <div className={`${fade ? "opacity-0 invisible transition-all delay-250 duration-300" : "opacity-100"} absolute flex top-[45%] w-35 h-25 justify-center`}>
          <button onClick={mainGame} className='cursor-pointer bg-green-500 border-4 border-solid rounded-2xl w-full h-full hover:bg-green-300
          hover:duration-300'>
            <p className='font-bold text-xl'>Play</p>
          </button>
        </div>
        <div className={`${popup ? "opacity-100" : "opacity-0 invisible"} duration-600 absolute flex top-[45%] border-2 border-solid rounded-xl bg-red-500 w-2/3 h-56
        items-center`}><p className='m-4
        text-lg font-bold'>
          Please select an option above to start playing
        </p>
        </div>
      </div>

    </div>
  )
}

export default App
