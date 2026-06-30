"use client";

import {
   Briefcase,
   Code,
   LayoutList,
   type LucideIcon,
   Monitor,
   Palette,
   Search,
   Server,
   Shield,
   Smartphone,
   Sparkles,
   Wrench,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { IPost } from "@/data/posts";
import PostCardSkeleton from "./PostCardSkeleton";
import PostsGrid from "./PostsGrid";

const iconMap: Record<string, LucideIcon> = {
   AI: Sparkles,
   All: LayoutList,
   Authentication: Shield,
   Backend: Server,
   Career: Briefcase,
   CSS: Palette,
   Frontend: Monitor,
   Mobile: Smartphone,
   Tools: Wrench,
   TypeScript: Code,
};

const PER_PAGE = 6;

interface CategoryTabsProps {
   posts: IPost[];
   categories: string[];
   search?: string;
}

export default function CategoryTabs({ posts, categories, search = "" }: CategoryTabsProps) {
   const [activeTab, setActiveTab] = useState("All");
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

   const countMap: Record<string, number> = {};
   for (const p of posts) {
      countMap[p.category] = (countMap[p.category] || 0) + 1;
   }

   const allTabs = ["All", ...categories];

   const categoryFiltered = activeTab === "All" ? posts : posts.filter(p => p.category === activeTab);

   const searched = search ? categoryFiltered.filter(p => p.title.toLowerCase().includes(search.toLowerCase())) : categoryFiltered;

   const totalPages = Math.ceil(searched.length / PER_PAGE);
   const paged = searched.slice((page - 1) * PER_PAGE, page * PER_PAGE);

   const triggerLoading = useCallback(() => {
      setLoading(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setLoading(false), 350);
   }, []);

   const handleTabChange = (tab: string) => {
      if (tab === activeTab) return;
      setActiveTab(tab);
      setPage(1);
      triggerLoading();
   };

   const goToPage = (p: number) => {
      setPage(p);
      triggerLoading();
   };

   useEffect(() => {
      return () => {
         if (timerRef.current) clearTimeout(timerRef.current);
      };
   }, []);

   return (
      <div>
         <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
         >
            <TabsList className="w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden">
               {allTabs.map(cat => {
                  const Icon = iconMap[cat];
                  const count = cat === "All" ? posts.length : countMap[cat] || 0;
                  return (
                     <TabsTrigger
                        key={cat}
                        value={cat}
                        className="gap-1.5"
                     >
                        {Icon && <Icon className="size-3.5 shrink-0" />}
                        <span className="whitespace-nowrap">{cat}</span>
                        <Badge
                           variant="outline"
                           className="ml-1 h-4 rounded-full px-1.5 text-[10px]"
                        >
                           {count}
                        </Badge>
                     </TabsTrigger>
                  );
               })}
            </TabsList>
         </Tabs>

         {loading ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
               {Array.from({ length: 3 }).map((_, i) => (
                  <PostCardSkeleton key={i} />
               ))}
            </div>
         ) : (
            <div className="mt-8">
               {paged.length === 0 ? (
                  <div className="flex flex-col items-center gap-3 py-16">
                     <Search className="size-8 text-muted-foreground/50" />
                     <p className="text-sm text-muted-foreground">No articles found.</p>
                  </div>
               ) : (
                  <PostsGrid posts={paged} />
               )}

               {totalPages > 1 && (
                  <Pagination className="mt-10">
                     <PaginationContent>
                        <PaginationItem>
                           <PaginationPrevious
                              href="#"
                              onClick={e => {
                                 e.preventDefault();
                                 if (page > 1) goToPage(page - 1);
                              }}
                              className={page <= 1 ? "pointer-events-none opacity-50" : ""}
                           />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                           <PaginationItem key={p}>
                              <PaginationLink
                                 href="#"
                                 isActive={p === page}
                                 onClick={e => {
                                    e.preventDefault();
                                    goToPage(p);
                                 }}
                              >
                                 {p}
                              </PaginationLink>
                           </PaginationItem>
                        ))}

                        <PaginationItem>
                           <PaginationNext
                              href="#"
                              onClick={e => {
                                 e.preventDefault();
                                 if (page < totalPages) goToPage(page + 1);
                              }}
                              className={page >= totalPages ? "pointer-events-none opacity-50" : ""}
                           />
                        </PaginationItem>
                     </PaginationContent>
                  </Pagination>
               )}
            </div>
         )}
      </div>
   );
}
