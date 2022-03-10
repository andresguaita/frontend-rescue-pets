import React, { Fragment, useState } from "react";
import FiltersInShelterDetails from "./FiltersInShelterDetails";
import { Link } from "react-router-dom";
import ShelterData from "./ShelterData";

// estilos
import {
  DivContenedor2,
  Left,
  Right,
  StyledCardMini,
} from "../Styles/StyledShelterDetails";
import { StyledCardContainer, ImgCard } from "../Styles/StyledCards.js";

import "../Styles/Styles.css";

const ShelterInfo = ({ Data, pets, input, setInput }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(pets.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pets.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pets.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <Fragment>
      <ShelterData Data={Data} />

      <DivContenedor2>
        <Left>
          <FiltersInShelterDetails input={input} setInput={setInput} />
        </Left>

        <Right>
          <br></br> <br></br>
          <StyledCardContainer key={Math.random(5)}>
            {typeof pets !== "string" ? (
              currentItems?.map((p) => (
                <Fragment key={p.id}>
                  <Link to={`/details/${p.id}`}>
                    <StyledCardMini>
                      <h1>{p.name}</h1>
                      <p>{[p.temperament][0].temperament}</p>
                      {/* <p>{p.description}</p> */}
                      <ImgCard src={p.image[0]} />

                      <br />
                    </StyledCardMini>
                  </Link>
                </Fragment>
              ))
            ) : typeof pets === "string" ? (
              <h1> {pets}</h1>
            ) : (
              <h1> Cargando datos</h1>
            )}

            {/* <button onClick={handleLoadMore} className="loadmore">
                        Load More
                        </button> */}
          </StyledCardContainer>
          <div className="page">
            <br></br>
            <center>
              <ul className="pageNumbers">
                <li>
                  <button
                    onClick={handlePrevbtn}
                    disabled={currentPage === pages[0] ? true : false}
                  >
                    Prev
                  </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}

                <li>
                  <button
                    onClick={handleNextbtn}
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </center>{" "}
          </div>
        </Right>
      </DivContenedor2>
    </Fragment>
  );
};

export default ShelterInfo;
