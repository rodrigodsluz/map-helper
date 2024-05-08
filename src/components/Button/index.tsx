import * as S from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...props }: ButtonProps) {
  return <S.Button {...props}>+</S.Button>;
}
