export interface IPost {
   title: string;
   slug: string;
   date: string;
   category: string;
   thumbnail: string;
}

export const posts: IPost[] = [
   {
      category: "Blockchain",
      date: "2024-02-28",
      slug: "abc-efg",
      thumbnail: "/images/thumbnails/green-coding.jpg",
      title: "Abc Efg",
   },
   {
      category: "Blockchain",
      date: "2024-02-28",
      slug: "blockchain-beyond-cryptocurrency-real-world-applications",
      thumbnail: "/images/thumbnails/blockchain.jpg",
      title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
   },
   {
      category: "Cloud Computing",
      date: "2024-04-18",
      slug: "cloud-computing-architecture-and-services-explained",
      thumbnail: "/images/thumbnails/cloud-computing.jpg",
      title: "Cloud Computing: Architecture and Services Explained",
   },
   {
      category: "CSS",
      date: "2024-02-15",
      slug: "css-grid-modern-layout-techniques-for-responsive-design",
      thumbnail: "/images/thumbnails/css-grid.jpg",
      title: "CSS Grid: Modern Layout Techniques for Responsive Design",
   },
   {
      category: "Cybersecurity",
      date: "2024-01-25",
      slug: "cybersecurity-in-2024-protecting-your-digital-assets",
      thumbnail: "/images/thumbnails/cybersecurity.jpg",
      title: "Cybersecurity in 2024: Protecting Your Digital Assets",
   },
   {
      category: "Web Development",
      date: "2024-03-15",
      slug: "getting-started-with-web-development-in-2024",
      thumbnail: "/images/thumbnails/web-development.jpg",
      title: "Getting Started with Web Development in 2024",
   },
   {
      category: "Sustainability",
      date: "2024-03-10",
      slug: "green-coding-building-environmentally-conscious-web-applications",
      thumbnail: "/images/thumbnails/green-coding.jpg",
      title: "Green Coding: Building Environmentally Conscious Web Applications",
   },
   {
      category: "AI/ML",
      date: "2024-03-22",
      slug: "machine-learning-a-beginners-roadmap",
      thumbnail: "/images/thumbnails/machine-learning.jpg",
      title: "Machine Learning: A Beginner's Roadmap",
   },
   {
      category: "React",
      date: "2024-02-20",
      slug: "mastering-react-hooks-a-comprehensive-guide",
      thumbnail: "/images/thumbnails/react-hooks.jpg",
      title: "Mastering React Hooks: A Comprehensive Guide",
   },
   {
      category: "Performance",
      date: "2024-04-05",
      slug: "optimizing-nextjs-applications-for-maximum-performance",
      thumbnail: "/images/thumbnails/nextjs-optimizing.jpg",
      title: "Optimizing Next.js Applications for Maximum Performance",
   },
   {
      category: "TypeScript",
      date: "2024-01-10",
      slug: "why-typescript-will-transform-your-javascript-development",
      thumbnail: "/images/thumbnails/typescript.jpg",
      title: "Why TypeScript Will Transform Your JavaScript Development",
   },
];
