import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// meta prop의 타입을 정의합니다.
interface MetaProps {
  meta: {
    title?: string;
    description?: string;
  };
}

const MetaComponent: React.FC<MetaProps> = ({ meta }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaComponent;
