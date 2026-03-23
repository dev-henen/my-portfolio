import type { PageServerLoad } from './$types';
import Skills from '$lib/data/skills.json';
import Projects from '$lib/data/projects.json';
import Experience from '$lib/data/experience.json';
import Stats from '$lib/data/stats.json';
import type { Project, SkillCategory, ExperienceItem, Stat } from '$lib/types';

export const load: PageServerLoad = async () => {
    return {
        skills: Skills as SkillCategory[],
        projects: Projects as Project[],
        experience: Experience as ExperienceItem[],
        stats: Stats as Stat[],
    };
};
