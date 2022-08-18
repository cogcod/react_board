import React from 'react';
import './CommonTable.css';

function CommonTable(props) {
    // 부모컴포넌트인 PostList에서 props 값을 전달해준다.
    const { header, children } = props;

    return (
        <div>
            <table className="common-table">
                <thead>
                    <tr>
                        {
                            // header(배열형태)를 props로 받아와서 map으로 각 아이템을 td 태그 안에 넣어 뿌려준다.
                            header.map((item, index) => {
                                return (
                                    <td className="common-table-header" key={index}>{item}</td>
                                )
                            })
                        }
                    </tr>
                </thead>
            </table>
            <tbody className="common-table-body">
                {/* PostList에 있는 CommonTable 안의 내용을 children으로 가져와 이 곳에 출력하도록! */}
                { children }
            </tbody>
        </div>
    );
};

export default CommonTable;