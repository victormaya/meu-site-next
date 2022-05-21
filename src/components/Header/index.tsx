import React from 'react';
import Link from 'next/link';
import { ContainerHeader } from './styled';
import EditSvg from '../../assets/svgs/edit';

function Header() {
  return (
    <ContainerHeader>
      <nav>
        <Link href="/create-animation">
          <div className="easterEggs">
            <EditSvg />
          </div>
        </Link>
        <Link href="/skills">Skills</Link> |
        <Link href="/educacao">Educacão</Link> |
        <Link href="/experiencia">Experiência</Link> |
        <Link href="/portifolio">Portifólio</Link> |
        <Link href="/contato">Contato</Link>
      </nav>
    </ContainerHeader>
  );
}

export default Header;
