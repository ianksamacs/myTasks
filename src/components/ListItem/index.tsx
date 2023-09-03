import concluir from '../../assets/concluir.svg';
import editar from '../../assets/editar.svg';
import deletar from '../../assets/deletar.svg';

export const ListItem = (valor: String & any) =>{
  return (
    <div className="justify-start items-center gap-0.5  inline-flex">
      <div className="test texto w-[330px] h-[50px] px-[67px] py-3.5 rounded-tl-[10px] rounded-br-[10px] border bg-zinc-800 border-slate-400 justify-start items-center gap-2.5 flex text-white text-xl font-normal select-none" >
        {valor['valor']}
        
      </div>
      <div className="w-[30px] h-[30px] relative ml-0.5">
          <div className="w-[30px] h-[30px] left-0 top-0 absolute" >
          <img src={concluir} alt="Apagar" />
          </div>
      </div>
      <div className="w-[30px] h-[30px] relative">
          <div className="w-[30px] h-[30px] left-0 top-0 absolute" >
          <img src={editar} alt="" />
          </div>
      </div>
      <div className="w-[30px] h-[30px] relative">
          <div className="w-[30px] h-[30px] left-0 top-0 absolute" >
          <img src={deletar} alt="" />
          </div>
      </div>
    </div>
  )
}