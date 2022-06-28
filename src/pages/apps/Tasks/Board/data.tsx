// images
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../../assets/images/users/avatar-8.jpg';

export interface TaskTypes {
    id: number;
    title: string;
    status: string;
    priority: string;
    userAvatar: string;
    totalComments: number;
    totalSubTasks: number;
    subTaskCompleted: number;
    dueDate: string;
}

const tasks: TaskTypes[] = [
    {
        id: 1,
        title: 'Ubold v3.0 - Redesign',
        status: 'Pending',
        priority: 'High',
        userAvatar: avatar5,
        totalComments: 28,
        totalSubTasks: 10,
        subTaskCompleted: 1,
        dueDate: 'Jul 18, 2019',
    },
    {
        id: 2,
        title: 'Minton v3.0 - Redesign',
        status: 'Inprogress',
        priority: 'Low',
        userAvatar: avatar6,
        totalComments: 21,
        totalSubTasks: 7,
        subTaskCompleted: 4,
        dueDate: 'Jul 20, 2019',
    },
    {
        id: 3,
        title: 'Shreyu v2.1 - Angular and Django',
        status: 'Review',
        priority: 'Low',
        userAvatar: avatar2,
        totalComments: 24,
        totalSubTasks: 2,
        subTaskCompleted: 1,
        dueDate: 'Jul 21, 2019',
    },
    {
        id: 4,
        title: 'Shreyu v2.1 - React, Webpack',
        status: 'Done',
        priority: 'High',
        userAvatar: avatar7,
        totalComments: 21,
        totalSubTasks: 5,
        subTaskCompleted: 5,
        dueDate: 'Jul 22, 2019',
    },
    {
        id: 5,
        title: 'Shreyu 2.2 - Vue.Js and Laravel',
        status: 'Pending',
        priority: 'Low',
        userAvatar: avatar3,
        totalComments: 2,
        totalSubTasks: 5,
        subTaskCompleted: 2,
        dueDate: 'Jul 18, 2019',
    },
    {
        id: 6,
        title: 'Shreyu 2.3 - Rails, NodeJs, Mean',
        status: 'Pending',
        priority: 'Medium',
        userAvatar: avatar4,
        totalComments: 24,
        totalSubTasks: 8,
        subTaskCompleted: 2,
        dueDate: 'Jul 21, 2019',
    },
    {
        id: 7,
        title: 'Shreyu - Landing page and UI Kit',
        status: 'Review',
        priority: 'Medium',
        userAvatar: avatar7,
        totalComments: 11,
        totalSubTasks: 6,
        subTaskCompleted: 4,
        dueDate: 'Jul 10, 2019',
    },
    {
        id: 8,
        title: 'Shreyu 3.0 - Scoping',
        status: 'Inprogress',
        priority: 'High',
        userAvatar: avatar8,
        totalComments: 10,
        totalSubTasks: 4,
        subTaskCompleted: 3,
        dueDate: 'Jul 24, 2019',
    },
];

export { tasks };
