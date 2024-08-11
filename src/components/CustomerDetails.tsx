import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Customer } from "../mockData";
import { getRandomPhotos } from "../service/unsplash";

interface CustomerDetailsProps {
  customer: Customer | null;
}

const DetailsContainer = styled(motion.div)`
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const Photo = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = await getRandomPhotos(9);
      setPhotos(newPhotos);
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!customer) {
    return (
      <div className="customer-details">Select a customer to view details</div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div id="left_heading">This is a Heading</div>
      <DetailsContainer
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{customer.name}</h2>
        <p>
          <strong>Title:</strong> {customer.title}
        </p>
        <p>
          <strong>Address:</strong> {customer.address}
        </p>
        <PhotoGrid>
          {photos.map((photo, index) => (
            <Photo
              key={index}
              src={photo}
              alt={`Random ${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </PhotoGrid>
      </DetailsContainer>
    </div>
  );
};

export default CustomerDetails;
