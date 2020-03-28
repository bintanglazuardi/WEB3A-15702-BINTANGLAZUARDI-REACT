import React, { Component } from 'react'; 

import CardAnt from '../components/Card/Card';
import Pagination from '../components/Navigation/Pagination/Pagination';
import PageHeaderAnt from '../components/Navigation/PageHeader/PageHeader';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class CardComponent extends Component{
    render(){
        return(
            <div>
                <CardAnt/>
                <Pagination/>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>
        )
    }
}


export default CardComponent;