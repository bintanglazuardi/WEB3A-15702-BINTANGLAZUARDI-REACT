import React, { Component } from 'react'; 

import PageHeaderAnt from '../components/Navigation/PageHeader/PageHeader';
import CarouselAnt from '../components/DataDisplay/Carousel/Carousel';
import AddCommentAnt from '../components/DataDisplay/Comment/AddComment/AddComment';
import DisplayCommentAnt from '../components/DataDisplay/Comment/DisplayComment/DisplayComment';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class ContentComponent extends Component{
    render(){
        return(
            <div>
                <CarouselAnt/>
                {/* <AddCommentAnt/>
                <DisplayCommentAnt/> */}

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>
        )
    }
}

export default ContentComponent;





