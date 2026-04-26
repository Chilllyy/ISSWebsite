import Navbar from '@/components/ui/NavBar';
import ProgressBar from '@/components/ui/ProgressBar';
import { Head } from '@inertiajs/react';


export default function Welcome() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col max-w-1/2 p-5">
                <h1 className="text-4xl secondary-text">Monitoring ISS Urine Tank</h1>
                <div className="pl-5 max-w-3/4 text-2xl">
                    <p>Instant, online access to the fullness level of the Urine Tank on the International Space Station</p>
                    <p>All from a single mod, for various games</p>
                </div>
                
            </div>
            <div className="flex flex-col max-w-1/2 p-5">
                <h1 className="text-4xl secondary-text">Real-Time Tracking</h1>
                <div className="pl-5">
                    <p className="flex">Tank Level: <p className="pl-2" id="tank-level">0%</p></p>
                    <ProgressBar progress={60}/>
                </div>
            </div>
        </div>
    )
}
