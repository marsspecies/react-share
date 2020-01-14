import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const { SubMenu } = Menu

function SiderBar() {
    const defaultSelectedKeys = window.location.pathname
    return (
        <Menu
            defaultSelectedKeys={defaultSelectedKeys ? defaultSelectedKeys : 'classLifeCycleOld'}
            defaultOpenKeys={['classComponent', 'hooks', 'graphql']}
            mode="inline"
            theme="dark"
        >
            <SubMenu
                key="classComponent"
                title="react类组件"
            >
                <Menu.Item key="classLifeCycleOld">
                    <Link to="/classLifeCycleOld" >
                        <div className="nav-btn">class组件旧版生命周期</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="classLifeCycleNew">
                    <Link to="/classLifeCycleNew" >
                        <div className="nav-btn">class组件新版生命周期</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="classPureRender">
                    <Link to="/classPureRender" >
                        <div className="nav-btn">class组件Pure Render</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="funcComponent">
                    <Link to="/funcComponent" >
                        <div className="nav-btn">函数式组件</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="funcMemo">
                    <Link to="/funcMemo" >
                        <div className="nav-btn">函数式组件Pure Render</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="compareClassWithFunc">
                    <Link to="/compareClasstoFunc" >
                        <div className="nav-btn">比较class组件和函数组件</div>
                    </Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="hooks"
                title="react中hooks的使用"
            >
                <Menu.Item key="useState">
                    <Link to="/testUseStateDemo" >
                        <div className="nav-btn">useState的使用</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="useEffect">
                    <Link to="/testUseEffectDemo" >
                        <div className="nav-btn">useEffect的使用</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="useMemo">
                    <Link to="/testUseMemoDemo" >
                        <div className="nav-btn">useMemo的使用</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="useCallback">
                    <Link to="/testUseCallbackDemo" >
                        <div className="nav-btn">useCallback的使用</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="useContext">
                    <Link to="/testUseContextDemo" >
                        <div className="nav-btn">useContext的使用</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="useReducer">
                    <Link to="/testUseReducerDemo" >
                        <div className="nav-btn">useReducer的使用</div>
                    </Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="graphql"
                title="graphql的使用"
            >
                <Menu.Item key="client">
                    <Link to="/apolloClient" >
                        <div className="nav-btn">react中apollo的使用</div>
                    </Link>
                </Menu.Item>
                <Menu.Item key="server">
                    <Link to="/server" >
                        <div className="nav-btn">node中graphql的使用</div>
                    </Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}
export default React.memo(SiderBar)
