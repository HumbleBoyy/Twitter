import { suggestionsList } from '../../hooks/useRoute'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Suggestion = () => {
  return (
    <div className='w-full p-2 mt-10 bg-slate-100'>
         <h2 className='flex items-center font-bold justify-between mb-2 text-[24px]'>You might like</h2> 
         <ul className='w-full h-auto overflow-y-auto flex flex-col gap-1'>
              {suggestionsList.map(item => (
                <li className='flex flex-col h-auto p-2 bg-slate-200' key={item.id}>
                   <div className='flex items-center justify-between'>
                      <img src={item.avatarImage} alt="userImage" />
                      <div className='flex flex-col'>
                         <h2 className='text-[20px] font-semibold'>{item.name}</h2>
                         <p className='text-[15px] text-slate-500'>@{item.userName}</p>
                      </div>
                      <Button text={"Follow"} extraClass={"!h-[35px] !w-[100px] !bg-black"}/>
                   </div>
                </li>  
              ))}
        </ul>    
        <Link to={"#"} className='text-[20px] text-blue-500 py-5 hover:text-blue-400'>Show more</Link>  
    </div>
  )
}

export default Suggestion
