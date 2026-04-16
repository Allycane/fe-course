import React from 'react';
import Article from './Article';
import SkillsCoding from './SkillsCoding';
import SkillsTitle from './SkillsTitle';
import SkillsTools from './SkillsTools';

export default function SkillsContent({data}) {
    // console.log(`SkillsContent ::`, data)
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills" />
                <SkillsCoding list={data?.coding}/>
            </Article>

            <Article className="skills-tools">
                <SkillsTitle title="Tools" />
                <SkillsTools list={data?.tool}/>
            </Article>

            <Article className="skills-etc">
                <SkillsTitle title="ETC" />
                <SkillsTools list={data?.etc}/>
            </Article>
        </div>
    );
}

