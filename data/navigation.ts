export interface NavItem {
   label: string;
   href: string;
   icon: string;
}

export const navLinks: NavItem[] = [
   { label: "Posts", href: "/posts", icon: "FileText" },
   { label: "About", href: "/about", icon: "Info" },
];
