import React from "react";
import {Card} from "./Card";
import {WorkInfo} from "../interface/WorkInfo";

export const Search = (props: Array<WorkInfo>) => {

  const [searchValue, updateSearchValue] = React.useState('');

  const parentStyles = {
    display: 'flex',
    justifyContent: 'center',
  }

  const inputStyles = {
    fontSize: '1rem',
    width: '100%',
    padding: '12px',
    border: '2px solid #ccc',
    borderRadius: '4px',
  }

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    updateSearchValue(event.currentTarget.value);
  };

  return (
    <div className={"search"} style={parentStyles}>
        <input
          type={"text"}
          placeholder={"検索キーワードをここに入力"}
          onInput={onInput}
          style={inputStyles}
        />
      {
        props.filter((work) => {
          if(searchValue === '') {
            return true;
          }
          return work.title.includes(searchValue);
        }).map((work) => {
          return (<div></div>);
        })
      }
    </div>
  );
}