import React from 'react';
import { Link } from 'react-router-dom';

interface TeamMembersProps {
    teamMembers: {
        image?: string;
        name: string;
        variant?: string;
    }[];
}

const TeamMembers = ({ teamMembers }: TeamMembersProps) => {
    return (
        <>
            <h6 className="fw-bold">Assign To</h6>
            {(teamMembers || []).map((member, index) => {
                return (
                    <Link key={index} to="#">
                        <img src={member.image} className="avatar-sm m-1 rounded-circle" alt="" />
                    </Link>
                );
            })}
        </>
    );
};

export default TeamMembers;
