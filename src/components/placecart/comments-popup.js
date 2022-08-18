import React from 'react';
import { CommentSection } from 'react-comments-section'

class CommentsPopUp extends React.Component {

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
    }
    
    render() {
        const { currentReview } = this.props;

        return (
            <>
                <div className='comments_title'>
                    <h2>Комментарии</h2>
                    <div>
                        <button className='filter-arrow up'></button>
                        <button className='filter-arrow down'></button>
                        <p>По дате</p>
                    </div>
                </div>
                {currentReview &&
                    <CommentSection
                        currentUser={{
                            currentUserId: currentReview.id,
                            currentUserImg: currentReview.photo,
                            currentUserProfile: '',
                            currentUserFullName: currentReview.userName
                        }}
                    >
                    </CommentSection>
                }
            </>
        )
    }
}

export default CommentsPopUp;