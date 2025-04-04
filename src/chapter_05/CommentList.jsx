import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "쓰니1",
        comment: "하이하이",
        image: "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
    },
    {
        name: "쓰니2",
        comment: "뭔 하이야",
        image: "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
    },
    {
        name: "쓰니3",
        comment: "ㅋㅋ 머해",
        image: "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => (
                <Comment name={comment.name} comment={comment.comment} image={comment.image} />
            ))}
        </div>
    )
}

export default CommentList;