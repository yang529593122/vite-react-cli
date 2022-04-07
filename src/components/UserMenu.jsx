/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/7 -04 - 07 -5:19 下午
 * @Description:
 */

import React from 'react';
import {Menu, Dropdown, Button, Tag} from 'antd';
const UserMenu = () => {
    const menu = (
        <Menu>
            <Menu.Item key={'1'}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                   退出登录
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button type="link">杨鹏飞</Button>
            </Dropdown>
            <Tag color="#108ee9">{import.meta.env.MODE}</Tag>
        </>

    );
};

export default UserMenu;