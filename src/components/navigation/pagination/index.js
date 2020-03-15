import React from 'react';
import { Pagination } from 'antd';

const PaginationAnt = () => {
    return (
        <Pagination defaultCurrent={1} total={50} style={{textAlign:'center'}}/>
    )
}

export default  PaginationAnt;