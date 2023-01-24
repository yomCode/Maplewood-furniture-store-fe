import React, { useState, useEffect } from 'react';
import { columns } from './tableData'


import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoadingOutlined,
  UserAddOutlined
} from '@ant-design/icons';

import { Layout, Menu, theme, Table, Spin, Empty, Button, Tag } from 'antd';
import axios from 'axios';
import "../styles/myLayout.css";
import DrawerForm from './DrawerForm';

const { Header, Sider, Content, Footer } = Layout;

const MyLayout = () => {
  const size = "large";
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const { token: { colorBgContainer },} = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [students, setStudents] = useState([]);
  const[fetching, setFetching] = useState(true);

  const[showDrawer, setShowDrawer] = useState(false);

  const getStudents = () => {
      axios.get("api/v1/students")
      .then((data) => {
          console.log(data)
          setStudents(data.data);
          setFetching(false);
      })
      .catch((err) => console.log(err));
  } 

  const handleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  }

  const renderStudents = () => {
    if(fetching) return <Spin indicator={antIcon} />

    return students.length >= 0 ? 
    <div>
        <DrawerForm
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          getStudents={getStudents}
          />
        <Table 
          dataSource={students} 
          rowkey={student => student.id}
          columns={columns(getStudents)} 
          bordered
          pagination={{ pageSize: 50 }}
          scroll={{ y: 500 }}
          title={() => 
                <div className="title-head"> 
                  <div className='title-sub-head'>
                  <h2>Student List</h2>
                  <Tag color="#2db7f5">Number of Students: <span style={{fontSize: "20px"}}>{students.length} </span></Tag>
                  </div>
                  <Button type="primary" onClick={handleShowDrawer}
                  icon={<UserAddOutlined />} size={size} >Add New Student
                  </Button>

                  </div>                
          }/> 
      </div>: 
      <Empty />
  }

  useEffect(() => {
      getStudents();
      return () => {};
  }, [])


  return (
    <Layout className='layout'>

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark" mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Students',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Staff',
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          { renderStudents() }
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;