import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import './styles.css'

export interface Teacher {
    user:{
        avatar: string;
        bio: string;
        id: string;
        name: string;
        whatsapp: string;
    }
    cost: number;
    subject: string;
};
export interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.user.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.user.avatar} alt={teacher.user.name}/>
                <div>
                    <strong>{teacher.user.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.user.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    target="_blank" 
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.user.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;
