import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
  @media screen and (min-width: 1900px) {
    .icon {
      width: 80px;
      height: 80px;
    }
  }
}`;

export default function Navbar() {
  return (
    <StyledDiv>
      <Image src="/Icon.png" alt="icon-logo" width={200} height={140} />
    </StyledDiv>
  );
}
