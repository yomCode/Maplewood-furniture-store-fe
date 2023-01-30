import { ArrowLeftTwoTone, ArrowRightAltOutlined, ArrowRightTwoTone } from "@mui/icons-material";
import { Empty } from "antd";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../context/authcontext";


export const ProcessPayment = ({closeModal}) => {

    const ref = useRef(null);
    const [amount, setAmount] = useState({});
    const { ProcessPayment, FetchTrx } = useAuth();
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
                        <input type="text" placeholder="Amount" name="amount" onChange={handleChange} id="" className="border w-[300px] h-[40px] text-[1.5rem] px-2 rounded-md" required />
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
    const { WalletDetails, getWalletDetails, GetTransactions, getTransactions, FetchTrx, getTrx, 
        totalPages, setPageNumber } = useAuth();
    const changePage = ({ selected }) => setPageNumber(selected)

    const [sortBy, setSortBy] = useState("date");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  
    const handleSortChange = event => {
      setSortBy(event.target.value);
    };
  
    const handleStartDateChange = event => {
      setStartDate(event.target.value);
    };
  
    const handleEndDateChange = event => {
      setEndDate(event.target.value);
    };
  
    let sortedTrx = [...getTrx];
    if (sortBy === "date") {
      sortedTrx.sort((a, b) => {
        const dateA = new Date(a.date + " " + a.time);
        const dateB = new Date(b.date + " " + b.time);
        return dateA < dateB ? 1 : -1;
      });
    } else if (sortBy === "amount") {
      sortedTrx.sort((a, b) => a.amount - b.amount);
    }

    let filteredTrx = sortedTrx.filter(transaction => {
        const trxDate = new Date(transaction.date + " " + transaction.time);
        return (
          (!startDate || trxDate >= new Date(startDate)) &&
          (!endDate || trxDate <= new Date(endDate))
        );
      });


    useEffect(() => {
        WalletDetails();
    }, [])


    useEffect(() => {
        FetchTrx()
    }, [startDate, sortBy])


    return(
        <div className="w-[100vw] h-[100vh] bg-[white] mt-[4.6rem]">
            <div className="flex flex-col gap-3 bg-[#7e6a17] text-[white] h-[30%] p-5">
                <h3 className="text-2xl">
                    {getWalletDetails.firstName + " " + getWalletDetails.lastName}
                </h3>
                <h6 className="text-[1.3rem] text-[#97ec97]">
                   <span className="text-[white]">Account Balance:</span>  {getWalletDetails.walletBalance}
                </h6>
                <button onClick={() => setOpenPay(!openPay)} type="submit" className="bg-[#090702] text-[white] py-2 px-4 rounded-md w-[180px] mt-[2rem]">Fund wallet</button>
                {openPay && <ProcessPayment closeModal={() => setOpenPay(!openPay)} />}
            </div>
            <div className="flex flex-col gap-[2rem] min-h-[80vh] w-[100%] p-5">
                <div className="flex justify-between items-center">
                    
                    <div className="flex gap-2">
                        <label htmlFor="sort">Sort By:</label>
                        <select id="sort" value={sortBy} onChange={handleSortChange} className='border-[#7e6a17] border-2 rounded-md px-3 py-1'>
                            <option value="date">Date & Time</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-2xl mx-auto">Transactions Summary</h5>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <label htmlFor="start-date">Start Date:</label>
                            <input
                                type="date"
                                id="start-date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className='border-2 rounded-md px-3 py-1 border-[#7e6a17]'
                            />
                        </div>
                        <div className="flex gap-2">
                            <label htmlFor="end-date">End Date:</label>
                            <input
                                type="date"
                                id="end-date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                className='border-2 rounded-md px-3 py-1 border-[#7e6a17]'
                            />
                        </div>
                    </div>
                </div>
                
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Reference</th>
                            <th>Purpose</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredTrx.sort((a, b) => {
                        const dateA = new Date(a.date + ' ' + a.time);
                        const dateB = new Date(b.date + ' ' + b.time);
                        return dateA < dateB ? 1 : -1;
                        }).map(transaction => {

                        return(
                            <tr key={transaction.id} >
                                <td>{ transaction.date }</td>
                                <td>{ transaction.time }</td>
                                <td> { transaction.reference }</td>
                                <td>{ transaction.purpose }</td>
                                <td>{ transaction.amount }</td>
                                <td>{ transaction.status }</td>
                            </tr>
                        )})
                    }
                    </tbody>
                    
                </table>
                { getTrx?.length == 0 && <Empty />}
                
                <ReactPaginate 
                    previousLabel={<ArrowLeftTwoTone />}
                    nextLabel={<ArrowRightTwoTone />}
                    pageCount={totalPages} 
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    
                />
            </div>
            
        </div>
    )
}

export default WalletDashboard;