import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css'
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Proffys disponíveis.">   
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="weekday">Dia da Semana</label>
                        <input type="text" id="subject"/>
                    </div>                        

                    <div className="input-block">
                        <label htmlFor="hora">Hora</label>
                        <input type="text" id="subject"/>
                    </div>    
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;