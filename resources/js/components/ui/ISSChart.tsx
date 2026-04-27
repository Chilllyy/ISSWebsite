import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { delay } from 'motion/react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ISSChartProps = {
    points: number[],
    labels: string[],
    chartname: string;
};

export default function ISSChart({ points, labels, chartname }: ISSChartProps) {
    const data = {
        labels: labels,
        datasets: [
            {
                id: 1,
                label: chartname,
                data: points,
                borderColor: 'rgba(252, 211, 77, 0.75)',
                tension: 0.3,
                borderDash: [1000, 1000],
                borderDashOffset: 1000
            }
        ]
    }

    const totalDuration = 2000;
    const delayBetweenPoints = totalDuration / points.length;

    const options = {
        plugins: {
            legend: {
                onClick: () => {
                    
                }
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'easeInOutQuad',
                from: 0.3,
                to: 0.1,
                loop: true
            },
            borderDashOffset: {
                from: 1000,
                to: 0,
                duration: totalDuration,
                easing: 'linear'
            }
        }
    }
    return (
        <Line data={data} options={options}/>
    );
}