import { useEffect, useRef } from "react";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../context/authcontext";


export const ProcessPayment = ({closeModal}) => {

    const ref = useRef(null);
    const [amount, setAmount] = useState({});
    const { ProcessPayment } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        setAmount({...amount, [e.target.name]: e.target.value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        ProcessPayment(amount).then(() => setIsLoading(false))
    }

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          closeModal();
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [handleClickOutside]);



    return(

        <div className="w-[100%] h-[400px] flex justify-center items-center fixed">
            <div ref={ref} className="flex flex-col gap-8 items-center absolute text-[black] bg-[#211b05] p-6">
                <form action="" className="flex flex-col items-center">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="amount" className="text-[white]">Enter amount:</label>
                        <input type="text" name="amount" onChange={handleChange} id="" className="border w-[300px] h-[40px] text-[1.5rem] px-2" />
                    </div>
                    <div>
                    <button type="submit" onClick={handleSubmit} className="bg-[#7e6a17] text-[white] py-2 px-4 rounded-md w-[260px] mt-[2rem]">Preoceed to payment</button>
                    </div>
                </form>
                <div>
                    <img className="w-[150px]" src="../images/cards.png" alt="" />
                </div>  

            {isLoading && <Loader />}
            </div>  
            
        </div>
        
    )
}



const WalletDashboard = () => {

    const [openPay, setOpenPay] = useState(false);
    const { WalletDetails, getWalletDetails } = useAuth();



    useEffect(() => {
        WalletDetails();
    }, [])


    return(
        <div className="w-[100vw] h-[100vh] bg-[white] mt-[4.6rem]">
            <div className="flex flex-col gap-3 bg-[#7e6a17] text-[white] h-[300px] p-5">
                <h3 className="text-2xl">
                    {getWalletDetails.firstName + " " + getWalletDetails.lastName}
                </h3>
                <h6 className="text-[1.3rem]">
                   <span>Account Balance:</span>  {getWalletDetails.walletBalance}
                </h6>
                <button onClick={() => setOpenPay(!openPay)} type="submit" className="bg-[#090702] text-[white] py-2 px-4 rounded-md w-[180px] mt-[2rem]">Fund wallet</button>
                {openPay && <ProcessPayment closeModal={() => setOpenPay(!openPay)} />}
            </div>
            <div className="flex flex-col gap-[2rem] p-5">
                <h5 className="text-2xl mx-auto">Transactions Summary</h5>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Reference</th>
                            <th>Purpose</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>12/10/2022</td>
                            <td> mju765edcvn</td>
                            <td>Fund wallet</td>
                            <td>20000</td>
                            <td>successful</td>
                        </tr>
                        <tr >
                            <td>02/12/2022</td>
                            <td>hjbd2ebde2</td>
                            <td>order</td>
                            <td>100000</td>
                            <td>failed</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            
        </div>
    )
}

export default WalletDashboard;