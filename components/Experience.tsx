"use client" 

import ExperienceBD from "./ExperienceBD"
import { useState, useEffect } from "react";

/**
 * @param position - name of position of experience
 * @param name - name of the company
 * @param duration - how long I was at the company
 * @param description - nested array where each index is a bullet point
 */
const backgroundInfo = [
    {
        position: "Software Engineer Intern",
        name: "BioCare",
        duration: "Sep 2025 - Present",
        description: [
            "Developed a React Native mobile interface for a smart prosthetic system, implementing responsive UI and device integrations (live telemetry, gesture modes, preset control) to support real-time patient use and clinical monitoring.",
            "Architected Firebase infrastructure with secure authentication, real-time data synchronization, and encrypted database operations, reducing load times by 300ms.",
            "Developing a RESTful API with 8 endpoints to integrate front-end and back-end systems, reducing data retrieval time by 330ms and enabling 3 new feature implementations.",
        ],
        link: "https://carleton-biocare.ca/",
    },
    {
        position: "Coding Intructor & Founder",
        name: "Digital Builders",
        duration: "June 2025 - Nov 2025",
        description: [
            "Founded and led coding program with 4 instructors, developing comprehensive Python curriculum for 16 students and implementing mentorship framework resulting in 92% student retention rate.",
            "Secured over $5,000 in grants and sponsorships enabling free laptops and lunch for all students.",
        ],
        link: ""

    }, 
    {
        position: "Web Developer",
        name: "Somali Student Association",
        duration: "Jan 2025 - Present",
        description: [
            "Built responsive website for Somali Student Association using React and Tailwind CSS, implementing 5 key features including event calendar and resource directory, increasing community engagement by 42%.",
            "Maintained website through weekly content updates and Git version control, deploying 3 new features and ensuring 99.7% uptime to support 140 active community members.",
        ],
        link: "https://sites.google.com/view/carletonussa/home/"
    },
    {
        position: "Partnership Director",
        name: "Carleton ColorStack",
        duration: "Nov 2025 - Present",
        description: [
            "Established strategic partnerships with employers through targeted outreach and recruitment coordination, expanding hiring access for 50+ Black and Latinx students.",
            "Standardized resume collection and distribution workflows, reducing turnaround time for partner requests and improving candidate visibility for underrepresented students.",
        ],
        link: "https://www.colorstack.org/"

    },
]


const Experience = () => {

    const [currExp, setCurrExp] = useState(backgroundInfo[0]);
    const [selectedIdx, setSelectedIdx] = useState(0); 

    /**
     * onClick function that handles setting the new current experience
     * @param name - name of the company to update description 
     */
    const handleClick = (name: string) => {
        for (let index = 0; index < backgroundInfo.length; index++) {
            if (name === backgroundInfo[index].name) {
                setCurrExp(backgroundInfo[index]);
                setSelectedIdx(index);
            }
        }
    }

    return (
        <section id="experience" className="max-w-containerxs mx-auto py-25 lgl:py-24 px-4">
            <h1 className="text-center font-bold text-4xl">
                Experiences
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
            </h1>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-36 flex flex-col">
                    {backgroundInfo.map((exp, indx) => {
                        return (
                            <div key={indx}>
                                <li 
                                    onClick={() => handleClick(exp.name)}
                                    className={`border-l-2 ${selectedIdx === indx ? 'border-l-sky-400 bg-[#112240] text-white' : 'border-l-sky-400 bg-transparent hover:bg-[#112240] hover:text-white'} py-3 text-sm
                                    cursor-pointer duration-200 px-8 font-medium text-base flex gap-2 whitespace-normal`}
                                >
                                    {exp.name}
                                </li>
                            </div>
                        )
                    })}
                </ul>
                <ExperienceBD currExp={currExp}/>
            </div> 
        </section>
    )
}

export default Experience