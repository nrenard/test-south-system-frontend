import styled from "styled-components";

import { simpleFlex, container } from "../../styles/mixins";

export const Container = styled.div`
  ${container};
`;

export const WrapperButtons = styled.div`
  ${simpleFlex};
  justify-content: space-between;
`;
