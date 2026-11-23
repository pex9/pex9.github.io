import { BsCpu, BsDatabase } from 'react-icons/bs';
import {
    SiAngular,
    SiC,
    SiCss,
    SiFirebase,
    SiGooglecloud,
    SiHtml5,
    SiKotlin,
    SiMongodb,
    SiOpenjdk,
    SiPhp,
    SiPython,
    SiReact,
    SiRiscv,
    SiRust,
    SiSelenium,
    SiSpring,
} from 'react-icons/si';

const technologyGroups = [
    {
        title: 'Frontend',
        technologies: [
            { name: 'React', Icon: SiReact, color: '#149eca' },
            { name: 'Angular', Icon: SiAngular, color: '#dd0031' },
            { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
            { name: 'CSS', Icon: SiCss, color: '#1572b6' },
        ],
    },
    {
        title: 'Backend',
        technologies: [
            { name: 'Spring', Icon: SiSpring, color: '#6db33f' },
        ],
    },
    {
        title: 'Languages',
        technologies: [
            { name: 'Java', Icon: SiOpenjdk, color: '#e76f00' },
            { name: 'C', Icon: SiC, color: '#00599c' },
            { name: 'Python', Icon: SiPython, color: '#3776ab' },
            { name: 'Rust', Icon: SiRust, color: '#000000' },
            { name: 'Kotlin', Icon: SiKotlin, color: '#7f52ff' },
            { name: 'PHP', Icon: SiPhp, color: '#777bb4' },
        ],
    },
    {
        title: 'Databases',
        technologies: [
            { name: 'SQL', Icon: BsDatabase, color: '#2563eb' },
            { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
        ],
    },
    {
        title: 'Testing',
        technologies: [
            { name: 'Selenium', Icon: SiSelenium, color: '#43b02a' },
        ],
    },
    {
        title: 'Cloud',
        technologies: [
            { name: 'Google Cloud (GCP)', Icon: SiGooglecloud, color: '#4285f4' },
            { name: 'Firebase', Icon: SiFirebase, color: '#ffca28' },
        ],
    },
    {
        title: 'Architecture',
        technologies: [
            { name: 'x86', Icon: BsCpu, color: '#475569' },
            { name: 'MIPS', Icon: BsCpu, color: '#475569' },
            { name: 'RISC-V', Icon: SiRiscv, color: '#283272' },
        ],
    },
];

function Technology() {
    return (
        <section id="technology" className="technology-section">
            <p className="section-eyebrow">Tools I work with</p>
            <h2>Tech Stack</h2>
            <div className="technology-groups">
                {technologyGroups.map((group) => (
                    <article className="technology-group" key={group.title}>
                        <h3>{group.title}</h3>
                        <div className="technology-items">
                            {group.technologies.map(({ name, Icon, color }) => (
                                <div className="technology-item" key={name}>
                                    <Icon aria-hidden="true" style={{ color }} />
                                    <span>{name}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Technology;
