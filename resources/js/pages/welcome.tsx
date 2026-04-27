import Navbar from '@/components/ui/NavBar';
import ProgressBar from '@/components/ui/ProgressBar';
import ISSChart from '@/components/ui/ISSChart';
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
            <div className="flex flex-row p-5 h-128">
                <div className="my-0 w-full">
                    <h1 className="text-4xl secondary-text">Real-Time Tracking</h1>
                    <div className="pl-5">
                        <div className="flex">Tank Level: <p className="pl-2" id="tank-level">0%</p></div>
                        <ProgressBar progress={60}/>
                    </div>
                </div>
                <div className="mx-auto w-full pr-10">
                    <ISSChart points={[65, 68, 70]} labels={['Jan', 'Feb', 'Mar']} chartname="Urine Tank Qty. (%)"/>
                </div>
            </div>
        </div>
    )
}
