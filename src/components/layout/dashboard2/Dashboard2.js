import React from 'react';
import './Dashboard2.css';

import CardAnt from '../../Card/Card';
import Pagination from '../../Navigation/Pagination/Pagination';
import PageHeaderAnt from '../../Navigation/PageHeader/PageHeader';
import SearchAnt from '../../DataEntry/Search/Search';
import CarouselAnt from '../../DataDisplay/Carousel/Carousel';
import AddCommentAnt from '../../DataDisplay/Comment/AddComment/AddComment';
import DisplayCommentAnt from '../../DataDisplay/Comment/DisplayComment/DisplayComment';


import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">User 1</Menu.Item>
              <Menu.Item key="4">User 2</Menu.Item>
              <Menu.Item key="5">User 3</Menu.Item>
              <Menu.Item key="3">User 4</Menu.Item>
              <Menu.Item key="4">User 5</Menu.Item>
              <Menu.Item key="5">User 6</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
              <Menu.Item key="6">Team 3</Menu.Item>
              <Menu.Item key="8">Team 4</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <FileOutlined />
              Work
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 20, margin:20}} >
            <h1>
                <b>Content</b>
            </h1> 
          </Header> */}
          <Content style={{ margin: '16px 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>User 3</Breadcrumb.Item>
              <Breadcrumb.Item>Content</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* Bill is a cat. */}
              <PageHeaderAnt/>

              <CarouselAnt/>

              <CardAnt/>
              
              <Pagination/>

              <AddCommentAnt/>
              
              <DisplayCommentAnt/>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

const Dashboard2 = () => {
    return(
        <SiderDemo />
    );
}

export default Dashboard2;