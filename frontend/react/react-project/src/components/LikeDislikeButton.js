// TODO: answer here
import React, {useState} from 'react';

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {

    // TODO: answer here
    const [like, setLike] = useState(likeCount);
    const [dislike, setDislike] = useState(dislikeCount);
    const [isLikedState, setIsLiked] = useState(isLiked);
    const [isDislikedState, setIsDisliked] = useState(isDisliked);

    return (    
        <div className="like-dislike-btn">
            <div className="like-btn">
                <button aria-label="Like Button" onClick={() => {
                    if (isLikedState) {
                        setIsLiked(false)
                        setLike(like - 1);
                    } else if (isDislikedState) {
                        setIsLiked(true)
                        setIsDisliked(false)

                        setLike(like + 1);
                        setDislike(dislike - 1);
                    } else {
                        setIsLiked(true)
                        setLike(like + 1);
                    }
                }}>Like</button>
                <span aria-label="Like Count">{like}</span>
            </div>
            <div className="dislike-btn">
                <button aria-label="Dislike Button" onClick={() => {
                    if (isDislikedState) {
                        setIsDisliked (false);
                        setDislike(dislike - 1);
                    } else if (isLikedState) {
                        setIsDisliked (true);
                        setIsLiked (false);

                        setDislike(dislike + 1);
                        setLike(like - 1);
                    } else {
                        setIsDisliked (true);
                        setDislike(dislike + 1);
                    }
                }}>Dislike</button>
                <span aria-label="Dislike Count">{dislike}</span>
            </div>
        </div>
    )
    
}