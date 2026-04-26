import { Link } from "@inertiajs/react";

export default function NavItem({ href, label }) {
    return <li><Link href={href}>{label}</Link></li>;
}