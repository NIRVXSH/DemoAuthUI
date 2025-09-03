import { Link } from "expo-router";
import { Text, View } from "react-native";
import mainStyles from "./styles/main";

export default function Index() {
  return (
    <View
      style={mainStyles.view}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link 
        href="/module/auth/pages/LoginPage" 
        style={mainStyles.navButton}>
              Login
      </Link>
    </View>
  );
}
