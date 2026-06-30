import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostCardSkeleton() {
   return (
      <Card className="overflow-hidden rounded-xl border py-0">
         <div className="relative aspect-16/10">
            <Skeleton className="absolute inset-0 rounded-none" />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 backdrop-blur-sm">
               <Skeleton className="h-5 w-20 rounded-md" />
               <Skeleton className="h-5 w-full" />
               <Skeleton className="h-4 w-24" />
            </div>
         </div>
      </Card>
   );
}
