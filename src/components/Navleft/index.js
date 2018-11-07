import React from 'react'
import {Menu,Icon} from 'antd'
import MenuConfig from './../../config/menuConfig'
import "./index.less"
  const SubMenu =Menu.SubMenu;
export default class Navleft extends React.Component{
    render(){
        return (
            <div>
              <div className="logo">
                  <img src="/assets/logo-ant.svg" alt="图标"/>
                  <h1>Imooc MS</h1>
              </div>
                <Menu theme="dark">
                    <SubMenu key="sub1" title={<span><Icon type="mail"/></span>}>
                        <Menu.Item key="1">子菜单项</Menu.Item>
                        <Menu.Item key="2">子菜单项</Menu.Item>
                        <Menu.Item key="3">子菜单项</Menu.Item>
                        <Menu.Item key="4">子菜单项</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>);
    }
}