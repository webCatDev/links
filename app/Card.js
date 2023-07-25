import Link from "next/link";

export default function Card({ icon, title, href}) {
    return <div className="card">
        <Link href={href} target="blank" className="card-content">
            <span>{icon}</span>
            <span className="link-title">{title}</span>
        </Link>
    </div>
}