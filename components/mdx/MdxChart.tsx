"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
   type ChartConfig,
   ChartContainer,
   ChartLegend,
   ChartLegendContent,
   ChartTooltip,
   ChartTooltipContent,
} from "@/components/ui/chart";

interface MdxChartProps {
   data: { label: string; values: Record<string, number> }[];
   series: { key: string; label: string; color: string }[];
   xKey?: string;
}

export default function MdxChart({ data, series, xKey = "label" }: MdxChartProps) {
   const chartData = data.map(d => ({
      [xKey]: d.label,
      ...d.values,
   }));

   const chartConfig = Object.fromEntries(series.map(s => [s.key, { color: s.color, label: s.label }])) satisfies ChartConfig;

   return (
      <ChartContainer
         config={chartConfig}
         className="min-h-[200px] w-full my-6"
      >
         <BarChart
            accessibilityLayer
            data={chartData}
         >
            <CartesianGrid vertical={false} />
            <XAxis
               dataKey={xKey}
               tickLine={false}
               tickMargin={10}
               axisLine={false}
               tickFormatter={(v: string) => v.slice(0, 8)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {series.map(s => (
               <Bar
                  key={s.key}
                  dataKey={s.key}
                  fill={`var(--color-${s.key})`}
                  radius={4}
               />
            ))}
         </BarChart>
      </ChartContainer>
   );
}
