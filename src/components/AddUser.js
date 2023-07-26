import { useState } from 'react';
import './AddUser.css';

const AddUser = (props) => {
    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({
        name: '',
        age: '',
    });

    function handleUserChange(event) {
        setUser({
        ...user,
        [event.target.name]: event.target.value,
        });
    }

    function clickEvent(event) {
        event.preventDefault();

        if (user.name === '') {
        setNameError(true);
        setAgeError(false);
        return;
        }

        if (user.age < 0) {
        setNameError(false);
        setAgeError(true);
        return;
        }

        props.addUser(user);

        setUser({
        name: '',
        age: '',
        });

        document.querySelector('.name').value = '';
        document.querySelector('.age').value = '';
    }

    function closeModal(){
        setShowModal(true);
    }

    return (
        <form className='form' onSubmit={clickEvent}>
        <input
            className='name'
            type='text'
            name='name'
            placeholder='이름'
            onChange={handleUserChange}
        />

        <input
            className='age'
            type='number'
            name='age'
            placeholder='나이'
            onChange={handleUserChange}
        />

        <button type='submit'>추가</button>

        {nameError && <div className='modal'>이름을 입력하시오
        <button className='btn' onClick={closeModal}>닫기</button>
        </div>}
        {ageError && <div className='modal'>나이는 음수일 수 없삼
        <button className='btn' onClick={closeModal}>닫기</button>
        </div>}
        </form>
    );
};

export default AddUser;
