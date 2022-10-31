import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./users.css";

const initial = {
  data: [],
  loading: true,
  error: "",
};
const userDetails = {
  currentPage: 1,
  imgUrl: "",
  emailAddress: "",
  name: "",
  phone: "",
  dob:'',
  age:''
};

const pageReducer = (state, action) => {
  if (action.type === "setCurrentPage") {
    return {
      currentPage: action.payload,
      imgUrl: action.payload2,
      emailAddress: action.payload3,
      name: action.name,
      phone: action.phone,
      dob:action.dob,
      age:action.age
    };
  }
  else
    return state
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch-success":
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case "fetch-failed":
      return {
        data: [],
        loading: false,
        error: "something went wrong",
      };
    default:
      return state;
  }
};

export default function Users() {
  document.title = "FetchApi";
  const [states, dispatch] = useReducer(reducer, initial);
  const [currentPage, currentPageDispatch] = useReducer(pageReducer, userDetails
  );

  // const [page, setPage] = useState(1);
  // const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    let url = "https://randomuser.me/api/?results=100&seed=abc";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let { results } = data;

        dispatch({ type: "fetch-success", payload: results });
      })
      .catch((error) => {
        dispatch({ type: "fetch-failed" });
      });
  }, []);
  const getDetails = (eachPerson) => {
    currentPageDispatch({
      type: "setCurrentPage",
      payload2: eachPerson.picture.large,
      payload: currentPage.currentPage,
      payload3: eachPerson.email,
      name: eachPerson.name.first + " " + " " + eachPerson.name.last,
      phone: eachPerson.cell,
      dob:eachPerson.dob.date,
      age:eachPerson.dob.age
    });
  };
  console.log(states.data);
  console.log(currentPage.name)
  console.log(currentPage.emailAddress)
  let dataPerPage = 10;
  let NumberOfPages = Math.ceil(states.data.length / dataPerPage);

  let lastIndex = currentPage.currentPage * dataPerPage;
  let startIndex = lastIndex - dataPerPage;

  let listName = states.data
    .slice(startIndex, lastIndex)
    .map((eachPerson, i) => (
      <li
        key={i}
        className="list-item"
        onClick={() => {
          // setImgUrl(eachPerson.picture.large);
          getDetails(eachPerson);
        }}
      > 
         {i + startIndex + 1}. {eachPerson.name.title} {eachPerson.name.first}{" "}
        {eachPerson.name.last}
      </li>
    ));
  if (states.loading) {
    return (
      <>
        <h1 className="loading">Loading:Please wait</h1>
        <div className="loader"></div>
      </>
    );
  }
  if (states.error) {
    return (
      <>
        <div className="error">
          <h1>{states.error}</h1>
          <h2>Please check your URL or Network</h2>
        </div>
      </>
    );
  }

  return (
    
    <div className="users-containers">
      
      <div className="list-container">
        <div className="text">
        <h1>Random Users Details</h1>
      <p>Click to get details</p>
        </div>
     
        <ul style={{ listStyle: "none" }}>{listName}</ul>

        <div className="next-prev-container">
          <button
            onClick={() => {
              currentPageDispatch({
                type: "setCurrentPage",
                payload: currentPage.currentPage - 1,
                name:currentPage.name,
                payload2:currentPage.imgUrl,
                payload3: currentPage.emailAddress,
                phone: currentPage.phone,
                dob:currentPage.dob,
                age:currentPage.age
              });
            }}
            disabled={currentPage.currentPage <= 1}
          >
            Previous
          </button>
          <button
            className="next-btn"
            onClick={() => {
              currentPageDispatch({
                type: "setCurrentPage",
                payload: currentPage.currentPage + 1,
                name:currentPage.name,
                payload2:currentPage.imgUrl,
                payload3: currentPage.emailAddress,
                phone: currentPage.phone,
                dob:currentPage.dob,
                age:currentPage.age
                
              });
            }}
            disabled={currentPage.currentPage >= NumberOfPages}
          >
            Next
          </button>
        </div>

        <div className="page-btns-container">
          {Array.from({ length: NumberOfPages }, (_, index) => index + 1).map(
            (index) => {
              return (
                <button
                  className={`page-btns ${currentPage.currentPage === index? 'active-btns':null}`}
                  key={index}
                  onClick={() => {
                    currentPageDispatch({
                
                      type: "setCurrentPage",
                      payload: index,
                      name:currentPage.name,
                      payload2:currentPage.imgUrl,
                      payload3: currentPage.emailAddress,
                      phone: currentPage.phone,
                      dob:currentPage.dob,
                      age:currentPage.age
    

                     
                    });
                  }}
                >
                  {index}
                </button>
              );
            }
          )}
        </div>

        <p className="page-indicator">
          Page {currentPage.currentPage} of {NumberOfPages}
        </p>
      </div>
      {!currentPage.imgUrl &&(<div className="no-detail-text">
        <h1 style={{marginTop:'19px'}}>Users Details</h1>
        <h2>Click Users to get details</h2>
        </div>)}
      {/* details section */}
      {currentPage.imgUrl && (
        <div className="details-container">
          <div className="detail-text"><h1 style={{marginTop:'19px'}}>Users Details</h1></div>
          <img
            src={currentPage.imgUrl}
            alt="pictures"
            className="image-container"
          />
          {/* <span className="line"></span> */}
          <p className="user-name">{currentPage.name}</p>
          <p className="cell">Cell:{currentPage.phone}</p>
          <p className="email">Email:{currentPage.emailAddress}</p>
          <p className="email">Birth Date:{currentPage.dob}</p>
          <p className="email">Age:{currentPage.age}</p>
        </div>
      )}
    </div>
  );
}
