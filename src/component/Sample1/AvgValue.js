import React from 'react';

const AvgValue = ({avg}) => {
    // console.log('평균값 출력 컴포넌트 리랜더')
    return (
        <div>
            <h2>학생들의 영어 점수의 평균은 {avg} 입니다 </h2>
        </div>
    );
};

export default AvgValue;