import { Link } from "react-router-dom";

const Card = (props) =>{
    return(
        <div className=" bg-[#f5f5f5] w-[390px] h-[165px]" >
            <div className='flex flex-col-2'>
                <div className='flex flex-col basis-1/2 p-4'>
                    <h5 className="text-[1rem] text-[#d8a600]">{props.title}</h5>
                    <h3 className="text-[1.2rem] font-bold  mt-2">{props.pName}</h3>
                    <Link className="text-[0.9rem] mt-3" to="/product">SHOP NOW &#8594;</Link>
                </div>
                <div className='w-[100px] basis-1/2'>
                    <img className="w-[150px] h-[150px] sm:w-[200px] " src={props.image} alt="#" />
                </div>
            </div>
        </div>
        
    );

}

export default Card;