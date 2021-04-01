import React from 'react';
import './styles.css';
import OptionIcon from '../OptionIcon/OptionIcon';
import { SiTypescript, SiJavascript, SiCss3, SiHtml5, SiNodeDotJs, SiReact, SiSvelte } from 'react-icons/si';

function Skills() {
    return (
        <div className="skill-container">
            <OptionIcon
                skillLevel={90}
                Icon={SiHtml5}
                title="HTML5"
                iconObjConfig={{ size: 60, color: '#e56b1f' }}
            />
            <OptionIcon
                skillLevel={90}
                Icon={SiCss3}
                title="CSS3"
                iconObjConfig={{ size: 60, color: 'dodgerblue' }}
            />
            <OptionIcon
                skillLevel={80}
                Icon={SiJavascript}
                title="Javascript"
                iconObjConfig={{ size: 60, color: '#f0db4f' }}
            />
            <OptionIcon
                skillLevel={60}
                Icon={SiReact}
                title="ReactJS"
                iconObjConfig={{ size: 60, color: '#61DBFB' }}
            />
            <OptionIcon
                skillLevel={45}
                Icon={SiNodeDotJs}
                title="NodeJS"
                iconObjConfig={{ size: 60, color: '#3c873a' }}
            />
            <OptionIcon
                skillLevel={30}
                Icon={SiSvelte}
                title="SvelteJS"
                iconObjConfig={{ size: 60, color: '#e56b1f' }}
            />
            <OptionIcon
                skillLevel={20}
                Icon={SiTypescript}
                title="Typescript"
                iconObjConfig={{ size: 60, color: 'dodgerblue' }}
            />
        </div>
    );
};

export default Skills;