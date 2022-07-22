import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm"
import { HeroCards } from "../components/HeroCards"
import { getHeroesByName } from "../helpers";





export const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation();
  //console.log({location});

  const {q = ''} = queryString.parse(location.search);
  //console.log({query});

  const heroes = getHeroesByName(q);

  const {searchText, onInputChange} = useForm ({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if(searchText.trim().length <= 1) return;

    //console.log({searchText});

    navigate(`?q=${searchText}`);
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>

            </form>
        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr />

            {
              (q === '')              
                ? <div className="alert alert-primary">Search a hero</div>
                //Si el query es un string vacio, se muestra la primera condición, 'Search a hero'
                : (heroes.length === 0) 
                  && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                //Si heroes.lenght = 0, se muestra la segunda condición 'no hero with'
            }

            {
              heroes.map ( hero => (
                <HeroCards key={hero.id} {...hero} />
              ))
            }

        </div>

      </div>
      


    </>
  )
}
