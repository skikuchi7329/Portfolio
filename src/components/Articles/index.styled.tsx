import styled from "styled-components";

const StyledArticle = styled.div`
  width: 100%;
  display: block;
  margin: 10px;
  .title {
    text-align: center;
    margin: 10px auto;
  }
  .content {
    margin: 10px auto;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: gray;
  }
`;

export default StyledArticle;