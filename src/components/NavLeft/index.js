import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.less';

const { SubMenu } = Menu;

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: 1
    }
  }

  componentDidMount() {}

  handleClick(e) {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <div className="navleft">
        <Menu theme={'dark'}
              onClick={this.handleClick.bind(this)}
              // defaultOpenKeys={['sub1']}
              defaultSelectedKeys={['sub0']}
              mode="inline">
          <Menu.Item key='sub0'>菜单一</Menu.Item>
          <SubMenu key='sub1'
                   title={
                     <span>菜单二</span>
                   }>
            <Menu.Item key='1'>1</Menu.Item>
            <Menu.Item key='2'>2</Menu.Item>
            <Menu.Item key='3'>3</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2'
                   title={
                     <span>菜单三</span>
                   }>
            <Menu.Item key='4'>4</Menu.Item>
            <Menu.Item key='5'>5</Menu.Item>
            <Menu.Item key='6'>6</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Footer;