import React from 'react';
import { Card } from "react-bootstrap";

const ImageItem = ({ title, url }) => {
    return (
        <Card className="card h-100 p-2 d-lg-flex align-items-centerjustify-content-center" style={{ maxWidth: "280px", marginLeft: "10px", border: "1px solid rgba(13,110,253,.15)" }}>
            <Card.Img
                variant="top"
                src={url}
                height="300px"
                style={{ maxWidth: "280px" }} alt={title}
            />
        </Card>
    );
}

export default ImageItem;