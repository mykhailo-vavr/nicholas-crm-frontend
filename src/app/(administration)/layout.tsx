import GoogleMapsProvider from '@/components/providers/GoogleMaps';
import { FCWithChildren } from '@/types';

const AdministrationLayout: FCWithChildren = ({ children }) => <GoogleMapsProvider>{children}</GoogleMapsProvider>;

export default AdministrationLayout;
