import  React, { useState } from 'react';
import './App.css';
import adicionar from './assets/adicionar.svg';
import { ListItem } from './components/ListItem';






function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);


  return (
    <div className='flex-col justify-center items-center flex pt-20'>

      <div className="w-[450px] py-[15px] bg-zinc-800 rounded-[20px] flex-col justify-between items-center gap-[19px] inline-flex">
      <div className="text-white text-[45px] font-medium tracking-[4.50px] vibrate">MyTask’s</div>
      <div className="py-[5px] flex-col justify-start items-start gap-2.5 flex">
          <div className="w-[400px] h-[0px] border-2 border-slate-400" />
          <div className="h-[103px] p-2.5 flex-col justify-start items-start gap-5 flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Adicionar nova tarefa</div>
                  <div className="justify-center items-center gap-2.5 inline-flex">
                      <input id="addNew" className="w-[340px] h-[50px] relative rounded-tr-[10px] rounded-bl-[10px] border border-slate-400 bg-zinc-800  text-white text-lg font-normal pl-2"  value={inputValue} onChange={(event) => setInputValue((event.target.value))} />
                      <img src={adicionar} alt="" onClick={()=>{
                        if(tasks.length<5){
                          tasks.push(inputValue);
                        }
                        setInputValue("");
                                          }}/>
                  </div>
              </div>
          </div>
      </div>
      <div className="w-[400px] h-[0px] border-2 border-slate-400" />

      <div className="w-[215px] justify-start items-center gap-2 inline-flex">
          <div className="text-white text-lg font-normal">Filtrar:</div>
          <select className=" text-white text-lg font-normal grow shrink basis-0 self-stretch px-5 py-[3px] bg-slate-400 rounded-[5px] justify-start items-center gap-[30px] flex">
            <option value="a fazer">A fazer</option>
            <option value="feito">Feito</option>
            <option value="a fazer">A fazer</option>
          </select>
              
      </div>



      <div className="flex-col justify-start items-start gap-2.5 flex">
        {tasks.map((item, index)=> (
          <ListItem valor={item} />
        ))}


          
          
      </div>
  </div>
  </div>
  );
}

export default App;
