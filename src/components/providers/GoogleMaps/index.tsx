'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { FCWithChildren } from '@/types';
import { RenderIf } from '@/components/helpers';
import { ClientConfigKeysEnum, getClientConfig } from '@/utils';

// TODO: refactor google maps loading logic

export const useLoadGoogleMapsLibraries = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const loader = new Loader({
      apiKey: getClientConfig(ClientConfigKeysEnum.NEXT_PUBLIC_GOOGLE_API_KEY),
      version: 'weekly',
      region: 'UK',
      language: 'uk',
    });

    Promise.all([loader.importLibrary('places')])
      .then(([placesLibrary]) => {
        window.google.maps.places = placesLibrary as any;
      })
      .finally(() => setLoading(false));
  }, []);

  return loading;
};

const GoogleMapsProvider: FCWithChildren = ({ children }) => {
  const loading = useLoadGoogleMapsLibraries();

  return <RenderIf condition={!loading && window.google}>{children}</RenderIf>;
};

export default GoogleMapsProvider;
