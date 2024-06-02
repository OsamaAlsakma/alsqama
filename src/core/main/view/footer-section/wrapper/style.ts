import styled from "styled-components";
import { smallScreenSize } from "~/bootstrap/helper/global-helper";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";

export const MainFooterLogoAndServices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (max-width: ${smallScreenSize}) {
    flex-direction: column;
    align-items: start;
  }
`;

export const StyleMainLogo = styled(StyledMainServicesLink)`
  && {
    font-size: 32px;
    width: fit-content;
    color: inherit;
  }
`;

export const MainFooterMainServices = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const MainFooterMainService = styled(StyledMainServicesLink)`
  && {
    color: inherit;
    font-size: 18px;
  }
`;

export const MainFooterContactIcon = styled(MainFooterMainService)``;

export const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${smallScreenSize}) {
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }
`;

export const CopyrightNotice = styled.div`
  font-size: 18px;
`;
