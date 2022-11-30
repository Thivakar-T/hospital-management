import { MenuItem } from "./menu.module";
export const MENU: MenuItem[] = [
    // {
    //     id: 1,
    //     label: 'Dashboard',
    //     link: '/home',
    // },
    // {
    //     id: 2,
    //     label: 'Home',
    //     link: '',
    // }, {
    //     id: 3,
    //     label: 'Contact',
    //     link: '',
    // }, {
    //     id: 4,
    //     label: 'About',
    //     link: '/about',
    // },
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