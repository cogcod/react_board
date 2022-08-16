import React from 'react';

function CommonTable(props) {
    // 부모컴포넌트인 PostList에서 props 값을 전달해준다.
    const { header, children } = props;

    return (
        <div>
            <table className="common-table">
                <thead>
                    <tr>
                        {
                            // header가 배열형태 이기 때문에 map으로 각 아이템을 td 태그 안에 넣어 뿌려준다.
                            header.map((item, index) => {
                                return (
                                    <td className="common-table-header" key={index}>{item}</td>
                                )
                            })
                        }
                    </tr>
                </thead>
            </table>
            <tbody>
                {children}
            </tbody>
        </div>
    );
};

export default CommonTable;