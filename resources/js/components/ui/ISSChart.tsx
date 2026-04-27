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
dayjs.extend(relativeTime);

export default function ISSChart({ datapoints }) {

    const data = datapoints.map(p => ({
        name: dayjs(p.timestamp).fromNow(),
        value: Number(p.value)
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>

                <defs>
                    {/* Gradient under line */}
                    <linearGradient id="issGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(252, 211, 77, 0.4)" />
                        <stop offset="100%" stopColor="rgba(252, 211, 77, 0)" />
                    </linearGradient>

                    {/* Neon glow */}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <CartesianGrid stroke="rgba(255,255,255,0.1)" />

                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />

                <Tooltip
                    cursor={{ stroke: 'rgba(252, 211, 77, 0.3)' }}
                    contentStyle={{
                        backgroundColor: '#111827',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff'
                    }}
                />

                {/* 🌈 THIS is what actually draws the gradient */}
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="none"
                    fill="url(#issGradient)"
                />

                {/* ✨ neon line on top */}
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="rgba(252, 211, 77, 1)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                    filter="url(#glow)"
                />

            </AreaChart>
        </ResponsiveContainer>
    );
}