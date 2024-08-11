import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import { Customer, customers } from "../mockData";

const Layout = styled(motion.div)`
  display: flex;
  height: 100vh;
  background-color: #f0f2f5;
`;

const MainLayout = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const memoizedCustomers = useMemo(() => customers, []);

  const handleSelectCustomer = useCallback((customer: Customer) => {
    setSelectedCustomer(customer);
  }, []);

  return (
    <Layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomerList
        customers={memoizedCustomers}
        onSelectCustomer={handleSelectCustomer}
        selectedCustomerId={selectedCustomer?.id}
      />
      <CustomerDetails customer={selectedCustomer} />
    </Layout>
  );
};

export default MainLayout;
