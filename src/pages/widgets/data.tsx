// images
import avatar1 from '../../assets/images/users/avatar-7.jpg';
import avatar2 from '../../assets/images/users/avatar-9.jpg';

export interface EventTypes {
    id: number;
    title: string;
    time: string;
}

export interface ActivityTypes {
    id: number;
    avatar?: string;
    userInitial?: string;
    variant?: string;
    activityTitle: string;
    time: string;
}
const calendarEvents: EventTypes[] = [
    {
        id: 1,
        title: 'UX Planning Meeting',
        time: '7:30 AM - 10:00 AM',
    },
    {
        id: 2,
        title: 'Hyper v3 Scope Review',
        time: '10:30 AM - 11:45 AM',
    },
    {
        id: 3,
        title: 'Ubold v4 Brainstorming',
        time: '12:15 PM - 02:00 PM',
    },
    {
        id: 4,
        title: 'Shreyu React Planning',
        time: '5:30 PM - 06:15 PM',
    },
];

const activities: ActivityTypes[] = [
    {
        id: 1,
        avatar: avatar1,
        activityTitle:
            '<a href="javascript:void(0)" class="fw-bold">Shreyu</a> has attached design-draft.sketch in project<span class="fw-bold text-primary"> Admin </span>',
        time: '2 Min Ago',
    },
    {
        id: 2,
        userInitial: 'G',
        variant: 'primary',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Greeva</a> has commented on project <span class="fw-bold text-primary">Admin</span>`,
        time: '12 Min Ago',
    },
    {
        id: 3,
        avatar: avatar2,
        activityTitle: ` <a href="javascript:void(0)" class="fw-bold">Mannat</a> has reacted with <i class='uil uil-thumbs-up text-success fs-13'></i> on comment from <span class="fw-bold text-primary">Shreyu</span> on project <span class="fw-bold text-primary">Admin</span>`,
        time: '14 Min Ago',
    },
    {
        id: 4,
        userInitial: 'D',
        variant: 'success',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Dhyani</a> has reacted with <i class='uil uil-heart-sign text-danger fs-13'></i> on comment from <span class="fw-bold text-primary">Shreyu</span> on project <span class="fw-bold text-primary">Admin</span>`,
        time: '14 Min Ago',
    },
];

export { calendarEvents, activities };
