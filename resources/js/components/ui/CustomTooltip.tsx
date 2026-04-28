import dayjs from "dayjs";

export default function CustomTooltip({active, payload, label}) {
    if (!active || !payload || !payload.length) return null;
    const ts = label;

    return (
        <div style={{
            backgroundColor: '#111827',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px'
        }}>
            Urine Tank Qty.
            <div style={{ color: 'rgba(252, 211, 77, 1)', marginBottom: 4}}>
                {payload[0].value}
            </div>
            <div style={{ color: '#aaa', fontSize: 12 }}>
                {dayjs(ts).format('MMM D, YYYY h:mm A')}
            </div>

            <div style={{ color: '#666', fontSize: 12 }}>
                {dayjs(ts).fromNow()}
            </div>
        </div>
    )
}