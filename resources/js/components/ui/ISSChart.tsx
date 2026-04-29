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
dayjs.extend(relativeTime);

export default function ISSChart({ datapoints }) {

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
                        <stop offset="0%" stopColor="rgba(252, 211, 77, 0.4)" />
                        <stop offset="100%" stopColor="rgba(252, 211, 77, 0)" />
                    </linearGradient>

|                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <CartesianGrid stroke="rgba(255,255,255,0.1)" />

                <XAxis dataKey="name" tickFormatter={(t) => formatRelativeTime(t)}stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" domain={[0, 100]}/>

                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(252, 211, 77, 0.3)' }} />

                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="none"
                    fill="url(#issGradient)"
                />

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