import React from 'react';

const UserDetail =({userItem}) => {
    console.log(`유저디테일 ${userItem.id} 빈 컴포넌트 리랜더`)
    return (
        <div>
            <h2>이름 : {userItem.name}</h2>
            <h3>나이 : {userItem.age}</h3>
            <h3>영어점수 : {userItem.engScore}</h3>
        </div>
    );
};

export default React.memo(UserDetail);