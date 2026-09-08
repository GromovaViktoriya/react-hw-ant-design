import {Button, Flex, Form, message} from "antd";
import {CommonForm} from "../commonForm/CommonForm.jsx";

export const TaskForm = ({setTasks, setIsError}) => {
    const [form] = Form.useForm();


    const onFinish = (values) => {
        setIsError(false)
        const newTask = {
            id: crypto.randomUUID(),
            name: values.name,
            description: values.description,
            priority: values.priority,
            checked: false,
        };

        setTasks((prev) => [...prev, newTask]);
        form.resetFields();
        message.success('Задача успешно добавлена')
    };

    return (
        <>
            <Flex vertical={true}
                  justify="center"
                  align={'center'}
                  style={{border: '2px solid #ddd', borderRadius: '10px', padding: '16px'}}>
                <Form form={form} className='form' onFinish={onFinish}>
                    <CommonForm/>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Создать
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>

        </>
    )
}