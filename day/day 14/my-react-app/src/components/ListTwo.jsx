function UserList() {
    const users = [
        {id: 1, name: "Gayana",role:"developer"},
        {id: 1, name: "Kuchiii",role:"Artist"},
        {id: 1, name: "hemuuu",role:"Dancer"},
    ];
    return(
        <div ClassName="list-box">
            <h3>User List</h3>
            <ul>
                {/* map()*/}
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name} is a {user.role}
                        </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;