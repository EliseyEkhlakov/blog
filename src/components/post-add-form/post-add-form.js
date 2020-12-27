import React from 'react';

import '../../css/post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
            type="text"
            placeholder="О чем вы думаете сейчас ?"
            className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >
                Добавть
            </button>
        </form>
    )
}

export default PostAddForm;