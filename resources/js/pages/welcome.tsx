import Navbar from '@/components/ui/NavBar';
import ProgressBar from '@/components/ui/ProgressBar';
import ISSChart from '@/components/ui/ISSChart';
import ModItemWidget from '@/components/ui/ModItemWidget';
import { Head, usePage } from '@inertiajs/react';



export default function Welcome() {
    const { datapoints = [] } = usePage().props;

    const latestDatapoint = datapoints.length > 0 ? datapoints[datapoints.length - 1] : null;
    const latestLevel = latestDatapoint ? latestDatapoint.value : 0;
    


    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:max-w-1/2 p-5">
                <h1 className="text-2xl md:text-4xl secondary-text">Monitoring ISS Urine Tank</h1>
                <div className="pl-5 md:max-w-3/4 md:text-2xl">
                    <p>Instant, online access to the fullness level of the Urine Tank on the International Space Station</p>
                    <p>All from a single mod, for various games</p>
                    <sub className="text-xs">Inspired by, but not affiliated with <a className="secondary-text" href="https://x.com/ISSPissTracker">@ISSPissTracker</a></sub>
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-5 h-128">
                <div className="my-0 w-full">
                    <h1 className="text-4xl secondary-text">Real-Time Tracking</h1>
                    <div className="pl-5">
                        <div className="flex">Tank Level: <p className="pl-2" id="tank-level">{latestLevel}%</p></div>
                        <ProgressBar progress={latestLevel} />
                    </div>
                </div>
                <div className="mx-auto w-full py-10 h-full h-full pr-10">
                    <ISSChart datapoints={datapoints} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-5 h-128">
                <div className="my-0 w-full">
                    <h1 className="text-4xl secondary-text">Available Mods</h1>
                    <ul>
                        <ModItemWidget name="Minecraft" desc="Adds an on screen element for the Urine Tank Quantity" src="images/minecraft_website_graphic.png" url="https://modrinth.com/mod/issonscreendisplay" alt="Minecraft ISS On Screen Display" />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
