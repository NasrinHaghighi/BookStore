import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutProps {
  children: React.ReactNode;
}
const EmptyLayout: React.FC<LayoutProps> = (props) => {
  const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    /* display: flex;
    justify-content: center; */
    align-items: center;
  `;

  return (
    <>
      <Wrapper>{props.children}</Wrapper>
   
    </>
  );
};

export default EmptyLayout;