// src/components/CustomerCard.tsx

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Customer } from "../mockData";

interface CustomerCardProps {
  customer: Customer;
  onSelect: () => void;
  isSelected: boolean;
}

const Card = styled(motion.div)<{ isSelected: boolean }>`
  padding: 15px;
  margin: 15px;
  background-color: ${(props) => (props.isSelected ? "#e1e4e8" : "white")};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.h3`
  margin: 0;
  color: #24292e;
`;

const Title = styled.p`
  margin: 5px 0 0;
  color: #586069;
`;

const CustomerCard = ({
  customer,
  onSelect,
  isSelected,
}: CustomerCardProps) => {
  return (
    <Card isSelected={isSelected} onClick={onSelect} whileTap={{ scale: 0.95 }}>
      <Name>{customer.name}</Name>
      <Title>{customer.title}</Title>
    </Card>
  );
};

export default React.memo(CustomerCard);
