import {TaskForm} from "../taskForm/taskForm.jsx";
import Sider from "antd/es/layout/Sider.js";

export const PageSider = ({setTasks, setIsError}) => {
    return (
        <Sider width={320}
               breakpoint='md'
               collapsedWidth='0'
               style={{background: '#fff'}}>
            <div className='side-wrapper'>
                <h3 className='sider-title'>Создать новую задачу</h3>
                <TaskForm setTasks={setTasks} setIsError={setIsError} />
            </div>
        </Sider>
    )
}