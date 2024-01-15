import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { ApartmentsContainer } from "../../components/apartments-container/ApartmentsContainer";
import { Header } from "../../components/header/Header";
import { Caption } from "../../components/caption/Caption";
import { PropertyCard } from "../../components/property-card/PropertyCard";
import { Footer } from "../../components/footer/Footer";

export const Apartments = () => {
  const [page, setPage] = useState(2);
  const [apartments, setApartments] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getApartments().catch((error) => console.error("error", error));
  }, []);

  const getApartments = async () => {
    const res = await fetch(
      `http://localhost:3003/apartments?_page=1&_limit=9`
    );
    const data = await res.json();
    setApartments(data);
  };

  const fetchApartments = async () => {
    const res = await fetch(
      `http://localhost:3003/apartments?_page=${page}&_limit=9`
    );
    return res.json();
  };

  const fetchData = async () => {
    const apartmentsFormServer = await fetchApartments();

    setApartments([...apartments, ...apartmentsFormServer]);

    if (apartmentsFormServer.length === 0 || apartmentsFormServer.length < 9) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={apartments.length}
      next={fetchData}
      hasMore={hasMore}
    >
      <PageWrapper>
        <Header
          apartments={apartments}
          setApartments={setApartments}
          getAllApartments={getApartments}
        />
        <Caption country="Finland" totalRecords={apartments.length} />
        <ApartmentsContainer>
          {apartments.map((apartment) => (
            <PropertyCard
              image={apartment.img}
              superHost={apartment.superHost}
              type={apartment.type}
              rate={apartment.rate}
              name={apartment.name}
              city={apartment.city}
              country={apartment.country}
              key={apartment.id}
            />
          ))}
        </ApartmentsContainer>
        <Footer author="hoovks" />
      </PageWrapper>
    </InfiniteScroll>
  );
};
