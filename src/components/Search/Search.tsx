import { ChangeEvent, FC, useRef, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

import styles from "./Search.module.scss";

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const value = currentTarget.value;
    setSearchValue(value);
  };

  const clearInput = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={styles.search}>
      <IoSearch className={styles.icon} />
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        value={searchValue}
        placeholder="search heroes"
        onChange={onSearch}
      />
      {searchValue && (
        <IoClose className={styles.iconClose} onClick={clearInput} />
      )}
    </div>
  );
};
