import styled from "styled-components";

/* -------------------------------------------------------------------------- */
/*                                 HotleItems                                 */
/* -------------------------------------------------------------------------- */
export const HotleItemsCardsCardFeaturesWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
`;

export const HotleItemsCardsCardFeature = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  width: calc(50% - 5px);
`;
