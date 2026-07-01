import {
   AlertCircle,
   BookOpen,
   Brain,
   CheckCircle2,
   Code2,
   Cpu,
   ExternalLink,
   FileCode2,
   Globe,
   Lightbulb,
   type LucideIcon,
   Sparkles,
   Terminal,
   Users,
   XCircle,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
   ai: Brain,
   alert: AlertCircle,
   book: BookOpen,
   check: CheckCircle2,
   code: Code2,
   cpu: Cpu,
   external: ExternalLink,
   file: FileCode2,
   globe: Globe,
   idea: Lightbulb,
   people: Users,
   sparkles: Sparkles,
   terminal: Terminal,
   x: XCircle,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
   const LucidIcon = iconMap[name] || Sparkles;
   return (
      <LucidIcon
         className={className || "inline size-4 align-text-bottom"}
         aria-hidden="true"
      />
   );
}
