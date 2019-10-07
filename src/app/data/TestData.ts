import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Учеба'},
    {id: 3, title: 'Отдых'},
    {id: 4, title: 'Спорт'},
    {id: 5, title: 'Еда'},
    {id: 6, title: 'Финансы'},
    {id: 7, title: 'Гаджеты'},
    {id: 8, title: 'Здоровье'},
    {id: 9, title: 'Автомобиль'},
    {id: 10, title: 'Семья'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#6cff69'},
    {id: 2, title: 'Средний', color: '#fffb00'},
    {id: 3, title: 'Высокий', color: '#ff0009'},
    {id: 4, title: 'Очень высокий', color: '#a62400'}

  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      status: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    },

    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      status: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11')
    },

    {
      id: 3,
      title: 'Убраться у себя в комнате, полить растения',
      priority: TestData.priorities[2],
      status: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'Сходить в парк с семьей, пригласить друзей',
      priority: TestData.priorities[1],
      status: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 5,
      title: 'Найти и выучить учебник по квантовой физике',
      status: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      status: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11')
    },

    {
      id: 7,
      title: 'Найти билеты в Турцию, выбрать отель',
      priority: TestData.priorities[2],
      status: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Приготовить ужин для всей семьи (семга с картошкой)',
      status: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      status: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 10,
      title: 'Пробежать 100 м',
      priority: TestData.priorities[0],
      status: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Организовать детский праздник ',
      status: false
    },

    {
      id: 12,
      title: 'Сходить на лекцию "Как научиться программировать на Java"',
      priority: TestData.priorities[1],
      status: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      status: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11')
    },

    {
      id: 14,
      title: 'Провести собрание по поводу всех проектов',
      status: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Сдать экзамен по Java',
      priority: TestData.priorities[2],
      status: true
    },


    {
      id: 16,
      title: 'Положить 100 000 р в банк на депозит',
      priority: TestData.priorities[3],
      status: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Попросить аванс на работе',
      priority: TestData.priorities[2],
      status: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Сдать анализы, проверить гемоглобин',
      priority: TestData.priorities[3],
      status: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')

    },

    {
      id: 19,
      title: 'Сравнить новый айпад с самсунгом',
      priority: TestData.priorities[0],
      status: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')

    },

    {
      id: 20,
      title: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      status: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17')

    }

  ];
}
