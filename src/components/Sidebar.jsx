import IconButton from "./IconButton"

export default function Sidebar({ onClick }) {

    return (
        <>
            <IconButton className="bi bi-instagram" isTop />
            <IconButton className="bi bi-house" title="Home" />
            <IconButton className="bi bi-search" title="Search" />
            <IconButton className="bi bi-compass" title="Explore" />
            <IconButton className="bi bi-film" title="Reels" />
            <IconButton className="bi bi-chat" title="Messages" />
            <IconButton className="bi bi-heart" title="Notifications" />
            <IconButton className="bi bi-plus-square" title="create" onClick={onClick} />
            <IconButton className="bi bi-person-circle" title="Profile" />
            <IconButton className="bi bi-list" title="More" isBottom />
        </>
    );
}