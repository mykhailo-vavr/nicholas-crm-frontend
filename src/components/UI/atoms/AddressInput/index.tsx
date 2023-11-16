'use client';

import { useMemo, useState, useCallback, HTMLAttributes } from 'react';
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { Input } from '@/components/UI/atoms';
import { cls, parseAddressString } from '@/utils';
import { AddressInputFC } from './types';

// TODO: Refactor this component
// TODO: Optimize performance and UI for component

export type PlaceAutocompletePrediction = google.maps.places.AutocompletePrediction;

export type PlaceAutocompletePredictions = PlaceAutocompletePrediction[];

const AddressInput: AddressInputFC = (props) => {
  const [options, setOptions] = useState<PlaceAutocompletePredictions>([]);

  const autocompleteService = useMemo(() => new window.google.maps.places.AutocompleteService(), []);

  const getOptionLabel = useCallback((option: PlaceAutocompletePrediction) => {
  
    const { street, streetNumber, city } = parseAddressString(option.description);
    return [street, streetNumber, city].join(', ');
  }, []);

  const renderInput = useCallback(
    (params: AutocompleteRenderInputParams) => <Input {...params} {...props} name="address" label="Адреса" fullWidth />,
    [props],
  );

 

  const filterOptions = useCallback((x: PlaceAutocompletePredictions) => x, []);

  const onInputChange = useCallback(
    (_: any, input: string) => {
      if (input === '') {
        setOptions([]);
        return;
      }

      autocompleteService?.getPlacePredictions(
        {
          locationBias: {
            center: { lat: 49.55303198206416, lng: 25.594740916449457 },
            radius: 1400,
          },
          input,
          componentRestrictions: { country: 'UA' },
          types: ['address'],
          language: 'uk',
        },
        (results) => {
          setOptions(results || []);
        },
      );
    },
    [autocompleteService],
  );

  const renderOption = useCallback(
    (optionProps: HTMLAttributes<HTMLLIElement>, option: PlaceAutocompletePrediction) => {
      const matches = option.structured_formatting.main_text_matched_substrings || [];

      const parts = parse(
        option.structured_formatting.main_text,
        matches.map((match: any) => [match.offset, match.offset + match.length]),
      );

      return (
        <li {...optionProps}>
          <div>
            {parts.map((part) => (
              <span key={part.text} className={cls(part.highlight && 'font-bold')}>
                {part.text}
              </span>
            ))}
            <Typography variant="body2">{option.structured_formatting.secondary_text}</Typography>
          </div>
        </li>
      );
    },
    [],
  );

  return (
    <Autocomplete
      getOptionLabel={getOptionLabel}
      filterOptions={filterOptions}
      options={options}
      noOptionsText="Немає адреси"
      onInputChange={onInputChange}
      renderInput={renderInput}
      renderOption={renderOption}
    />
  );
};

export default AddressInput;
