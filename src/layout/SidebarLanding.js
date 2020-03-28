import React from 'react';
import { Link } from 'react-router-dom';

import PageHeaderAnt from '../components/Navigation/PageHeader/PageHeader';
import '../components/Navigation/PageHeader/PageHeader.css';

import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Sider extends React.Component {
    state = {
      current: 'card',
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
  
    render() {
      return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="card">
            <MailOutlined />
            <Link to="/">Card</Link>
          </Menu.Item>
          <Menu.Item key="content">
            <AppstoreOutlined />
            <Link to="/content">Content</Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <SettingOutlined />
                Submenu
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              AntDesign
            </a>
          </Menu.Item>
        </Menu>
      );
    }
  }

const SidebarLanding = () => {
    return(
        <div style={{marginBottom:"30px"}}>
            <Sider/>
            <PageHeaderAnt/>
        </div>
    );
}

export default SidebarLanding;