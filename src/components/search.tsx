import { useState, useEffect } from "react";
import Select from "react-select";
import.meta.env.VITE_API_KEY;

export const keyAPI = import.meta.env.VITE_API_KEY;

// Interface for provide enter data of event
interface propsSearch {
  setCity: any;
}

interface OptionType {
  value: string;
  label: string;
}

function search(props: propsSearch) {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<OptionType[]>([]);
  const { setCity } = props;

  useEffect(() => {
    const fetchAutocompleteData = async () => {
      const url = `http://api.weatherapi.com/v1/search.json?key=${keyAPI}&q=${inputValue}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        const options: OptionType[] = data.map((item: { name: string }) => ({
          value: item.name,
          label: item.name,
        }));
        setOptions(options);
      }
    };
    if (inputValue.length > 0) {
      fetchAutocompleteData();
    }
  }, [inputValue]);

  return (
    <div className="searchContainer">
      <div className="searchPanel">
        <Select
          className="search"
          placeholder="Search..."
          value={options.find((option) => option.value === inputValue)}
          options={options}
          onChange={() => setCity(inputValue)}
          onInputChange={(inputValue) => setInputValue(inputValue)}
        />
      </div>
    </div>
  );
}

export default search;
