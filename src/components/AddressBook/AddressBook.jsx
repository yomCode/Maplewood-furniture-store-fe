import AddressBookCard from "./AddressBookCard"


const AddressBook = () => {
    return(
        <div className="flex flex-wrap w-[70vw] min-h-[400px] gap-4 p-4">
            < AddressBookCard fullName='Abayomi Mustapha' address='abule egba, lagos state' phoneNumber='08166386376' />
            < AddressBookCard fullName='Abayomi Mustapha' address='abule egba, lagos state' phoneNumber='08166386376' />
            < AddressBookCard fullName='Abayomi Mustapha' address='abule egba, lagos state' phoneNumber='08166386376' />
            < AddressBookCard fullName='Abayomi Mustapha' address='abule egba, lagos state' phoneNumber='08166386376' />
        </div>
    )
}

export default AddressBook;