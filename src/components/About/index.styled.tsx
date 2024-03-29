import styled from "styled-components";

const StyldAbout = styled.div`
  .about {
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
      margin-bottom: 10px;
      border-bottom: 1px double black;
    }

    table {
      display: flex;
      flex-direction: column;
      justify-content: center;
      thead {
        th {
          margin: 10px;
        }
      }
      tbody {
        tr {
          margin: 10px;
        }
      }
    }
  }

  .profileIcon {
    margin: 0 auto;
  }
`;

export default StyldAbout;
