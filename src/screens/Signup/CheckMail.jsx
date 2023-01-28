import { Link } from "react-router-dom";



const CheckMail = () => {

    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center mt-[4rem]">
            <div className="w-[500px] h-[300px] p-5 bg-[#7e6a17] text-[white]">
                <img src="" alt="" />
                <div className="flex flex-col gap-4">
                    <p>Verification link has been sent to you email, 
                        Check your email to comfirm registration...
                    </p>
                    <div>
                        <span>Did not recieve Verification link? </span><Link to='/' className="text-[#2d2403]">Resend token</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default CheckMail;