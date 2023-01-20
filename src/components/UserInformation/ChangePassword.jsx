import { useState } from "react";



const ChangePassword = ({open}) =>{

    if(!open) return null

    return(
        <div className="bg-[red]">
            <form action="">
                <input type="password" name="currPassword" id="" />
                <label htmlFor="currPassword">Current password</label>
            </form>
        </div>
    )
}

export default ChangePassword;