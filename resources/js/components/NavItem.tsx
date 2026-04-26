import { Link } from "@inertiajs/react";

export default function NavItem({ href, label }: { href: string; label: string }) {
    return <li className="px-5 mx-4 border rounded-2xl"><Link href={href}>{label}</Link></li>;
}