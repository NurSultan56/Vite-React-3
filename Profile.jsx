import Name from "./Name"
import Email from "./Email"
import Address from "./Address"
import PersonalInfo from "./PersonalInfo"

function Profile () {
    let name = 'Name: Nurlan Huseynov'
    let address = 'Address: Azerbaijan, Baku, Xetai ray, 8-ci dairevi street, 43<'
    let email = 'Email: nurhuseynov56@gamail.com'
    let personalInfo = 'I study in ADNSU'
    return (
        <>
            <Name name={name}/>
            <Email email={email}/>
            <Address address={address}/>
            <PersonalInfo personalInfo={personalInfo}/>
        </>
    )
}

export default Profile