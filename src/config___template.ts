interface Menu{
    name: string;
    description: string;
    url: string;
    image?: string;
}
export let menus: Menu[] = [
    {
        name: "some menu",
        description: "menu desc",
        url: "/somepath"
    },
    {
        name: "Some app",
        description: "another app",
        url: "http://example.com/"
    },
    
]