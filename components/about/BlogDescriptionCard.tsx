import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BlogDescriptionCard({ descriptions }: { descriptions: string[] }) {
   return (
      <Card>
         <CardContent className="space-y-5 p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
               <BookOpen className="size-5" />
               About This Blog
            </h3>

            <div className="space-y-4">
               {descriptions.map((text, index) => (
                  <p
                     key={index}
                     className="leading-7 text-muted-foreground"
                  >
                     {text}
                  </p>
               ))}
            </div>
         </CardContent>
      </Card>
   );
}
