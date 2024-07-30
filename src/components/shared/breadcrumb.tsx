import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-primary);

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  span {
    margin: 0 5px;
  }
`;

interface BreadcrumbProps {
  paths: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <BreadcrumbContainer>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <Link href={path.href}>{path.label}</Link>
          {index < paths.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
