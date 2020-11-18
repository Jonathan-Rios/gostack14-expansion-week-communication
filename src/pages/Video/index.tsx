import React from 'react';

import { FiCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Routes from '../../routes';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import CentralSquare from '../../components/CentralSquare';

const Video: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          Comunicação <span>Efetiva</span>
        </h1>
        <h2>Ouvir, Entender e Responder.</h2>
      </Header>
      <CentralSquare>
        <Content>
          <iframe
            title="Communication at Work"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/I6IAhXM-vps"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>WayForward. </p>
          <p>“Effective Communication” Youtube, 13 de out. de 2016. </p>
          <a href="https://www.youtube.com/watch?v=I6IAhXM-vps">
            https://www.youtube.com/watch?v=I6IAhXM-vps
          </a>
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
            <Link className="active" to="/video">
              <FiCircle />
            </Link>
          </li>
          <li>
            <Link to="/friend">
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

export default Video;
