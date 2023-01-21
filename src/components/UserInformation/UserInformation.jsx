import { useState } from "react";
import ChangePassword from "./ChangePassword";

const UserInformation = () =>{

    const[openChangePassoword, setOpenChangePassword] = useState(false);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        address: "",
        phone: ""
    });

    const onChange = (e) => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    }



    return(
        <div className="flex flex-col gap-4 md:w-[50%] h-[100vh] p-5 ">
            <h1 className="mx-auto text-[2rem] self-center">User Information</h1>
            <div className="bg-[white] p-3 flex flex-col gap-3">
                <h2 className="text-2xl">Edit account Information</h2>
                <form action="" className=" flex flex-col gap-2">
                    {/* <Input type='text' placeholder='First Name' id='firstName' label='First Name'/>
                    <Input type='text' placeholder='Last Name' id='lastName' label='Last Name'/>
                    <Input type='email' placeholder='Email address' id='email' label='Email Address'/>
                    <Input type='text' placeholder='Date of Birth' id='dob' label='Date of Birth'/>
                    <Input type='text' placeholder='Address' id='address' label='Address'/>
                    <Input type='text' placeholder='Phone' id='phone' label='Phone Number'/> */}

                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="text" name="firstName" id=""  onChange={(e) => onChange(e)} placeholder="First Name" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="text" name="lastName" id="" onChange={(e) => onChange(e)} placeholder="Last Name" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="email" name="email" id="" onChange={(e) => onChange(e)} placeholder="Email address" />
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="text" name="dob" id=""  onChange={(e) => onChange(e)} placeholder="Date of Birth" />
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="text" name="address" id="" onChange={(e) => onChange(e)} placeholder="Home Address" />
                        <label htmlFor="address">Home address</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="text" name="phone" id="" onChange={(e) => onChange(e)} placeholder="Phone Number" />
                        <label htmlFor="phone">Mobile</label>
                    </div>

                    <div>
                        <p className="text-[red] mt-[2rem] cursor-pointer" onClick={() => setOpenChangePassword(true)} >Change password</p>
                    </div>
                    {openChangePassoword && <ChangePassword closeModal={() => setOpenChangePassword(false)} />}
                        
                    <button type="submit" className="btn-success w-[50px] self-center border-sm mt-2 p-1"> Save </button>

                </form>
            </div>
        </div>
    )
}


export default UserInformation;