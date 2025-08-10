import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [gameNumber, setGameNumber] = useState(1);
  const [gameCounter, setGameCounter] = useState(23);
  // const [pokemonId, setPokemonId] = useState(1);
  const [fade, setFade] = useState(false);
  const [popup, setPopup] = useState(false);
  const [regionName, setRegionName] = useState('');
  const [guessName, setGuessName] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const [regionLock, setRegionLock] = useState(false);
  const [regionPop, setRegionPop] = useState(false);
  const [gameDisplay, setGameDisplay] = useState(false);

  useEffect(() => {

      if(gameCounter === 0){
      return() => {};
    }
    const interval = setInterval(() => {
      setGameCounter((gameCounter) => gameCounter - 1)
    }, 1000);

    return () => {
      clearInterval(interval)
    };
  });

    function gameEngine(){
    if(guessName === ''){
      alert('please enter a pokemon name');
    } else {

      const pokemonName = apiUrl.name;
      console.log(pokemonName);

      if(guessName === pokemonName){
        const audio = new Audio();
        audio.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${apiUrl.id}.ogg`
        const img = document.getElementById('pokemonSprite');
        img.src = apiUrl.sprites.versions['generation-v']['black-white'].animated.front_default;
        audio.play();
      }

      // timer runs until it's 0, then restart if wrong
    }
  }

  async function numberGen(){
    let num;
    console.log(regionLock ? "on" : "off");
    if(regionLock === true){
      if(regionName === 'Kanto'){
        num = Math.floor(Math.random() * (gameNumber)) + 1;
        console.log('done4')
      } 
      if(regionName === 'Johto'){
        num = Math.floor(Math.random() * (gameNumber - 152 + 1)) + 152;
        console.log('done8')
      } 
      if(regionName === 'Hoenn'){
        num = Math.floor(Math.random() * (gameNumber - 252 + 1)) + 252;
        console.log('done');
      } 
      if (regionName === 'Sinnoh'){
        num = Math.floor(Math.random() * (gameNumber - 387 + 1)) + 387;
        console.log('done2')
      } 
      if (regionName === 'Unova') {
      num = Math.floor(Math.random() * (gameNumber - 494 + 1)) + 494;
      console.log('done3')
      }
    } else if(regionLock === false) {
      num = Math.floor(Math.random() * (gameNumber)) + 1;
      console.log('everything')
    }

    console.log(num);
    // setPokemonId(num);
    // const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    // const respone = await api.json();
    // setApiUrl(respone);
  }

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

  function popupChange(){
    setRegionPop(false);
    setGameDisplay(true);
    numberGen();
  }

  function multi(){
    gameEngine();
  }

  return (
    <div className='w-screen h-screen bg-violet-950 flex'>
      <div className='w-2/5 h-2/3 border-solid border-2 relative
      left-[25%] top-[15%] bg-[url(src/pokemonWallpaper.png)]
      bg-cover bg-center opacity-62 flex justify-center'>
        <p className='
        absolute top-[14%] font-bold text-yellow-500 text-2xl hover:text-yellow-100
        '>Pokemon Guesser</p>
        {/* main game screen */}
        <div className={`${gameDisplay ? "opacity-70 transition-all delay-150 duration-300" : "opacity-0 invisible transition-all delay-150 duration-300"}
        border-2 border-solid bg-sky-50 w-full h-[75%] relative top-[25%]`}>
          <div className='flex flex-row absolute 
          w-25 mt-5 ml-5 p-2 justify-center'>
          <p className='text-2xl text-bold'>{gameCounter}</p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-lg font-bold mr-3'>Region: {regionName}</p>
            <p className='text-lg font-bold mr-3 '>Region Lock: {regionLock ? <span className='text-green-500'>✓</span> : <span className='text-red-500'>x</span> } </p>
          </div>
          {/* pokemon screen */}
          <div className='border-2 border-solid rounded-lg w-[45%] h-[50%] bg-red-500 absolute p-5 mt-3 left-[30%]
          flex justify-center items-center'>
            <img className='w-[75%]' id='pokemonSprite' src="" alt="pokemon" />
          </div>
          <input onChange={e => {setGuessName(e.target.value)}} className='border-2 border-solid rounded-2xl absolute bg-green-500
          left-[30%] top-[65%] mr-3 w-1/3 text-violet-500' type="text" />
          <button onClick={multi} className='cursor-pointer hover:bg-green-500 hover:animate-pulse border-2 border-solid absolute left-[64%] top-[65%]
          w-[12%] rounded-2xl active:bg-green-500'>guess</button>
        </div>
        {/* region lock popup */}
        <div className={`${regionPop ? "opacity-70 transition-all delay-150 duration-300" : "opacity-0 invisible transition-all delay-150 duration-300"} absolute top-[23%]
        w-5/8 h-1/4 border-2 border-solid bg-red-500 rounded-2xl`}>
          <p className='absolute left-[15%]'>Do you want to region lock?</p>
          <div className='rounded-2xl absolute w-full h-[85%] top-[15%]'>
            <input onChange={() => setRegionLock(true)} onClick={() => {popupChange()}} className='relative left-[40%] top-[5%]' type="checkbox" />
            <label className='relative left-[42%] top-[5%]' htmlFor="yes">Yes</label>
            <input onChange={() => setRegionLock(false)} onClick={() => {popupChange()}} className='relative left-[27%] top-[20%]' type="checkbox" />
            <label className='relative left-[30%] top-[20%]' htmlFor="no">No</label>
          </div>
        </div>
        <div className={`${fade ? "opacity-0 invisible transition-all delay-250 duration-300" : "opacity-100"} flex justify-center absolute top-[27%] bg-transparent w-full h-24`}>
          <button onClick={() => {setGameNumber(151); setRegionName('Kanto')}} className='cursor-pointer border-2 border-solid my-4 mx-4 w-20 rounded-xl bg-white hover:bg-green-400
          hover:animate-bounce hover:duration-300 focus:bg-green-400 focus:outline-2 focus:outline-green-400'>Kanto</button>
          <button onClick={() => {setGameNumber(251); setRegionName('Johto')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-lime-400
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:bg-lime-400 focus:outline-lime-400'>Johto</button>
          <button onClick={() => {setGameNumber(386); setRegionName('Hoenn')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-orange-600
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:bg-orange-600 focus:outline-orange-600'>Hoenn</button>
          <button onClick={() => {setGameNumber(493); setRegionName('Sinnoh')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-sky-400
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:bg-sky-400 focus:outline-sky-400'>Sinnoh</button>
          <button onClick={() => {setGameNumber(649); setRegionName('Unova')}} className='cursor-pointer my-4 mr-4 border-2 border-solid w-20 rounded-xl bg-white hover:bg-gray-500
          hover:animate-bounce hover:duration-300 focus:outline-2 focus:bg-gray-500 focus:outline-gray-500'>Unova</button>
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
