import React from 'react';

import { Input } from 'antd';

const { Search } = Input;

const SearchAnt = () => {
    return(
        <div style={{marginRight:20}}>
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton style={{maxWidth:'40%', float:'right', marginTop:25}}/>
        </div>
    )
}


export default SearchAnt;