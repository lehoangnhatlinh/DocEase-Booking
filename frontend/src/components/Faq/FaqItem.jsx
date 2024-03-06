import {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FaqItem = ({ item }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='p-3 lg:p-4 rounded-[12px] border border-solid border-[#D9DCE2] mb-4 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
            <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-textColor'>{item.question}</h4>
            <div className={` ${isOpen && 'bg-primaryColor text-white border-none'} w-7 h-7 rounded border border-solid border-[141F21] flex justify-center items-center`}>
                {isOpen ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </div>
        </div>
        {isOpen && 
            <div className='mt-4'>
                <p className='text-[14px] text-textColor leading-6 lg:leading-7 lg:text-[16px] font-[400]'>{item.content}</p>
            </div>
        }
    </div>
  )
}

export default FaqItem