import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useDebounce } from "../../hooks/useDebounce";
import { useGetHeroesSearchQuery } from "../../store";

import styles from "./Search.module.scss";
import { Suggest } from "./Suggest";

export const Search: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [searchValue, setSearchValue] = useState(searchQuery);
  const [isSuggest, setIsSuggest] = useState(true);
  const navigate = useNavigate();

  const debounce = useDebounce(searchValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading } = useGetHeroesSearchQuery(debounce);

  const onSearch = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const value = currentTarget.value.toLowerCase().trimStart();
    setIsSuggest(true);
    setSearchValue(value);
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue) {
      setSearchParams({ query: searchValue });
      const queryUrl = `/search?query=${searchValue}`;
      navigate(queryUrl);
    }
  };

  const clearInput = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    function closeDropdown({ target }: MouseEvent) {
      if (!inputRef.current?.contains(target as Node)) {
        setIsSuggest(false);
      }
    }
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <form className={styles.search} name="search" onSubmit={onSubmit}>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        value={searchValue}
        placeholder="search heroes"
        onChange={onSearch}
        onFocus={() => {
          setIsSuggest(true);
        }}
      />
      {searchValue && (
        <IoClose className={styles.iconClose} onClick={clearInput} />
      )}

      <button className={styles.button}>
        <IoSearch className={styles.icon} />
      </button>

      {searchValue && isSuggest && (
        <Suggest
          isLoading={isLoading}
          data={data?.data.results}
          isSuggest={isSuggest}
          setIsSuggest={setIsSuggest}
        />
      )}
    </form>
  );
};
