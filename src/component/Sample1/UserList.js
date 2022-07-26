import React, { useState, useMemo } from 'react';
import AvgValue from './AvgValue';
import UserDetail from './UserDetail';

const UserList = () => {
    const [text, setText] = useState('');
    const [users, setUsers] = useState([
        {
            id:0,
            name:'철수',
            age:30,
            engScore : 90,
        },
        {
            id:1,
            name:'영희',
            age:20,
            engScore : 80,
        }
    ])

    const addUser = ()=>{
        setUsers([
            ...users,
            {
                id:2,
                name:'정희',
                age:22,
                engScore : 70
            }
        ])
    }

    const avg = useMemo(() => {
        console.log('평균을 구하는 함수가 호출되었습니다')
        return users.reduce( (result, user) => {
            return result + user.engScore / users.length
        },0)
    },[users]);
   

    return (
        <div>
            <div>
                테스트 문자 : <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
            <button disabled={users.length >=3} onClick={addUser}>
            유저만들기
            </button> {/*3개 이상이면 더이상 나가지 않게 설정 */}
            <AvgValue avg = {avg} />
            {
                users.map(item=>{
                    return <UserDetail key={item.id} userItem={item} />
                })
            }

        </div>
    );
};

export default UserList;