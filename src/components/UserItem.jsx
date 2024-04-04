
// props este un obiect creat de React care are ca si chei atributele de html folosite cand instantam componenta
function UserItem(props){
    console.log(props);
    const {name, email} = props;
    return (
        <div>
            <h2>Nume: {name}</h2>
            <p>Email: {email}</p>
        </div>
    )
};

export default UserItem;