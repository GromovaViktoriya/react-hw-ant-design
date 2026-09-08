import {Form, message, Modal} from "antd";
import {CommonForm} from "../commonForm/CommonForm.jsx";

export const ModalEditForm = ({setTasks, task, isModalOpen, setIsModalOpen, form}) => {

    const onFinishEdit = (values) => {
        setTasks(prev => prev.map(item =>
            item.id === task.id ? {...item, ...values} : item
        ));

        setIsModalOpen(false);
        message.success("Задача обновлена!");
    }
    const okHandler = () => {
        form.submit();
    }
    const cancelHandler = () => {
        setIsModalOpen(false);
    }

    return (
        <Modal
            title="Редактировать задачу"
            open={isModalOpen}
            onCancel={cancelHandler}
            onOk={okHandler}
            okText="Сохранить"
            cancelText="Отмена"
            width={350}
        >
            <Form form={form} layout="vertical" onFinish={onFinishEdit}>
             <CommonForm/>
            </Form>
        </Modal>
    )
}