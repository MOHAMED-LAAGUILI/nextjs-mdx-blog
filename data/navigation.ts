export interface NavItem {
   label: string;
   href: string;
   icon: string;
}

export const navLinks: NavItem[] = [
   { label: "Blog", href: "/", icon: "Home" },
   { label: "Posts", href: "/posts", icon: "FileText" },
   { label: "About", href: "/about", icon: "Info" },
];
