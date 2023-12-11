import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Typography>Error 404</Typography>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
