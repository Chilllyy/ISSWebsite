import { useEffect, useState } from "react";

export default function ProgressBar({ progress = 0, chunks = 10, interval = 100 }) {
    //const filledChunks = Math.round((progress / 100) * chunks);
    const [filledChunks, setFilledChunks] = useState(0);
    useEffect(() => {
        const targetChunks = Math.round((progress / 100) * chunks);
        let current = 0;

        const inter = setInterval(() => {
            current++;
            setFilledChunks(current);
            if (current >= targetChunks) {
                clearInterval(inter);
            }
        }, interval);

        return () => clearInterval(inter);
    }, [progress, chunks, interval]);
    return (
        <div className="flex">
            {Array.from({ length: chunks }).map((_, index) => (
                <div key={index} className={`flex aspect-square w-6 border border-neutral-900 dark:border-neutral-100 rounded transition-colors duration-300 ease-in-out ${index < filledChunks ? 'bg-yellow-500 dark:bg-amber-300' : ''}`}></div>
            ))}
        </div>
    );
}