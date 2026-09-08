import {Layout, message, Spin} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout.js";
import {useEffect, useState} from "react";
import {PageSider} from "./components/pageSider/PageSider.jsx";
import {fetchTasks} from "./utils/fetchTasks.js";
import {ContentPage} from "./components/contentPage/ContentPage.jsx";
import {LoadingOutlined} from '@ant-design/icons';


function App() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        fetchTasks({setIsLoading, setIsError, setTasks})
    }, [])

    return (
        <Layout className='App'>
            {contextHolder}
            <Header className='header'>Менеджер задач</Header>
            <Layout>
                <PageSider setTasks={setTasks} setIsError={setIsError} />
                {isLoading
                    ? <Content className='spinner-wrapper'>
                        <Spin description={'Идет загрузка...'} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
                    </Content>
                    : <ContentPage tasks={tasks} setTasks={setTasks} isLoading={isLoading} isError={isError}/>
                }

            </Layout>
            <Footer className='footer'/>
        </Layout>
    )
}

export default App
