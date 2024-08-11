// src/components/CustomerList.tsx

import React, { useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import CustomerCard from "./CustomerCard";
import { Customer } from "../mockData";

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomerId: number | undefined;
}

const CustomerList = ({
  customers,
  onSelectCustomer,
  selectedCustomerId,
}: CustomerListProps) => {
  const renderRow = useCallback(
    ({ index, style }: { index: number; style: React.CSSProperties }) => {
      const customer = customers[index];
      return (
        <div style={{ ...style, marginTop: "5px" }}>
          <CustomerCard
            customer={customer}
            onSelect={() => onSelectCustomer(customer)}
            isSelected={customer.id === selectedCustomerId}
          />
        </div>
      );
    },
    [customers, onSelectCustomer, selectedCustomerId]
  );

  return (
    <div className="customer-list">
      <List
        height={window.innerHeight}
        itemCount={customers.length}
        itemSize={80}
        width={300}
      >
        {renderRow}
      </List>
    </div>
  );
};

export default CustomerList;
