import { useEffect } from "react";
import { useAuth } from "../../context/authcontext";
import AddressBookCard from "./AddressBookCard"






const AddressBook = () => {

    const {GetAddressbook, getAddressbook, getAddress, GetAddress} = useAuth();

    useEffect(() => {
        GetAddressbook();
    }, [getAddress])

    // useEffect(() => {
    //     GetAddress()
    // }, [])

    return(
        <div className="flex flex-wrap justify-start w-[720px] min-h-[88%] gap-4">
            {
                getAddressbook.map((address) => 
                    <div key={address.id}> 
                        <AddressBookCard fullName={address.fullName} address={address.street + "," + address.state + " " + address.country} phoneNumber={address.phone} emailAddress={address.email} id={address.id} />
                    </div>
                    
                )
            }
        </div>
    )
}

export default AddressBook;