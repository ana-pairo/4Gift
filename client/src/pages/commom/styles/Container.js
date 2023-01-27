import styled from "styled-components";

export const ContainerWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;

    overflow-y: scroll;

    padding-bottom: 120px;

    /* background-color: aquamarine; */
  }
`;

export const AvatarContainer = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: 70vw;

    /* background-color: gray; */

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }
`;

export const AvatarWrapper = styled.div`
  @media (max-width: 600px) {
    width: 70vw;
    height: 70vw;

    border-radius: 100%;
    border: 4px solid #dfb068;

    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 100%;
      height: 68vw;
      width: 68vw;

      object-fit: fill;
    }
  }
`;

export const AvatarOptions = styled.div`
  @media (max-width: 600px) {
    width: 10vw;
    height: 10vw;

    border-radius: 100%;
    background-color: #dfb068;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    right: 5vh;

    ${(props) => (props.type === "delete" ? "top: 1vw;" : "bottom: 1vw;")}

    box-shadow: 0 0 6px 1px;
  }
`;
