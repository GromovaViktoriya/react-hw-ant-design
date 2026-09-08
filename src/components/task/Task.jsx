import {Card, Form, message, Popconfirm, Tag} from "antd";
import {EditOutlined, DeleteOutlined, CheckOutlined} from '@ant-design/icons';
import {colorTags, priorityTags} from "../../constants/constants.js";
import {ModalEditForm} from "../modalEditForm/ModalEditForm.jsx";
import {useState} from "react";

export const Task = ({task, setTasks, isLoading}) => {
    const [form] = Form.useForm();
    const isChecked = task.checked === true;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const editHandler = () => {
        form.setFieldsValue({
            name: task.name,
            description: task.description,
            priority: task.priority,
        })
        setIsModalOpen(true);
    }

    const checkHandler = () => {
        setTasks(prev => prev.map(item => item.id === task.id ? {...item, checked: !task.checked} : item));

    }
    const confirm = () => {
        setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id));
        message.success("Задача успешно удалена!")
    };

    return (
        <>
            <Card
                className={`task-card ${isChecked ? 'checked' : ''}`}
                title={task.name}
                variant="borderless"
                loading={isLoading}
                actions={[
                    <Popconfirm
                        title="Удалить задачу"
                        description="Вы уверены, что хотите удалить эту задачу?"
                        onConfirm={confirm}
                        okText="Да"
                        cancelText="Нет"
                    >
                        <DeleteOutlined key='bucket'/>
                    </Popconfirm>
                    ,
                    <EditOutlined key='edit' onClick={editHandler}/>,
                    <CheckOutlined key='check' onClick={checkHandler}/>
                ]}>
                <p className='card-description'>{task.description}</p>
                <Tag color={colorTags[task.priority]} variant='outlined'>{priorityTags[task.priority]}</Tag>
                {isChecked && <Tag key={task.id} color='green' variant='outlined'>Выполнено</Tag>}
            </Card>
            <ModalEditForm form={form}
                           setTasks={setTasks}
                           task={task}
                           isModalOpen={isModalOpen}
                           setIsModalOpen={setIsModalOpen}
            />
        </>

    )
}