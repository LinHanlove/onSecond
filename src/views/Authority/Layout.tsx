import React from "react";
import { Layout, Avatar } from "antd";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const LayoutStyle = styled.div`
  .ant-layout-header,
  .ant-layout .ant-layout-sider {
    background-color: #fff;
  }
`;
export default function LayoutView() {
  return (
    <LayoutStyle>
      <Layout className="bg-[#eee] h-[100vh] w-full">
        <Header className="h-[20vh] px-[20px] w-full bg-[#fff] flex items-center justify-between">
          <div className="r flex  ">
            <div className="logo  w-[45px] leading-[30px] h-[30px]">logo</div>
            <div className="title w-[200px] leading-[30px] h-[30px] ml-[12px] text-[20px] font-bold">
              一秒快送后台管理系统
            </div>
          </div>
          <div className="l">
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        </Header>
        <Layout className="h-[80vh] mt-[20px]">
          <Sider className="h-full rounded-lg">
            Sider
            <div className="w-[50px] h-[60px] bg-red-500">666</div>
          </Sider>
          <Content className="h-full bg-[#fff] ml-[20px] rounded-lg">
            Content
          </Content>
        </Layout>
      </Layout>
    </LayoutStyle>
  );
}
