// @flow
import React, { type StatelessFunctionalComponent } from 'react';
import css from './Logo.scss';

type Props = {
  onClick?: (event: SyntheticEvent<>) => void;
};

function LogoFactory(size: string = ''): StatelessFunctionalComponent<Props> {
  const LogoComponent = ({ onClick }: Props) => {
    const linkClass = onClick ? 'link' : '';
    const containerClass = `${css.container} ${css[size] || ''} ${linkClass}`;

    return (
      <div role="presentation" className={containerClass} onClick={onClick}>
        <span className={css.if}>if</span>
        <span className={css.me}>me</span>
      </div>
    );
  };

  LogoComponent.defaultProps = {
    onClick: undefined,
  };

  return LogoComponent;
}

export default LogoFactory;
