export const taskList = [
    {
        id: crypto.randomUUID(),
        name: 'Задача по React',
        description: `1. Наметить план работы
        2. Изучить ТЗ
        3. Выполнить задачу`,
        priority: 'high',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Сходить в зал',
        description: `Выполнить тренировку на верх`,
        priority: 'medium',
        checked: true,
    },
    {
        id: crypto.randomUUID(),
        name: 'Поиграть в "Blood of the dawnwalker',
        description: `Отдохнуть`,
        priority: 'low',
        checked: true,
    },
    {
        id: crypto.randomUUID(),
        name: 'Почитать книгу',
        description: `Дочитать третий рассказ сборника по Конану Варвару`,
        priority: 'low',
        checked: false,
    },
]

export const colorTags = {
    low: 'gold',
    medium: 'orange',
    high: 'red',
}

export const priorityTags = {
    low: 'Низкий',
    medium: 'Средний',
    high: 'Высокий'
}