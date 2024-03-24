import GoogleMapsProvider from '@/components/providers/google-maps';
import { FCWithChildren } from '@/types';

const AdministrationLayout: FCWithChildren = ({ children }) => <GoogleMapsProvider>{children}</GoogleMapsProvider>;

export default AdministrationLayout;
