import React from 'react';
import { setDislike, setLike } from '../../features/likeSlice';
import { useDispatch } from 'react-redux';

export default function Modal({project, onClose}) {
    const dispatch = useDispatch();
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
                <button className='modal-like-button' onClick={() => {dispatch(setLike(project))}}>❤ 좋아요</button>
                <button className='modal-like-button' onClick={() => {dispatch(setDislike(project))}}>❌ 싫어요</button>
            </div>
        </div>
    );
}