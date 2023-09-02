import React from 'react';
import './App.css';

function App() {
  return (
    <div className='flex-col justify-center items-center flex pt-20'>

      <div className="w-[400px] py-[15px] bg-zinc-800 rounded-[20px] flex-col justify-between items-center gap-[19px] inline-flex">
      <div className="text-white text-[45px] font-medium tracking-[4.50px]">MyTask’s</div>
      <div className="py-[5px] flex-col justify-start items-start gap-2.5 flex">
          <div className="w-[400px] h-[0px] border-2 border-slate-400"></div>
          <div className="h-[103px] p-2.5 flex-col justify-start items-start gap-5 flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Adicionar nova tarefa</div>
                  <div className="justify-center items-center gap-2.5 inline-flex">
                      <input className="w-[340px] h-[50px] relative rounded-tr-[10px] rounded-bl-[10px] border border-slate-400 bg-zinc-800  text-white text-lg font-normal pl-2" />
                  </div>
              </div>
          </div>
      </div>
      <div className="w-[215px] justify-start items-center gap-2 inline-flex">
          <div className="text-white text-lg font-normal">Filtrar:</div>
          <div className="grow shrink basis-0 self-stretch px-5 py-[3px] bg-slate-400 rounded-[5px] justify-start items-center gap-[30px] flex">
              <div className="w-5 h-5 relative">
                  <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
              </div>
              <div className="text-white text-lg font-normal">À Fazer</div>
          </div>
      </div>
      <div className="flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border border-slate-400 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Fazer meu portifólio</div>
              </div>
              <div className="w-[30px] h-[30px] relative">
                  <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-zinc-300" >
                  <img src="./task_alt.svg" alt="" />
                  </div>
              </div>
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border border-slate-400 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Fazer meu portifólio</div>
              </div>
              <div className="w-[30px] h-[30px] relative">
                  <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-zinc-300" />
              </div>
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border border-slate-400 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Fazer meu portifólio</div>
              </div>
              <div className="w-[30px] h-[30px] relative">
                  <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-zinc-300" />
              </div>
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border border-slate-400 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Fazer meu portifólio</div>
              </div>
              <div className="w-[30px] h-[30px] relative">
                  <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-zinc-300" />
              </div>
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border border-slate-400 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Fazer meu portifólio</div>
              </div>
              <div className="w-[30px] h-[30px] relative">
                  <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-zinc-300" />
              </div>
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border border-slate-400 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal">Fazer meu portifólio</div>
              </div>
              <div className="w-[30px] h-[30px] relative">
                  <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-zinc-300" />
              </div>
          </div>
      </div>
  </div>
  </div>
  );
}

export default App;
