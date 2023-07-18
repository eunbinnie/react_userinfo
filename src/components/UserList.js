const UserList = (props) => {
    return (
        <div>
            {props.users.map((user) => (
            <div key={user.id}>
            {user.name}, {user.age}
        </div>
    ))}
        </div>
        );
    }
    
export default UserList;