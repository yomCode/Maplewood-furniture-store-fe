import { useState } from "react";



const ChangePassword = ({open}) =>{

    if(!open) return null

    return(
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center mx-auto p-4 shadow-md rounded-md fixed bg-[#21334f] bg-opacity-[0.3] bg-op z-10 top-0 left-0 ">
            <div className="flex flex-col w-[70%] lg:w-[50%] bg-[white] py-3 rounded-md">
                <div className="flex justify-end">
                    <h1 className="text-3xl mr-6">X</h1>
                </div>
                <form action="" className="flex flex-col gap-3 p-6">
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="password" name="currentPassword" id="" placeholder="Current Password" />
                        <label htmlFor="currentPassword">Current Password</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="password" name="newPassword" id="" placeholder="New Password" />
                        <label htmlFor="newPassword">New Password</label>
                    </div>
                    <div className="flex flex-col g-3">
                        <input className="border-b border-l px-1 " type="password" name="confirmNewPassword" id="" placeholder="Confirm New Password" />
                        <label htmlFor="confirmNewPassword">Current password</label>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="btn-success w-[50px] border-sm mt-2 p-1"> Save </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ChangePassword;