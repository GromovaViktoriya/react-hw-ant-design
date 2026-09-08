import {Alert, Empty, Flex} from "antd";
import {Task} from "../task/Task.jsx";
import {Content} from "antd/es/layout/layout.js";

export const ContentPage = ({tasks, setTasks, isLoading, isError})=>{
    return (
        <Content className='content'>
            <h2>Управление задачами</h2>
            <h3>Текущие задачи</h3>
            <Flex gap={10} wrap='wrap' justify='center' align='start'>
                {isError && (
                    <Alert
                        title="Ошибка!"
                        description="Произошла ошибка загрузки данных!"
                        type="error"
                    />
                )}
                {!isError && tasks.length === 0 && (
                    <Empty description={"Добавьте задачи"} />
                )}
                {!isError && tasks.length > 0 && tasks.map((task) => (
                    <Task key={task.id} task={task} setTasks={setTasks} isLoading={isLoading} />
                ))}
            </Flex>
        </Content>
    )
}