import GoogleMapsProvider from '@/components/providers/GoogleMaps';
import { FCWithChildren } from '@/types';

const Lay: FCWithChildren = ({ children }) => <GoogleMapsProvider>{children}</GoogleMapsProvider>;

export default Lay;
