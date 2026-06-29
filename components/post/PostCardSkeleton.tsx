import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostCardSkeleton() {
   return (
      <Card>
         <Skeleton className="aspect-16/10 rounded-none rounded-t-lg" />
         <CardContent className="space-y-3 p-5">
            <Skeleton className="h-5 w-20 rounded-md" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-24" />
         </CardContent>
      </Card>
   );
}
