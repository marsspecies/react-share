import React from 'react';
import './App.css';
import './App.less';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Loadable from 'react-loadable'
import Loading from './components/Loading'
const SiderBar = Loadable({
    loader: () => import('./components/siderBar'),
    loading: Loading
})
const ClassLifeCycleOld = Loadable({
    loader: () => import('./pages/classLifeCycleOld'),
    loading: Loading
})
const ClassLifeCycleNew = Loadable({
    loader: () => import('./pages/classLifeCycleNew'),
    loading: Loading
})
const ClassPureRender = Loadable({
    loader: () => import('./pages/classPureComponent'),
    loading: Loading
})
const FuncComponent = Loadable({
    loader: () => import('./pages/funcComponent'),
    loading: Loading
})
const FuncMemo = Loadable({
    loader: () => import('./pages/funcMemo'),
    loading: Loading
})
const CompareClasstoFunc = Loadable({
    loader: () => import('./pages/CompareClassToFunc'),
    loading: Loading
})
const TestUseStateDemo = Loadable({
    loader: () => import('./pages/useStateDemo'),
    loading: Loading
})
const TestUseEffectDemo = Loadable({
    loader: () => import('./pages/useEffectDemo'),
    loading: Loading
})
const TestUseMemoDemo = Loadable({
    loader: () => import('./pages/useMemoDemo'),
    loading: Loading
})
const TestUseCallbackDemo = Loadable({
    loader: () => import('./pages/useCallbackDemo'),
    loading: Loading
})
const TestUseContextDemo = Loadable({
    loader: () => import('./pages/useContextDemo'),
    loading: Loading
})
const TestUseReducerDemo = Loadable({
    loader: () => import('./pages/useReducerDemo'),
    loading: Loading
})
const ApolloDemo = Loadable({
    loader: () => import('./pages/apolloDemo'),
    loading: Loading
})
const NotFound = Loadable({
    loader: () => import('./pages/NotFound'),
    loading: Loading
})

const { Sider, Content } = Layout;

class App extends React.Component {
    state = {
    }
    render() {
        return (
            < div className = "App" >
                <Layout>
                    <Router>
                        <Sider>
                            <SiderBar />
                        </Sider>
                        <Layout>
                            <Content>
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" render={() => <Redirect to="/classLifeCycleOld" />} />
                                    <Route path="/classLifeCycleOld" component={ClassLifeCycleOld} />
                                    <Route path="/classLifeCycleNew" component={ClassLifeCycleNew} />
                                    <Route path="/classPureRender" component={ClassPureRender} />
                                    <Route path="/funcComponent" component={FuncComponent} />
                                    <Route path="/funcMemo" component={FuncMemo} />
                                    <Route path="/compareClasstoFunc" component={CompareClasstoFunc} />
                                    <Route path="/testUseStateDemo" component={TestUseStateDemo} />
                                    <Route path="/testUseEffectDemo" component={TestUseEffectDemo} />
                                    <Route path="/testUseMemoDemo" component={TestUseMemoDemo} />
                                    <Route path="/testUseCallbackDemo" component={TestUseCallbackDemo} />
                                    <Route path="/testUseContextDemo" component={TestUseContextDemo} />
                                    <Route path="/testUseReducerDemo" component={TestUseReducerDemo} />
                                    <Route path="/apolloClient" component={ApolloDemo} />
                                    <Route path="*" component={NotFound} />
                                </Switch>
                            </div>
                            </Content>
                        </Layout>
                    </Router>
                </Layout>
                
            </div>
        )
    }
}

export default App;