// images
import userAvatar from '../../../assets/images/users/avatar-7.jpg';

export interface UserInfoTypes {
    userName?: string;
    avatar?: string;
    designation?: string;
    location?: string;
    profileProgress: number;
    about?: string;
    email?: string;
    phone?: string;
    address?: string;
    skills?: string[];
}

const userInfo: UserInfoTypes = {
    userName: 'Shreyu N',
    designation: 'User Experience Specialist',
    location: 'San Francisco, CA',
    avatar: userAvatar,
    profileProgress: 60,
    about: "Hi I'm Shreyu. I am user experience and user interface designer. I have been working on UI & UX since last 10 years.",
    email: 'xyz123@gmail.com',
    phone: '(123) 123 1234',
    address: '1975 Boring Lane, San Francisco, California, United States - 94108',
    skills: ['UI design', 'UX', 'Sketch', 'Photoshop', 'Frontend'],
};

export { userInfo };
