import { useEffect } from "react";
import Select from "react-select";
import.meta.env.VITE_API_KEY;
import { selectors } from "../store/store";
import magnifierIcon from "../assets/magnifier.svg"
export const keyAPI = import.meta.env.VITE_API_KEY;

interface OptionType {
  value: string;
  label: string;
}

interface parametrs {
  name: string;
  country: string;
  region: string;
  lat: number;
  lon: number;
}

function search() {
  const setCity = selectors.setCity();
  const setOptions = selectors.setOptions();
  const setInputValue = selectors.setInputValue();
  const options = selectors.options();
  const inputValue = selectors.inputValue();

  useEffect(() => {
    async function fetchAutocompleteData() {
      const url = `https://api.weatherapi.com/v1/search.json?key=${keyAPI}&lang=ru&q=${inputValue}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        const uniqueOptions: OptionType[] = data.map((item: parametrs) => ({
          value: `${item.lat}, ${item.lon}`,
          label: `${item.name}, ${item.country} ${item.region}`,
        }));
        setOptions(uniqueOptions);
      }
    }

    if (inputValue.length > 0) {
      fetchAutocompleteData();
    }
  }, [inputValue]);

  const handleSelectChange = (selectedOption: OptionType | null | void) => {
    if (selectedOption) {
      setCity(selectedOption.value);
    }
  };

const customStyleSearch = {
  control: (styles: any) => ({
    ...styles,
    background: "#D9D9D9",
    backgroundImage: `url(${magnifierIcon})`,
    backgroundSize: "16px 16px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "5px",
    paddingLeft: "15px",
    borderRadius: '25px',
    minWidth: "250px",
  }),
}

  return (
    <div className="searchContainer">
      <div className="searchPanel">
        <Select
          className="search"
          placeholder="Search location..."
          value={options.find(
            (option: OptionType) => option.value === inputValue
          )}
          options={options}
          styles={customStyleSearch}
          onChange={handleSelectChange}
          onInputChange={(inputValue) => setInputValue(inputValue)}
        />
      </div>
    </div>
  );
}

export default search;
