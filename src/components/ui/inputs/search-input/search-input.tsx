import styles from "./search-input.module.scss";

export interface InputProps {
  Icon: any;
  description: string | undefined;
  extraClass?: string;
  refProp?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: React.FC<InputProps> = ({
  Icon,
  description,
  extraClass,
  refProp,
  onChange,
}) => {
  return (
    <div className={`${styles.inputContainer} ${extraClass}`}>
      <input
        ref={refProp}
        placeholder={description}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
      <button className={styles.searchButton}>
        <Icon width={14} height={15}/>
      </button>
    </div>
  );
};

export default SearchInput;
