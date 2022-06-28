// images
import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';
import avatar8 from '../../../assets/images/users/avatar-8.jpg';
import avatar9 from '../../../assets/images/users/avatar-9.jpg';
import avatar10 from '../../../assets/images/users/avatar-10.jpg';

export interface ChatUserType {
    id?: number;
    name?: string;
    avatar?: string;
    lastMessage?: string;
    totalUnread?: number;
    lastMessageOn?: string;
    userStatus?: 'busy' | 'online' | 'away' | 'offline';
}

export interface MessageItem {
    id: number;
    from: ChatUserType;
    to: ChatUserType;
    messages: {
        type?: string;
        value?: any;
    }[];
    sendOn?: string;
}

export interface ChatMessage {
    id: number;
    day: string;
    messages: MessageItem[];
}

// list of chat users
const USERS: ChatUserType[] = [
    {
        id: 1,
        name: 'Brandon Smith',
        avatar: avatar2,
        lastMessage: 'How are you today?',
        totalUnread: 3,
        lastMessageOn: '5:30am',
        userStatus: 'offline',
    },
    {
        id: 2,
        name: 'Maria C',
        avatar: avatar10,
        lastMessage: "Hey! a reminder for tomorrow's meeting?",
        totalUnread: 0,
        lastMessageOn: 'Thu',
        userStatus: 'online',
    },
    {
        id: 3,
        name: 'Dominic A',
        avatar: avatar8,
        lastMessage: "Are we going to have this week's planning meeting?",
        totalUnread: 0,
        lastMessageOn: '4:30 am',
        userStatus: 'busy',
    },
    {
        id: 4,
        name: 'Ronda D',
        avatar: avatar9,
        lastMessage: 'Please check these design assets..',
        totalUnread: 0,
        lastMessageOn: 'Wed',
        userStatus: 'online',
    },
    {
        id: 5,
        name: 'Michael H',
        avatar: avatar3,
        lastMessage: 'Are you free for 15 mins? I would like to discuss something',
        totalUnread: 25,
        lastMessageOn: 'Tue',
        userStatus: 'offline',
    },
    {
        id: 6,
        name: 'Thomas R',
        avatar: avatar5,
        lastMessage: "Let's have meeting today between me, you and Tony...",
        totalUnread: 0,
        lastMessageOn: 'Tue',
        userStatus: 'offline',
    },
    {
        id: 7,
        name: 'Thomas J',
        avatar: avatar6,
        lastMessage: 'How are you?',
        totalUnread: 1,
        lastMessageOn: 'Tue',
        userStatus: 'offline',
    },
    {
        id: 8,
        name: 'Rikcy J',
        avatar: avatar1,
        lastMessage: 'Are you interested in learning?',
        totalUnread: 0,
        lastMessageOn: 'Mon',
        userStatus: 'away',
    },
];

const defaultTo: ChatUserType = {
    id: 9,
    name: 'Shreyu N',
    avatar: avatar2,
};

const YESTERDAYMESSAGES: MessageItem[] = [];
const TODAYMESSAGES: MessageItem[] = [];

for (const user of USERS) {
    YESTERDAYMESSAGES.push(
        {
            id: 1,
            messages: [
                {
                    type: 'text',
                    value: 'Hello!',
                },
            ],
            to: defaultTo,
            from: user,
            sendOn: '8:18 am',
        },
        {
            id: 2,
            messages: [
                {
                    type: 'text',
                    value: 'Hi, How are you? What about our next meeting?',
                },
            ],
            to: user,
            from: defaultTo,
            sendOn: '8:20 am',
        }
    );
    TODAYMESSAGES.push(
        {
            id: 1,
            messages: [
                {
                    type: 'text',
                    value: 'Yeah everything is fine',
                },
                {
                    type: 'text',
                    value: "Let's have it today if you are free",
                },
            ],
            to: defaultTo,
            from: user,
            sendOn: '8:21 am',
        },
        {
            id: 2,
            messages: [
                {
                    type: 'text',
                    value: 'Sure thing! let me know if 2pm works for you',
                },
            ],
            to: user,
            from: defaultTo,
            sendOn: '8:25 am',
        },
        {
            id: 3,
            messages: [
                {
                    type: 'text',
                    value: 'Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?',
                },
            ],
            to: defaultTo,
            from: user,
            sendOn: '8:26 am',
        },
        {
            id: 4,
            messages: [
                {
                    type: 'text',
                    value: '2pm it is. sure, we can also discuss about the presentation talk format if you have some extra mins',
                },
                {
                    type: 'text',
                    value: "Sure, let's discuss about presentation format, it would be great to finalize today.",
                },
            ],
            to: user,
            from: defaultTo,
            sendOn: '8:27 am',
        },
        {
            id: 5,
            messages: [
                {
                    type: 'text',
                    value: 'Ok. I am attaching the last year format and assets here....',
                },
                {
                    type: 'file',
                    value: {
                        file: 'Shreyu-sketch.zip',
                        size: '2.3MB',
                    },
                },
            ],
            to: defaultTo,
            from: user,
            sendOn: '8:32 am',
        }
    );
}
// list of chat messages
const CHATHISTORY: ChatMessage[] = [
    {
        id: 1,
        day: 'Yesterday',
        messages: [...YESTERDAYMESSAGES],
    },
    {
        id: 2,
        day: 'Today',
        messages: [...TODAYMESSAGES],
    },
];

export { USERS, CHATHISTORY };
