import { TodoList } from '@models/index';

export const todos: TodoList[] = [
  {
    icon: 'ph-house-simple',
    id: 'home',
    name: 'Home',
    todos: [
      {
        id: '1',
        todoListId: 'list-1',
        isComplete: true,
        description: 'Buy groceries',
        createdAt: '2023-10-12T08:00:00Z',
        completedAt: undefined,
      },
      {
        id: '2',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Pay bills',
        createdAt: '2023-10-12T10:00:00Z',
        completedAt: undefined,
      },
      {
        id: '3',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Schedule dentist appointment',
        createdAt: '2023-10-13T09:00:00Z',
        completedAt: undefined,
      },
      {
        id: '4',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Finish report',
        createdAt: '2023-10-14T13:00:00Z',
        completedAt: undefined,
      },
      {
        id: '5',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Call mom',
        createdAt: '2023-10-15T15:00:00Z',
        completedAt: undefined,
      },
    ],
  },
  {
    icon: 'ph-check',
    id: 'completed',
    name: 'Completed',
    todos: [
      {
        id: '1',
        todoListId: 'list-1',
        isComplete: true,
        description: 'Buy groceries',
        createdAt: '2023-10-12T08:00:00Z',
        completedAt: undefined,
      },
      {
        id: '2',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Pay bills',
        createdAt: '2023-10-12T10:00:00Z',
        completedAt: undefined,
      },
      {
        id: '3',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Schedule dentist appointment',
        createdAt: '2023-10-13T09:00:00Z',
        completedAt: undefined,
      },
      {
        id: '4',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Finish report',
        createdAt: '2023-10-14T13:00:00Z',
        completedAt: undefined,
      },
      {
        id: '5',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Call mom',
        createdAt: '2023-10-15T15:00:00Z',
        completedAt: undefined,
      },
    ],
  },
  {
    icon: 'ph-calendar-blank',
    id: 'schedule',
    name: 'Schedule',
    todos: [
      {
        id: '1',
        todoListId: 'list-1',
        isComplete: true,
        description: 'Buy groceries',
        createdAt: '2023-10-12T08:00:00Z',
        completedAt: undefined,
      },
      {
        id: '2',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Pay bills',
        createdAt: '2023-10-12T10:00:00Z',
        completedAt: undefined,
      },
      {
        id: '3',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Schedule dentist appointment',
        createdAt: '2023-10-13T09:00:00Z',
        completedAt: undefined,
      },
      {
        id: '4',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Finish report',
        createdAt: '2023-10-14T13:00:00Z',
        completedAt: undefined,
      },
      {
        id: '5',
        todoListId: 'list-1',
        isComplete: false,
        description: 'Call mom',
        createdAt: '2023-10-15T15:00:00Z',
        completedAt: undefined,
      },
    ],
  },
  {
    icon: 'dona stroke-accent-purple-200',
    id: 'travel-to-greece',
    name: 'Travel to Greece',
    todos: [
      {
        id: '1',
        todoListId: 'travel-to-greece',
        isComplete: true,
        description: 'Buy groceries',
        createdAt: '2023-10-12T08:00:00Z',
        completedAt: undefined,
      },
      {
        id: '2',
        todoListId: 'travel-to-greece',
        isComplete: false,
        description: 'Pay bills',
        createdAt: '2023-10-12T10:00:00Z',
        completedAt: undefined,
      },
    ],
  },
  {
    icon: 'dona stroke-accent-blue-100',
    id: 'remote-poop',
    name: 'Remote poop',
    todos: [
      {
        id: '1',
        todoListId: 'remote-poop',
        isComplete: true,
        description: 'Buy groceries',
        createdAt: '2023-10-12T08:00:00Z',
        completedAt: undefined,
      },
      {
        id: '2',
        todoListId: 'remote-poop',
        isComplete: false,
        description: 'Pay bills',
        createdAt: '2023-10-12T10:00:00Z',
        completedAt: undefined,
      },
    ],
  },
  {
    icon: 'dona stroke-accent-green-100',
    id: 'touch-grass',
    name: 'Touch grass',
    todos: [
      {
        id: '13',
        todoListId: 'Touch grass',
        isComplete: false,
        description: 'Todo 1 for List 2',
        createdAt: '2023-10-12T11:00:00Z',
        completedAt: undefined,
      },
    ],
  },
];
