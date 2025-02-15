import type { AppLinks } from "./routes.type";

export default [
    {
      name: 'Home',
      alias: '/',
      path: '/'
    },
    {
      name: 'Projects',
      path: '/projects',
      alias: 'projects'
    },
    {
      name: 'About',
      path: '/about',
      alias: 'about'
    },
   
] as AppLinks[]
  