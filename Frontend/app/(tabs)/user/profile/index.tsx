import StackNavigationProfile from '@/screens/ProfileScreen/StackNavigationProfile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const ProfileLayout = () => {
  return <StackNavigationProfile />;
};
export default ProfileLayout;
