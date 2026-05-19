import dayjs from "dayjs";

export default function CustomTooltip({active, payload, label, background}) {
    if (!active || !payload || !payload.length) return null;
    const ts = label;

    return (
        <div style={{
            backgroundColor: background.background.background,
            border: background.background.border || "none",
            padding: '10px',
            borderRadius: '4px'
        }}>
            Urine Tank Qty.
            <div style={{ color: background.background.primary, marginBottom: 4}}>
                {payload[0].value}
            </div>
            <div style={{ color: background.background.secondary, fontSize: 12 }}>
                {dayjs(ts).format('MMM D, YYYY h:mm A')}
            </div>

            <div style={{ color: background.background.tertiary, fontSize: 12 }}>
                {dayjs(ts).fromNow()}
            </div>
        </div>
    )
}