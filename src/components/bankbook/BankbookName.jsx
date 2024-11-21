import React from "react";
import styled from "styled-components";

export default function BankbookName({ userName = "OO", type = "normal" }) {
  return (
    <Container>
      <Title>
        {userName}의 {type === "savings" ? "예금통장" : "통장"}
      </Title>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
`;
