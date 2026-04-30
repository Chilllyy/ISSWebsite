import { Link } from "@inertiajs/react";

export default function NavItem({ className, href, label }: { href: string; label: string }) {
    return <li className={`${route().current() == label.toLowerCase() ? 'bg-zinc-400 dark:bg-zinc-600' : ''} px-5 mx-4 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out transform`}><Link href={href}>{label}</Link></li>;
}