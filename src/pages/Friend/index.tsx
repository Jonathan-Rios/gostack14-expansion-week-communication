import React from 'react';

import { FiCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Routes from '../../routes';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import CentralSquare from '../../components/CentralSquare';

const Friend: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          Relato de um <span>amigo</span>
        </h1>
        <h2>Conversar preserva o ambiente de trabalho</h2>
      </Header>
      <CentralSquare>
        <Content>
          <p>
            Citar a mais importante das Softskills é uma tarefa difícil, pois
            todas devem ser utilizadas, mesmo que um pouco, para montar um bom
            profissional.
          </p>
          <br />
          <p>
            Eu escolhi a Comunicação com a Softskills aqui, pois um dia antes de
            receber o desafio ouvi um desabafo de um amigo meu sobre o assunto.
          </p>
          <br />
          <p>
            Ao seguir o que foi expecificado em um documento para ser
            desenvolvido, ao entregar a demanda houve um resultado diferente do
            qual o requisitor esperava.
          </p>
          <br />
          <p>
            Ficou uma situação chata pois o requisitor acabou passando a
            informação de uma forma que meu amigo não conseguiu entender, e o
            que foi realizado não atendia todos os requisitos da demanda.
          </p>
          <br />
          <p>
            Ai caiu na situação... de quem é a culpa? quem fez o que de errado?
          </p>
          <br />
          <p>
            E pensar que uma mera conversa ou reunião ( talvez não realizada
            devido ao fluxo corrido do dia específico ) poderia ter evitado esse
            acontecimento.
          </p>
          <br />
          <p>
            Do pouco de experiência que tive em minha carreira, percebi que cada
            vez mais é importante uma comunicação limpa e clara para evitar
            problemas ( tanto do produto, quanto da saúde da equipe ).
          </p>
        </Content>
      </CentralSquare>
      <Navigation>
        <ul>
          <li>
            <Link to="/">
              <FiCircle />
            </Link>
          </li>
          <li>
            <Link to="/video">
              <FiCircle />
            </Link>
          </li>
          <li>
            <Link className="active" to="/friend">
              <FiCircle />
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <FiCircle />
            </Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Friend;
