import { MenuItem } from "./menu.module";
export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Dashboard',
        link: '/dashboard',
    },
    {
        id: 2,
        label: 'Home',
        link: '/dashboard',
    }, {
        id: 3,
        label: 'Contact',
        link: '/dashboard',
    }, {
        id: 4,
        label: 'About',
        link: '/dashboard',
    },
    { subItems: [
            {
                id: 5,
                label: 'action1',
                link: 'administration/user',
                parentId: 5
            },
            {
                id: 6,
                label: 'action2',
                link: 'administration/user',
                parentId: 5
            },
            {
                id: 7,
                label: 'action3',
                link: 'administration/user',
                parentId: 5
            },
        ]
    },




]