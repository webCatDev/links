
export default function Card({ icon, title, href}) {
    return <div className="card">
        <a href={href} target="blank" className="card-content">
            <span>{icon}</span>
            <span className="link-title">{title}</span>
        </a>
    </div>
}