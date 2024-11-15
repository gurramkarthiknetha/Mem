import React, { useState, useEffect } from 'react';
import Popup from './popup/Popup';

function RPS() {
    const [pop, setpop] = useState(false);
    const [score, setscore] = useState(0);
    const [game, setgame] = useState(true);
    const [choosen, setchoosen] = useState("");
    const [current, setcurrent] = useState(null);
    const [message, setmessage] = useState("");
    const [oppo, setoppo] = useState(null);

    let myarr = [
        "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png",
        "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png",
        "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
    ];
    let opp = myarr[oppo];

    useEffect(() => {
        if (!game) {
            setoppo(parseInt(Math.random() * 3));
        }
    }, [game]);

    useEffect(() => {
        if (oppo !== null && current !== null) {
            if ((oppo === 2 && current ===0) || (oppo === 1 && current ===2) || (oppo === 0 && current ===1) ) {
                setscore((prevScore) => prevScore + 1);
                setmessage("You won");
            } else if (oppo===current){
                setmessage("It's Draw");
            }else{
                setmessage("You Lost");
            }
        }
    }, [oppo, current]);

    return (
        <div className='h-[100vh] bg-[rgb(38,56,91)] w-[100vw] flex flex-col'>
            <div className='border mx-auto mt-10 my-2 border-white h-[10vh] rounded-lg flex justify-between w-[80vw]'>
                <div>
                    <h1 className='text-white ml-6 text-xl font-serif'>Rocks <br/> Paper <br/> Scissors</h1>
                </div>
                <div className=' bg-white mx-6 my-2 rounded-lg'>
                    <h1 className='text-black font-bold mx-10'>Score</h1>
                    <h1 className='text-4xl text-center'>{score}</h1>
                </div>
            </div>

            {game ? (
                <div>
                    <div className='flex justify-center mt-16'> 
                        <div>
                            <img src={myarr[0]} onClick={() => {
                                setchoosen(myarr[0]);
                                setgame(false);
                                setcurrent(0); 
                            }} 
                            className='w-[200px]' alt="Rock" />
                        </div>
                        <div>
                            <img src={myarr[2]} onClick={() => {
                                setchoosen(myarr[2]);
                                setgame(false);
                                setcurrent(2); 
                            }}
                            className='w-[200px] ml-28' alt="Scissors" />
                        </div>
                    </div>

                    <div className='mt-20'>
                        <img src={myarr[1]} onClick={() => {
                            setchoosen(myarr[1]);
                            setgame(false);
                            setcurrent(1); 
                        }} 
                        className='block mx-auto w-[200px]' alt="Paper" />
                    </div>
                </div>
            ) : (
                <div>
                    <div className='flex justify-center mt-16'> 
                        <div>
                            <h1 className='text-center text-3xl text-white'>You</h1>
                            <img src={choosen} className='w-[200px]' alt="Your Choice" />
                        </div>
                        <div>
                            <h1 className='text-center text-3xl ml-24 text-white'>Opponent</h1>
                            <img src={opp} className='w-[200px] ml-28' alt="Opponent Choice" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-white text-2xl m-1'>{message}</h1>
                        <button className='text-black w-[138px] bg-white rounded-lg p-2' onClick={() => {
                            setgame(true);
                            setcurrent(null);
                            setoppo(null);
                        }}>Play Again</button>
                    </div>
                </div>
            )}
            
            {pop && <Popup close={() => setpop(false)} />}
            <div className='flex justify-end mr-3'>
                <button
                    className="font-mono text-black w-36 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => setpop(true)} >Rules</button>
            </div>
        </div>
    );
}

export default RPS;
