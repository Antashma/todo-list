import React from 'react';

export default function Task({text, taskId, completed}) {
    return (
        <>
            <li className="task">
                <span className="task-text">{text}</span>
                <span className="task-btns">[ 👍 (done) | ❌ (remove) ]</span>
            </li>
        </>
    );
};
