import React from "react";
import classNames from "classnames";
import styled from "styled-components";



function Filter() {
  return (
    <div>
    <h4 className="my-4 text-left">Cins</h4>
    <ul>
        <li className={
            classNames({
                "list-group-item": true,
                "active": !props.activeFilter,
            })
        } onClick={() => {
            props.onFilterPets("");
        }}>Hepsi</li>
        {
            breedOptions.map((breed) => {
                return <li
                    key={breed}
                    className={classNames({
                        "list-group-item": true,
                        "active": breed === props.activeFilter
                        }
                    )}
                    onClick={(e) => {
                        e.preventDefault();
                        props.onFilterPets(breed);
                    }}>{breed}</li>
            })
        }
    </ul>
</div>
  );
}

export default Filter;
