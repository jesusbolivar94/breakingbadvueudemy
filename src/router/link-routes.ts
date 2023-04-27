export interface RouterLink {
    name: string,
    title: string,
    path: string,
}

export const routerLinks: RouterLink[]= [
    { path: '/', name: 'home', title: 'Home' },
    { path: '/about', name: 'about', title: 'About' },
    { path: '/characters', name: 'characters', title: 'Characters' },
]