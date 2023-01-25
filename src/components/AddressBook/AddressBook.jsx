import { useEffect } from "react";
import { useAuth } from "../../context/authcontext";
import AddressBookCard from "./AddressBookCard"



const AddressBook = () => {

    const {GetAddressbook, getAddressbook} = useAuth();


    useEffect(() => {
        GetAddressbook();
    }, [])


    return(
        <div className="flex flex-wrap justify-start w-[720px] min-h-[88%] gap-4">
            {
                getAddressbook.map((address) => 
                    <AddressBookCard fullName={address.fullName} address={address.address} phoneNumber={address.phone} />
                )
            }
        </div>
    )
}

export default AddressBook;