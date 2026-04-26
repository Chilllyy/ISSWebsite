import Navbar from '@/components/ui/NavBar';
import ProgressBar from '@/components/ui/ProgressBar';
import { Head } from '@inertiajs/react';


export default function Welcome() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col max-w-1/2 p-5">
                <h1 className="text-4xl font-bold text-yellow-500 dark:text-amber-300">Monitoring ISS Urine Tank</h1>
                <p>Instant, online access to the fullness level of the Urine Tank on the International Space Station</p>
                <p>All from a single mod, for various games</p>
            </div>
            <div className="flex flex-col max-w-1/2 p-5">
                <h1 className="text-4xl font-bold text-yellow-500 dark:text-amber-300">Real-Time Tracking</h1>
                <div>
                    <p className="flex">Tank Level: <p className="pl-2" id="tank-level">0%</p></p>
                    <ProgressBar progress={60}/>
                </div>
            </div>
        </div>
    )
}
