import Navbar from '@/components/ui/NavBar';
import ProgressBar from '@/components/ui/ProgressBar';
import ISSChart from '@/components/ui/ISSChart';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';


export default function Welcome() {
    const { datapoints = [] } = usePage().props;

    const latestDatapoint = datapoints.length > 0 ? datapoints[datapoints.length - 1] : null;
    const latestLevel = latestDatapoint ? latestDatapoint.value : 0;
    


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
                        <div className="flex">Tank Level: <p className="pl-2" id="tank-level">{latestLevel}%</p></div>
                        <ProgressBar progress={latestLevel} />
                    </div>
                </div>
                <div className="mx-auto w-full pr-10">
                    <ISSChart datapoints={datapoints} />
                </div>
            </div>
        </div>
    )
}
