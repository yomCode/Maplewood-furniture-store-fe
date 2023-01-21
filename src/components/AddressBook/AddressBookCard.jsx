import {BsPencilFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'

const AddressBookCard = ({fullName, address, phoneNumber}) => {
    return(
        <div className='p-3 shadow-md w-[350px] h-[170px] gap-2 rounded-md'>
            <div className='flex flex-col gap-2 pb-2'>
                <h5>{fullName}</h5>
                <p>{address}</p>
                <p>{phoneNumber}</p>
            </div>
            <div className='flex items-center justify-between pt-2 border-t'>
                <div>
                    <p className='text-[#5151cc]'>SET AS DEFAULT</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button type='button' className='text-[#5151cc] text-2xl'>< BsPencilFill /></button>
                    <button type='button' className='text-[#de5757] text-2xl'>< MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default AddressBookCard;