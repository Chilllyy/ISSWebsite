import {
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import CustomTooltip from '@/components/ui/CustomTooltip';
import { useEffect, useState } from 'react';
dayjs.extend(relativeTime);

export default function ISSChart({ datapoints }) {

    const [theme, setTheme] = useState(
        document.documentElement.classList.contains("dark")
    )

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(
                document.documentElement.classList.contains("dark")
            );
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);


    const colors = theme
    ? { //Dark
        line: "rgb(250, 204, 21)",
        gradientTop: "rgba(250, 204, 21, 0.45)",
        gradientBottom: "rgba(250, 204, 21, 0)",
        grid: "rgba(255,255,255,0.06)",
        axis: "rgba(255,255,255,0.55)",
        tooltipCursor: "rgba(250, 204, 21, 0.25)",
        dotStroke: "#111827"
    }
    : { //Light
        line: "rgb(217, 119, 6)",
        gradientTop: "rgba(245, 158, 11, 0.45)",
        gradientBottom: "rgba(245, 158, 11, 0)",
        grid: "rgba(0,0,0,0.25)",
        axis: "rgba(0,0,0,0.75)",
        tooltipCursor: "rgba(217, 119, 6, 0.2)",
        dotStroke: "#ffffff"
    };

    const data = datapoints.map(p => ({
        name: new Date(p.timestamp).getTime(),
        value: Number(p.value)
    }));

    function formatRelativeTime(ts) {
        return dayjs(ts).fromNow();
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>

                <defs>
                    <linearGradient id="issGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={colors.gradientTop} />
                        <stop offset="100%" stopColor={colors.gradientBottom} />
                    </linearGradient>

|                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <CartesianGrid
                    stroke={colors.grid}
                    vertical={false}
                />

                
                <XAxis
                    dataKey="name"
                    tickFormatter={(t) => formatRelativeTime(t)}
                    stroke={colors.axis}
                    tick={{ fill: colors.axis }}
                />
                
                <YAxis 
                    domain={[0, 100]}
                    stroke={colors.axis}
                    tick={{ fill: colors.axis }}
                />

                <Tooltip content={<CustomTooltip />} cursor={{ stroke: colors.tooltipCursor }} />

                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="none"
                    fill="url(#issGradient)"
                />

                <Line
                    type="monotone"
                    dataKey="value"
                    stroke={colors.line}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, fill: colors.line, stroke: colors.dotStroke, strokeWidth: 2 }}
                    filter="url(#glow)"
                />

            </AreaChart>
        </ResponsiveContainer>
    );
}