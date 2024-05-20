import { Button } from "react-bootstrap";

export default function IconButton({ isTop, isBottom, className, onClick }) {
    let margin = "light";

    if (isTop) {
        margin = "light m-4";
    } else if (isBottom) {
        margin = "light mt-auto mb-3";
    }

    return (
        <>
            <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
                <i className={className} style={{ fontSize: "24px" }}></i>
            </Button>
            {/* <span className="me-4" style={{ fontSize: "15px" }}>{title}</span> */}
        </>

    );
}