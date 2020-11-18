import React from 'react';

import { FiCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Routes from '../../routes';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import CentralSquare from '../../components/CentralSquare';

import Squares from '../../assets/Squares.svg';

const Square: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          Comunicação não é só “<span>Falar</span>”
        </h1>
      </Header>
      <CentralSquare>
        <img src={Squares} alt="Squares" />
      </CentralSquare>
      <Navigation>
        <ul>
          <li>
            <Link className="active" to="/">
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
            <Link to="/blog">
              <FiCircle />
            </Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Square;
