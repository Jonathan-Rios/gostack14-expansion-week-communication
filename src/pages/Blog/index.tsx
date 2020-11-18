import React from 'react';

import { FiCircle, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Routes from '../../routes';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import CentralSquare from '../../components/CentralSquare';

const Blog: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          Qual é a importância da comunicação <br /> nos <span>resultados</span>{' '}
          de uma empresa?
        </h1>
      </Header>
      <CentralSquare>
        <Content>
          <p>
            Embora comunicar-se seja uma atividade comum do ser humano, tornar
            esse processo orgânico dentro de uma empresa pode ser trabalhoso e
            muitas vezes, falho.
          </p>
          <br />
          <p>
            Sendo assim, vamos abordar tal tema e ajudar a você a criar
            estratégias que facilitem a conversa e a troca de ideias dentro do
            ambiente corporativo e com os seus clientes.
          </p>
          <br />
          <strong>Comunicação interna:</strong>
          <br />
          <p>
            Manter uma boa comunicação interna (fornecedores, colaboradores,
            parceiros etc.) garante que todos consigam se alinhar com o discurso
            oficial da empresa, fortalecendo sua produtividade.
          </p>
          <br />
          <p>
            Uma comunicação interna confusa e ineficiente pode gerar problemas
            sério dentro de uma empresa e uma das consequências pode ser a perda
            de parceiros.
          </p>
          <br />
          <p>
            Dentre os vários benefícios de investir no melhoramento da
            comunicação interna posso citar:
          </p>
          <ul>
            <li>
              Funcionários e colaboradores mais engajados com as metas da
              empresa.
            </li>

            <li>
              Funcionários totalmente conscientes de todas as ações que devem
              ser tomadas para o crescimento da empresa.
            </li>
            <li>
              Facilidade para desenvolver ações que venham influenciar a imagem
              externa da empresa sem que ocorram mal entendidos e incoerências.
            </li>
            <li>Diminuição nas taxas de rotatividade.</li>
            <li>Melhoria da imagem da empresa</li>
          </ul>
          <br />
          <p>
            Continue lendo{' '}
            <a href="https://nexpubli.com.br/blog/2017/06/01/estrategia-comunicacao/">
              aqui
            </a>
            .
          </p>

          <br />
          <br />
          <p>Nexpubli. </p>
          <p>
            “Qual é a importância da comunicação nos resultados de uma empresa?”
            Blog, 01 de jun. de 2017.
          </p>
          <a href="https://nexpubli.com.br/blog/2017/06/01/estrategia-comunicacao/">
            https://nexpubli.com.br/blog/2017/06/01/estrategia-comunicacao/
          </a>
          <p>Posted By guiallan</p>
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
            <Link to="/friend">
              <FiCircle />
            </Link>
          </li>
          <li>
            <Link className="active" to="/blog">
              <FiCircle />
            </Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Blog;
