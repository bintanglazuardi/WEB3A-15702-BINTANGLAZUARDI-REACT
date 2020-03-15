import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/layout/dashboard';
// import Dashboard2 from './components/layout/dashboard2';

import { Card, Col, Row } from 'antd';    //import card
import { Carousel } from 'antd';          //import carousel
import { Comment, Avatar, Form, Button, List, Input } from 'antd';    //import addComment
import moment from 'moment';      //import addComment
// import { Comment, Avatar } from 'antd';   //import displayComment
// import { Input } from 'antd';     //import input
import { Rate } from 'antd';      //import rate

//import dashboard
// import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

//import dashboard2
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

//import page header
import { PageHeader, Dropdown, Tag, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

//import pagination
import { Pagination } from 'antd';

//===============================================================================================
//Page Header
const { Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
    }}
  >
    <img
      style={{
        marginRight: 8,
      }}
      src={src}
      alt={text}
    />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      />
    </div>
  </>
);

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

//===============================================================================================
// CardAnt
const cardData = [
  {
    name : "Bintang Lazuardi",
    job : "FrontEnd Developer"
  },
  {
    name : "Nur Rohman",
    job : "Android Developer"
  },
  {
    name : "Alfarel Zaki",
    job : "BackEnd Developer"
  },
  {
    name : "Maulana Adam",
    job : "UI/UX Designer"
  },
  {
    name : "Faris Albab",
    job : "Game Developer"
  },
  {
    name : "Ahmad Rifal",
    job : "Web Developer"
  },
]

//===============================================================================================
//Rate
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
    );
  }
}

//===============================================================================================
//Add Comment
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class AddComment extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

//===============================================================================================
//Example Comment
const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

//===============================================================================================

//dashboard2
const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard2 = () => {
  return (
    <SiderDemo/>
  )
}
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
          <Content style={{ margin: '16px 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Header */}
            <PageHeader
                title="Title"
                className="site-page-header"
                subTitle="This is a subtitle"
                tags={<Tag color="blue">Running</Tag>}
                extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                    Primary
                </Button>,
                <DropdownMenu key="more" />,
                ]}
                avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                breadcrumb={{ routes }}>
                <Content
                    extraContent={
                        <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                        alt="content"
                        width="100%"
                        />
                    }
                >
                  {content}
                </Content>
            </PageHeader>
            
            {/* Carousel */}
            <Carousel autoplay style={{height:'360px',width:'640px', margin:'auto'}}>
                <div class="carousel">
                    <img class="image" src="https://hdwallpaperfx.com/wp-content/uploads/2017/06/Animated-Kingdom-Mountains-Sunrise.jpg" />
                </div>
                <div class="carousel">
                    <img class="image" src="https://free4kwallpapers.com/uploads/originals/2015/08/13/anime-wallpaper-1920x1080.jpg" />
                </div>
                <div class="carousel">
                    <img class="image" src="https://i.pinimg.com/originals/42/a2/a8/42a2a8751b63b25984ee0caac8fe962c.jpg" />
                </div>
                <div class="carousel">
                    <img class="image" src="https://wallpapercave.com/wp/wp4082746.jpg" />
                </div>             
            </Carousel>

            {/* CardAnt */}
            <div className="site-card-wrapper" style={{backgroundColor:'white', marginTop:0}}>
              <Row gutter={16}>
                {cardData.map(data => 
                  <Col span={8}>
                    <Card title={data.name} style={{minWidth:30,margin:'0 20 20 20'}}>
                      <p className="job"> {data.job} </p>
                      {/* Rate */}
                      <Rater/>
                    </Card>
                  </Col>           
                )}         
              </Row>
            </div>

            {/* Pagination */}
            <Pagination defaultCurrent={1} total={50} style={{textAlign:'center'}}/>

            {/* Add Comment */}
            <AddComment/>

            {/* Example Comment */}
            <ExampleComment>
                <ExampleComment>
                <ExampleComment />
                <ExampleComment />
                </ExampleComment>
            </ExampleComment>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

function App(){
  return(
    <SiderDemo/>
  );
  
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
