import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

import { ILayout } from './interface';
import { Container, Wrapper, ChildrenContainer } from './styles';

function Layout({ children }: ILayout): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <NavBar />

        <ChildrenContainer>{children}</ChildrenContainer>

        <Footer />
      </Wrapper>
    </Container>
  );
}

export default Layout;
