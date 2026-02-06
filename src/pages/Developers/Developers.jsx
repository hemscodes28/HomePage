import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './Developers.css';

const Developers = () => {
    const teamMembers = [
        {
            name: 'Abinaya',
            title: 'Developer',
            handle: 'abinaya',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ff0033?text=Abinaya',
        },
        {
            name: 'Agila',
            title: 'Developer',
            handle: 'agila',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/7dbeff?text=Agila',
        },
        {
            name: 'Hemkumar',
            title: 'Developer',
            handle: 'hemkumar',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ff0033?text=Hemkumar',
        },
        {
            name: 'Kiruthika',
            title: 'Developer',
            handle: 'kiruthika',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/7dbeff?text=Kiruthika',
        },
        {
            name: 'Nandhakishore',
            title: 'Developer',
            handle: 'nandhakishore',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ff0033?text=Nandhakishore',
        },
        {
            name: 'Satthikumar',
            title: 'Developer',
            handle: 'satthikumar',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/7dbeff?text=Satthikumar',
        },
        {
            name: 'Shagul Hameeth',
            title: 'Developer',
            handle: 'shagulhameeth',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/ff0033?text=Shagul',
        },
        {
            name: 'Thirumaran',
            title: 'Developer',
            handle: 'thirumaran',
            avatarUrl: 'https://via.placeholder.com/400x600/1a1a2e/7dbeff?text=Thirumaran',
        },
    ];

    return (
        <div className="developers-page">
            {/* Animated Background */}
            <div className="developers-bg" />
            <div className="developers-grid" />

            {/* Content */}
            <div className="developers-content">
                {/* Hero Section */}
                <div className="developers-hero">
                    <h1 className="developers-title">Developers</h1>
                    <p className="developers-subtitle">Meet the Architects of Innovation</p>
                    <p className="developers-tagline">
                        <strong>From bugs to breakthroughs—that's the developer life.</strong>
                    </p>
                </div>

                {/* Team Grid */}
                <div className="developers-grid-container">
                    {teamMembers.map((member, index) => (
                        <ProfileCard
                            key={index}
                            name={member.name}
                            title={member.title}
                            handle={member.handle}
                            avatarUrl={member.avatarUrl}
                            enableTilt={true}
                            enableMobileTilt={false}
                            behindGlowEnabled={true}
                            behindGlowColor="rgba(255, 0, 51, 0.67)"
                            customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                            showUserInfo={false}
                            onContactClick={() => console.log(`Contact ${member.name}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Developers;
