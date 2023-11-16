'use client';

import { useMemo, useState, useCallback, HTMLAttributes } from 'react';
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { Form } from '@/components/UI/organisms';
import { Input, NumberInput } from '@/components/UI/atoms';
import { cls } from '@/utils';

export type PlaceAutocompletePrediction = google.maps.places.AutocompletePrediction;

export type PlaceAutocompletePredictions = PlaceAutocompletePrediction[];

const GoogleMaps = () => {
  const [addressesOptions, setAddressesOptions] = useState<PlaceAutocompletePredictions>([]);

  const autocompleteService = useMemo(() => new window.google.maps.places.AutocompleteService(), []);

  const getOptionLabel = useCallback((option: PlaceAutocompletePrediction) => option.description, []);

  const renderInput = useCallback(
    (params: AutocompleteRenderInputParams) => <Input {...params} label="Адреса" fullWidth />,
    [],
  );

  const filterOptions = useCallback((x: PlaceAutocompletePredictions) => x, []);

  const onAddressInputChange = useCallback(
    (_: any, input: string) => {
      if (input === '') {
        setAddressesOptions([]);
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
          setAddressesOptions(results || []);
        },
      );
    },
    [autocompleteService],
  );

  const renderOption = useCallback((props: HTMLAttributes<HTMLLIElement>, option: PlaceAutocompletePrediction) => {
    const matches = option.structured_formatting.main_text_matched_substrings || [];

    const parts = parse(
      option.structured_formatting.main_text,
      matches.map((match: any) => [match.offset, match.offset + match.length]),
    );

    return (
      <li {...props}>
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
  }, []);

  return (
    <Form className="grid grid-cols-2">
      <Autocomplete
        className="w-80"
        getOptionLabel={getOptionLabel}
        filterOptions={filterOptions}
        options={addressesOptions}
        noOptionsText="Немає адреси"
        onInputChange={onAddressInputChange}
        renderInput={renderInput}
        renderOption={renderOption}
      />
      <Input name="street" label="Вулиця" />
      <NumberInput name="streetNumber" label="Номер вулиці" min={0} decimalScale={0} />
      <NumberInput name="flatNumber" label="Номер квартири" min={0} decimalScale={0} />
    </Form>
  );
};

export default GoogleMaps;
