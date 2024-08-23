"use client";
import Link from "next/link";
import React, { useState } from "react";

function DetailUI({ response }: any) {
  const { url, id } = response;

  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState(null);
  // console.log(generatedMeme.data.url);

  const onSubmit = async () => {
    if (!response || !inp1 || !inp2) {
      alert("Please enter all the fields");
    }
    const userName = "Faizanraza";
    const userPassword = "imgFlip!@1122";
    const mainUrl = `https://api.imgflip.com/caption_image?username=${userName}&password=${userPassword}&template_id=${id}&text0=${inp1}&text1=${inp2}`;

    try {
      const res = await fetch(mainUrl, {
        method: "POST",
      });
      const newData = await res.json();

      setGeneratedMeme(newData.data);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <>
      {!generatedMeme ? (
        <>
          <div className="flex-col w-1/2 sm:w-1/3 m-auto md:w-1/4 mb-5">
            <div>
              <img className="w-full my-5" src={url} />
            </div>
            <div className="flex-col flex w-full mb-5  justify-center  m-auto">
              <label>Text 1:</label>
              <input
                onChange={(e) => setInp1(e.target.value)}
                className="border bg-white mb-3 p-1 rounded border-[#62708b]"
                type="text"
                name=""
              />
              <label>Text 2:</label>
              <input
                onChange={(e) => setInp2(e.target.value)}
                className="border bg-white mb-3 p-1 rounded border-[#62708b]"
                type="text"
                name=""
              />
            </div>
            <div className="w-[60%] flex items-center">
              <button
                className=" bg-[#8392b1] hover:bg-[#62708b] text-white font-bold py-2 px-4 rounded flex items-center m-auto"
                onClick={onSubmit}
              >
                Generate
              </button>
              
            <Link href={"/"} className=" bg-[#8392b1] hover:bg-[#62708b] text-white font-bold py-2 px-4 rounded flex items-center m-auto">
            Back  
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-col w-1/4 m-auto  mb-10">
          <div className="flex   mb-10">
            <img className="w-full mt-5" src={generatedMeme.url} />
          </div>
          <button
            onClick={() => setGeneratedMeme(null)}
            className="bg-[#8392b1] hover:bg-[#62708b] text-white font-bold py-2 px-4 rounded flex mt-3"
          >
            Back
          </button>
        </div>
      )}
    </>
  );
}

export default DetailUI;
