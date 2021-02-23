import WhatshotIcon from '@material-ui/icons/Whatshot';
import DescriptionIcon from '@material-ui/icons/Description';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

export type TOption = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const filterOptions: TOption[] = [
  { name: 'all', path: '/', icon: <DynamicFeedIcon /> },
  { name: 'hot', path: '/filter/hot', icon: <WhatshotIcon /> },
  { name: 'new', path: '/filter/new', icon: <DescriptionIcon /> },
  { name: 'rising', path: '/filter/rising', icon: <TrendingUpIcon /> },
  { name: 'top', path: '/filter/top', icon: <EqualizerIcon /> },
];

export default filterOptions;
