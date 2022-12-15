import styled from "styled-components";

const StyldAbout = styled.div`
  .about{
    display: flex;
    flex-direction: column;
    text-align: center;
    
    h2 {
      border-bottom: 1px double black;
    };

    ul {
      list-style: none;
      
      li {
        line-height: 2;
      }
    }
  };
  .profileIcon {
    margin: 0 auto;
  }
`;

export default StyldAbout;