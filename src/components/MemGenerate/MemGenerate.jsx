import React, { useState } from 'react'

function MemGenerate() {
  const [imgurl,setimgurl]=useState("")
  const [toptext,settoptext]=useState("")
  const [Bottomtext,setBottomtext]=useState("")
  const [fontsize,setfontsize]=useState("")
  const [lastGeneratedMeme, setLastGeneratedMeme] = useState(null);

  function sub(e)
  {
    e.preventDefault();
    let newobj={
      imgurl:imgurl,
      toptext:toptext,
      Bottomtext:Bottomtext,
      fontsize:fontsize
    }
    setLastGeneratedMeme(newobj)
    console.log(newobj)
  }
          
  return (
    <div className='flex justify-evenly'>
    <div className=''>
        <h1 className='text-cyan-500 text-4xl text-center mt-11'>Meme Generator</h1>
        <form action="" onSubmit={sub}>
          <div className='mt-4'>
          <label htmlFor="imgurl" className="ml-2 font-semibold text-gray-700 text-sm">Img Url</label>
          <br />
          <input
            type="text" value={imgurl}  onChange={(e)=>setimgurl(e.target.value)} id="imgurl" placeholder="Enter imgurl..."
            className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          </div>
          <div className='mt-4'>
          <label htmlFor="toptext" className="ml-2 font-semibold text-gray-700 text-sm">toptext</label>
          <br />
          <input
            type="text"
            id="toptext"
            placeholder="Enter top text"
            value={toptext}
            onChange={(e)=>settoptext(e.target.value)}
            className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          </div>
          <div className='mt-4'>
          <label htmlFor="Bottomtext" className="ml-2 font-semibold text-gray-700 text-sm">Bottom text</label>
          <br />
          <input
            type="text"
            id="Bottomtext"
            placeholder="Enter Bottom text"
            value={Bottomtext}
            onChange={(e)=>setBottomtext(e.target.value)}
            className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          </div>
          <div className='mt-4'>
          <label htmlFor="Font" className="ml-2 font-semibold text-gray-700 text-sm">Font Size</label>
          <br />
          <input
            type="text"
            id="Font"
            placeholder="Enter Font size"
            value={fontsize}
            onChange={(e)=>setfontsize(e.target.value)}
            className="w-full p-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
          />
          </div>
          <button type='submit' className='p-3 m-6 block mx-auto bg-gray-500 rounded-lg '>Genetrate</button>
        </form>
    </div>
    <div className="secound">
        {
          lastGeneratedMeme &&
          <div>
          <h1 className={`text-${fontsize}`}>{toptext}</h1>
          <img src={imgurl} className='block  w-10/12  max-h-fit' alt="" />
          <h1 className={`text-${fontsize}`} >{Bottomtext}</h1>
          </div>
        }
      </div>
    </div>

  
  )
}

export default MemGenerate