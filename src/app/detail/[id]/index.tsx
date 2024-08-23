"use client";
import React, { useState } from "react";

function DetailUI({ response }: any) {
  const { url, id } = response;


  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState(null);
  // console.log(generatedMeme.data.url);
  
  const  onSubmit = async () => {
    if (!response || !inp1 || !inp2) {
      alert("Please enter all the fields");
    }
    const userName = "Faizanraza";
    const userPassword = "imgFlip!@1122";
    const mainUrl = `https://api.imgflip.com/caption_image?username=${userName}&password=${userPassword}&template_id=${id}&text0=${inp1}&text1=${inp2}`;
  
    try{
  const res = await fetch(mainUrl,{
    method: "POST",
  });
  const newData = await res.json();

  setGeneratedMeme(newData.data)
}catch(e:any){
  alert(e.message);

  }
  
  };

  return (
    <>
      {!generatedMeme ? (
        <>
        <div className="flex items-center justify-center mb-10">
        <img className="w-1/4 mt-5" src={url} />
      </div>
      <div className="flex-col flex w-1/4 justify-center  m-auto">
        <label>Text 1:</label>
        <input
          onChange={(e) => setInp1(e.target.value)}
          className="border bg-white mb-3 p-1 rounded border-blue-400"
          type="text"
          name=""
        />
        <label>Text 2:</label>
        <input
          onChange={(e) => setInp2(e.target.value)}
          className="border bg-white mb-3 p-1 rounded border-blue-400"
          type="text"
          name=""
        />
      </div>
      <button onClick={onSubmit}>Generate</button>
      </>)
:<div className="flex items-center justify-center mb-10">
<img className="w-1/4 mt-5" src={generatedMeme.url} />
</div>}
    </>
  );
}

export default DetailUI;
