import {BsPencilFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'

const AddressBookCard = ({fullName, address, phoneNumber}) => {
    return(
        <div className='p-3 shadow-md w-[330px] h-[180px] gap-2 border-[1px] rounded-md'>
            <div className='flex flex-col gap-2 pb-2'>
                <h5 className='text-[#7e6a17]'>{fullName}</h5>
                <div className='h-[40px]'>
                    <p className='text-[0.8rem] line-clamp-2 '>{address}</p>
                </div>
                <p>{phoneNumber}</p>
            </div>
            <hr className='' />
            <div className='flex items-center justify-between pt-2'>
                <div>
                    <p className='text-[#5151cc] text-[0.8rem] cursor-pointer'>SET AS DEFAULT</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button type='button' className='text-[#5151cc] text-1xl'>< BsPencilFill /></button>
                    <button type='button' className='text-[#de5757] text-1xl'>< MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default AddressBookCard;