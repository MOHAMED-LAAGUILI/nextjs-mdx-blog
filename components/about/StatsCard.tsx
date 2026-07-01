import { Globe, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatsCard({ stats }: { stats: { icon: LucideIcon; label: string; value: number | string }[] }) {
   return (
      <Card>
         <CardContent className="space-y-5 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
               <Globe className="size-5" />
               Stats
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
               {stats.map(stat => {
                  const StatIcon = stat.icon;
                  return (
                     <div
                        key={stat.label}
                        className="flex items-center gap-4 rounded-xl border bg-card p-4"
                     >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                           <StatIcon className="size-5 text-primary" />
                        </div>
                        <div>
                           <p className="text-xl font-bold">{stat.value}</p>
                           <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </CardContent>
      </Card>
   );
}
