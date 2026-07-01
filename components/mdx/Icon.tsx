import {
   AlertCircle, BookOpen, Brain, CheckCircle2, Code2, Cpu, ExternalLink, FileCode2,
   Globe, Lightbulb, Sparkles, Terminal, Users, XCircle,
   type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
   ai: Brain,
   code: Code2,
   file: FileCode2,
   external: ExternalLink,
   globe: Globe,
   idea: Lightbulb,
   people: Users,
   sparkles: Sparkles,
   terminal: Terminal,
   book: BookOpen,
   check: CheckCircle2,
   x: XCircle,
   alert: AlertCircle,
   cpu: Cpu,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
   const LucidIcon = iconMap[name] || Sparkles;
   return <LucidIcon className={className || "inline size-4 align-text-bottom"} aria-hidden="true" />;
}
