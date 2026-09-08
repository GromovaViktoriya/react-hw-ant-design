import {Form, Input, Select} from "antd";
import TextArea from "antd/es/input/TextArea.js";

export const CommonForm = ()=>{
    return (
        <>
            <Form.Item
                label={null}
                name="name"
                rules={[{required: true, message: 'Введите заголовок задачи!'}]}
            >
                <Input
                    showCount
                    maxLength={50}
                    placeholder="Заголовок задачи"
                    className='task-input'
                />
            </Form.Item>
            <Form.Item
                label={null}
                name="description"
                rules={[{required: true, message: 'Введите описание задачи!'}]}
            >
                <TextArea
                    showCount
                    maxLength={100}
                    className='task-input'
                    autoSize={{ minRows: 1, maxRows: 3 }}
                    placeholder='Добавьте описание задачи'
                />
            </Form.Item>
            <Form.Item name="priority" label="Приоритет задачи" initialValue="low">
                <Select
                    style={{ width: 120 }}
                    options={[
                        { value: 'low', label: 'Низкий' },
                        { value: 'medium', label: 'Средний' },
                        { value: 'high', label: 'Высокий' },
                    ]}
                />
            </Form.Item>
        </>
    )
}