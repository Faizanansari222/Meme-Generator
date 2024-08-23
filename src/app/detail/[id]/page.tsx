export default async function Detail(params: any) {

  const id= params;
  console.log(id.params);

  const res = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await res.json();
  let allItems = data.data.memes;
  const item = allItems.find((itempm: any) => itempm.id === id.params.id);

  return (<>
    <div className="flex items-center justify-center mb-10">
      
      <img className="w-1/4 mt-5" src={item.url}/>

    </div>
    <div className="flex-col flex w-1/4 justify-center  m-auto">
    <label >Text 1:</label>
    <input className="border bg-white mb-3 p-1 rounded border-blue-400" type="text" name=""  />  
    <label >Text 2:</label>
    <input className="border bg-white mb-3 p-1 rounded border-blue-400" type="text" name=""  />  
    </div>
      
    </>
  );
}
