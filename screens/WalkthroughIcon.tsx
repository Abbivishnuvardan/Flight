import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const WalkthroughIcon = () => {
  return (
    <Image
      style={styles.walkthroughIcon}
      contentFit="cover"
      source={require("../assets/walkthrough.png")}
    />
  );
};

const styles = StyleSheet.create({
  walkthroughIcon: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 691,
    overflow: "hidden",
  },
});

export default WalkthroughIcon;
