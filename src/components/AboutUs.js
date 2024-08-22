import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaTwitter,
  FaArtstation,
} from "react-icons/fa";

function AboutUs() {
  const teamMembers = [
    {
      name: "Thien An Ly",
      role: "Creative Director, Producer, Lead Programmer",
      avatar: "/profile/Aly.jpg",
      linkedin:
        "https://www.linkedin.com/in/%C3%A2n-thi%C3%AAn-l%C3%BD-040b3520a",
      github: "https://github.com/thelazyant164",
      website: "https://thelazyant164.github.io",
    },
    {
      name: "Yufan Zhou",
      role: "Technical Designer, Level Designer",
      avatar: "/profile/Yufan.webp",
      linkedin: "https://www.linkedin.com/in/yufan-zhou-474895298",
      github: "https://github.com/YufanZhou28",
    },
    {
      name: "Lachlan Haines",
      role: "3D Artist, Animator, Level Designer",
      avatar: "/profile/Lachlan.webp",
      linkedin: "https://www.linkedin.com/in/lachlan-haines-992899288",
    },
    {
      name: "Meng Yu Lim",
      role: "2D Artist",
      avatar: "/profile/Meng.webp",
      linkedin: "https://www.linkedin.com/in/meng-yu-lim-ba0873265",
      twitter: "https://x.com/PortgirlX3",
      website: "https://powort.carrd.co",
    },
    {
      name: "Hoang Phuc Huynh",
      role: "Level Designer, Technical Artist",
      avatar: "profile/Wilson.webp",
      linkedin: "https://www.linkedin.com/in/phuc-huynh-998073226",
      github: "https://github.com/Quearktum",
    },
    {
      name: "Minh Hang Le",
      role: "Environment Artist",
      avatar: "profile/Avie.webp",
      linkedin: "https://www.linkedin.com/in/minh-le-5101b8242",
      artStation: "https://www.artstation.com/minhhangle1",
    },
    {
      name: "Casper Kelcoyne-Lawrence",
      role: "Level Designer",
      avatar: "profile/Casper.webp",
      linkedin:
        "https://www.linkedin.com/in/casper-kelcoyne-lawrence-17a000218",
    },
    {
      name: "Thomas Nguyen",
      role: "Level Designer, Programmer",
      avatar: "profile/Tom.webp",
      linkedin: "https://www.linkedin.com/in/thomas-nguyen-171b16259",
      github: "https://github.com/BProjectx",
    },
  ];

  const formatRoles = (roles) => {
    return roles.split(",").map((role, index, array) => (
      <React.Fragment key={index}>
        {role.trim()}
        {index < array.length - 1 && <br />}{" "}
        {/* Insert <br/> after every comma except the last one */}
      </React.Fragment>
    ));
  };

  return (
    <section className="about-us">
      <h2>About Us</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.avatar} alt={member.name} className="avatar" />
            <h3>{member.name}</h3>
            <p>{formatRoles(member.role)}</p>
            <div className="social-icons">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              )}
              {member.artStation && (
                <a
                  href={member.artStation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaArtstation />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
