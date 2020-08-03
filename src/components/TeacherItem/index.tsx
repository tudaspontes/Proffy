import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/53872262?s=460&u=afb37d9f31319203c5161593a2c41edb970f9387&v=4" alt="Felipe Pontes"/>
                        <div>
                            <strong>Felipe Pontes</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias
                        <br /><br />
                        Apaixonado por explodir coisas
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src= {whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>

                    </footer>
                </article>
    )
}

export default TeacherItem;