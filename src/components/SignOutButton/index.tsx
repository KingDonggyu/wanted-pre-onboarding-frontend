/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import AuthRepository from '../../repository/localStorage/AuthRepository';
import Route from '../../constants/routes';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      new AuthRepository().remove();
      navigate(Route.SIGNIN);
    }
  };

  return (
    <button
      type='button'
      aria-label='로그아웃'
      onClick={handleClick}
      css={(theme) => css`
        cursor: pointer;
        background: none;
        border: none;
        color: ${theme.color.blue2};
      `}
    >
      <GoSignOut size={25} />
    </button>
  );
};

export default SignOutButton;
