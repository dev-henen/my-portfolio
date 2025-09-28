export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    code: string | null;
  };
  image: string;
}
