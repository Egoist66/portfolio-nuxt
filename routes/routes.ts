import type { AppLinks } from "./routes.type";

export default [
    {
      name: 'Home',
      alias: '/',
      path: '/'
    },
    {
      name: 'About',
      path: '/about',
      alias: 'about'
    },
    {
      name: 'Projects',
      path: '/projects',
      alias: 'projects'
    },
    
  ] as AppLinks[]
  