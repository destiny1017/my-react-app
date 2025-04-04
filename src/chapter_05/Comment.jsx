import React from "react";

const styles = {
    wrapper: {
        display: "flex",
        alignItems: "flex-start",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        maxWidth: "400px",
    },
    imageContainer: {
        flexShrink: 0,
        marginRight: "10px",
    },
    image: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
    },
    nameText: {
        fontWeight: "bold",
        fontSize: "14px",
        marginBottom: "4px",
    },
    commentText: {
        fontSize: "14px",
        color: "#555",
        wordWrap: "break-word",
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={props.image}
                     style={styles.image} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>
                    {props.comment}
                </span>
            </div>
        </div>
    )
}

export default Comment;