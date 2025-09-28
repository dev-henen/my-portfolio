import type { PageServerLoad } from './$types';
import Skills from '$lib/data/skills.json';
import Projects from '$lib/data/projects.json';
import type { Project } from '$lib/types';

export const load: PageServerLoad = async ({ locals }) => {
    const skills = Skills as string[];
    const projects = Projects as Project[];

    return {
        skills,
        projects,
    };
};