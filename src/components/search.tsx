import { useState, useEffect } from "react";
import Select from "react-select";
import.meta.env.VITE_API_KEY;

export const keyAPI = import.meta.env.VITE_API_KEY;

interface propsSearch {
  setCity: any;
}

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

function search(props: propsSearch) {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<OptionType[]>([]);
  const { setCity } = props;

  useEffect(() => {
    const fetchAutocompleteData = async () => {
      const url = `http://api.weatherapi.com/v1/search.json?key=${keyAPI}&lang=ru&q=${inputValue}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        const uniqueOptions: OptionType[] = data.map((item: parametrs) => ({
          value: `${item.lat}, ${item.lon}`,
          label: `${item.name}, ${item.country} ${item.region}`,
        }));
        setOptions(uniqueOptions);
      }
    };

    if (inputValue.length > 0) {
      fetchAutocompleteData();
    }
  }, [inputValue]);

  const handleSelectChange = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      setCity(selectedOption.value);
    }
  };

  return (
    <div className="searchContainer">
      <div className="searchPanel">
        <Select
          className="search"
          placeholder="Search..."
          value={options.find((option) => option.value === inputValue)}
          options={options}
          onChange={handleSelectChange}
          onInputChange={(inputValue) => setInputValue(inputValue)}
        />
      </div>
    </div>
  );
}

export default search;
