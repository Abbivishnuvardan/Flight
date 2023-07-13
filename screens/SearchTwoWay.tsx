import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const SearchTwoWay = () => {
  const [
    outlinedTextOnlyNoIcon2DatePicker,
    setOutlinedTextOnlyNoIcon2DatePicker,
  ] = useState(undefined);
  const [
    outlinedTextOnlyNoIcon3DatePicker,
    setOutlinedTextOnlyNoIcon3DatePicker,
  ] = useState(undefined);
  const [outlinedLabeledOpen, setOutlinedLabeledOpen] = useState(false);
  const [outlinedLabeledItems, setOutlinedLabeledItems] = useState([
    { value: "Economy", label: "Economy" },
    { value: "Business", label: "Business" },
  ]);

  return (
    <View style={[styles.searchTwoWay, styles.searchIconFlexBox]}>
      <View style={[styles.group4, styles.group4FlexBox]}>
        <Pressable style={styles.iconBack}>
          <Image
            style={styles.group2Icon}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </Pressable>
        <View style={[styles.searchFlightWrapper, styles.searchIconFlexBox]}>
          <Text style={styles.searchFlight}>Search Flight</Text>
        </View>
        <View style={styles.iconBack}>
          <Pressable style={styles.ellipseParent}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.flightSelectionParent, styles.group4FlexBox1]}>
        <View style={styles.flightSelection}>
          <View style={styles.waySelection}>
            <Pressable style={styles.wrapperFlexBox}>
              <Text style={styles.oneWay}>One way</Text>
            </Pressable>
            <Pressable style={[styles.roundTripWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.roundTrip, styles.roundTripTypo]}>
                Round trip
              </Text>
            </Pressable>
          </View>
          <View
            style={[styles.roundTripSection, styles.buttonPrimarySpaceBlock]}
          >
            <View style={[styles.form, styles.searchIconFlexBox]}>
              <View
                style={[
                  styles.outlinedtextOnlyNoIcon,
                  styles.searchIconFlexBox,
                ]}
              >
                <View style={styles.outlinedLabeled}>
                  <View style={[styles.dpBorder, styles.dpBorderBorder]} />
                  <View style={[styles.dpBorder1, styles.borderPosition]} />
                  <TextInput
                    style={styles.textPosition}
                    placeholder="Select Departure"
                    placeholderTextColor="#9eaab6"
                  />
                  <Text style={[styles.labelCaption, styles.labelTypo]}>
                    From
                  </Text>
                  <View style={styles.airplanetakeoff}>
                    <ImageBackground
                      style={styles.outlinedLabeled}
                      resizeMode="cover"
                      source={require("../assets/airplanetakeoff.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[styles.outlinedtextOnlyNoIcon1, styles.inputsFlexBox]}
              >
                <View style={styles.outlinedLabeled}>
                  <View style={[styles.dpBorder, styles.dpBorderBorder]} />
                  <View style={[styles.dpBorder1, styles.borderPosition]} />
                  <TextInput
                    style={styles.textPosition}
                    placeholder="Select Departure"
                    placeholderTextColor="#9eaab6"
                  />
                  <Text style={[styles.labelCaption, styles.labelTypo]}>
                    To
                  </Text>
                  <Image
                    style={[styles.airplaneLandingIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/airplane-landing.png")}
                  />
                </View>
              </View>
              <View style={[styles.inputsRow, styles.inputsFlexBox]}>
                <RNKDatepicker
                  label={() => (
                    <Text style={styles.outlinedTextOnlyNoIcon2Label}>
                      Select Date
                    </Text>
                  )}
                  placeholder={() => (
                    <Text style={styles.outlinedTextOnlyNoIcon2PlaceHolder}>
                      Departure
                    </Text>
                  )}
                  date={outlinedTextOnlyNoIcon2DatePicker}
                  onSelect={setOutlinedTextOnlyNoIcon2DatePicker}
                  controlStyle={styles.outlinedTextOnlyNoIcon2Value}
                />
                <RNKDatepicker
                  style={styles.outlinedtextOnlyNoIcon2}
                  label={() => (
                    <Text style={styles.outlinedTextOnlyNoIcon3Label}>
                      Select Date
                    </Text>
                  )}
                  placeholder={() => (
                    <Text style={styles.outlinedTextOnlyNoIcon3PlaceHolder}>
                      Return{" "}
                    </Text>
                  )}
                  date={outlinedTextOnlyNoIcon3DatePicker}
                  onSelect={setOutlinedTextOnlyNoIcon3DatePicker}
                  controlStyle={styles.outlinedTextOnlyNoIcon3Value}
                />
              </View>
              <View style={[styles.inputsRow1, styles.inputsFlexBox]}>
                <Pressable
                  style={[
                    styles.outlinedtextOnlyNoIcon,
                    styles.searchIconFlexBox,
                  ]}
                >
                  <View style={styles.outlinedLabeled2}>
                    <View style={[styles.dpBorder, styles.dpBorderBorder]} />
                    <View style={[styles.dpBorder1, styles.borderPosition]} />
                    <Text style={[styles.labelCaption2, styles.labelTypo]}>
                      Passengers
                    </Text>
                    <Text style={[styles.textData2, styles.textPosition]}>
                      1 Adult
                    </Text>
                    <Image
                      style={[styles.calenderIcon, styles.iconPosition]}
                      contentFit="cover"
                      source={require("../assets/calender.png")}
                    />
                  </View>
                </Pressable>
                <View
                  style={[
                    styles.outlinedtextOnlyNoIcon4,
                    styles.roundTripSectionFlexBox,
                  ]}
                >
                  <View
                    style={[styles.outlinedLabeled3, styles.searchIconFlexBox]}
                    placeholder="Class"
                  >
                    <DropDownPicker
                      style={styles.dpBorderBorder}
                      open={outlinedLabeledOpen}
                      setOpen={setOutlinedLabeledOpen}
                      items={outlinedLabeledItems}
                      labelStyle={styles.outlinedLabeledValue}
                      textStyle={styles.outlinedLabeledText}
                      dropDownContainerStyle={
                        styles.outlinedLabeleddropDownContainer
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.buttonPrimary, styles.buttonPrimarySpaceBlock]}
            >
              <Text style={[styles.viewDetails, styles.roundTripTypo]}>
                Search
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.frameView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outlinedTextOnlyNoIcon2Label: {
    fontWeight: "500",
    fontFamily: "Roboto_medium",
    color: "#191919",
    fontSize: 12,
  },
  outlinedTextOnlyNoIcon2PlaceHolder: {
    fontFamily: "Roboto_regular",
    color: "#9eaab6",
    fontSize: 14,
  },
  outlinedTextOnlyNoIcon2Value: {},
  outlinedTextOnlyNoIcon3Label: {
    fontWeight: "500",
    fontFamily: "Roboto_medium",
    color: "#191919",
    fontSize: 12,
  },
  outlinedTextOnlyNoIcon3PlaceHolder: {
    fontFamily: "Roboto_regular",
    color: "#9eaab6",
    fontSize: 14,
  },
  outlinedTextOnlyNoIcon3Value: {},
  outlinedLabeledValue: {
    color: "#191919",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto_medium",
  },
  outlinedLabeledText: {
    color: "#191919",
    fontSize: 14,
    fontFamily: "Roboto_regular",
  },
  outlinedLabeleddropDownContainer: {
    borderStyle: "solid",
    borderColor: "#263238",
    borderWidth: 1,
  },
  searchIconFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  group4FlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.shadesWhite,
  },
  frameLayout: {
    height: 5,
    width: 5,
  },
  group4FlexBox1: {
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_13xl,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  roundTripTypo: {
    color: Color.shadesWhite,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  buttonPrimarySpaceBlock: {
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  dpBorderBorder: {
    borderWidth: 1,
    borderColor: "#263238",
    borderStyle: "solid",
  },
  borderPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  labelTypo: {
    height: 16,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: -7,
    left: 12,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.gray_100,
    position: "absolute",
  },
  inputsFlexBox: {
    marginTop: 18,
    alignSelf: "stretch",
    flex: 1,
  },
  iconPosition: {
    top: 17,
    height: 20,
    width: 20,
    position: "absolute",
  },
  textPosition: {
    left: 41,
    top: 10,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  roundTripSectionFlexBox: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  group2Icon: {
    height: "55.59%",
    width: "77.03%",
    top: "22.18%",
    right: "12.13%",
    bottom: "22.23%",
    left: "10.84%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconBack: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  searchFlight: {
    fontSize: FontSize.regularNoneRegular_size,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  searchFlightWrapper: {
    justifyContent: "center",
  },
  frameItem: {
    marginTop: 4,
  },
  ellipseParent: {
    top: 5,
    left: 14,
    position: "absolute",
  },
  group4: {
    height: 41,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  oneWay: {
    color: "#9eaab6",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
  },
  roundTrip: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.shadesWhite,
  },
  roundTripWrapper: {
    backgroundColor: "#1262ae",
  },
  waySelection: {
    backgroundColor: "#f3f5f9",
    height: 44,
    padding: 4,
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dpBorder: {
    opacity: 0.16,
    borderRadius: Border.br_5xs,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  dpBorder1: {
    borderRadius: Border.br_9xs,
    borderColor: "#0e4da4",
    borderWidth: 2,
    display: "none",
    borderStyle: "solid",
  },
  labelCaption: {
    width: 303,
  },
  outlinedLabeled: {
    alignSelf: "stretch",
    flex: 1,
  },
  airplanetakeoff: {
    top: 15,
    height: 20,
    width: 20,
    left: 12,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  outlinedtextOnlyNoIcon: {
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  airplaneLandingIcon: {
    left: 15,
  },
  outlinedtextOnlyNoIcon1: {
    justifyContent: "center",
    alignItems: "center",
  },
  outlinedtextOnlyNoIcon2: {
    marginLeft: 13,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  labelCaption2: {
    width: 139,
  },
  textData2: {
    letterSpacing: 0.1,
    display: "flex",
    width: 98,
    height: 40,
    lineHeight: 24,
    left: 41,
    top: 10,
    textAlign: "left",
    color: Color.gray_100,
    alignItems: "center",
  },
  calenderIcon: {
    left: 12,
    top: 17,
    overflow: "hidden",
  },
  outlinedLabeled2: {
    width: 151,
    height: 60,
  },
  outlinedLabeled3: {
    width: 142,
    height: 50,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
  },
  outlinedtextOnlyNoIcon4: {
    paddingVertical: 2,
    marginLeft: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsRow1: {
    flexDirection: "row",
  },
  form: {
    height: 337,
    paddingBottom: 44,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  viewDetails: {
    color: Color.shadesWhite,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    alignSelf: "stretch",
    flex: 1,
  },
  buttonPrimary: {
    borderRadius: 5,
    backgroundColor: "#2d1aa1",
    width: 335,
    height: 46,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
  },
  roundTripSection: {
    marginTop: 20,
    paddingHorizontal: 0,
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Color.shadesWhite,
  },
  flightSelection: {
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    padding: Padding.p_sm,
    backgroundColor: Color.shadesWhite,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameView: {
    width: 343,
    height: 110,
    marginTop: 20,
  },
  flightSelectionParent: {
    height: 623,
    paddingBottom: Padding.p_xl,
    justifyContent: "center",
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
  searchTwoWay: {
    width: "100%",
    height: 677,
    justifyContent: "center",
    flex: 1,
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
  },
});

export default SearchTwoWay;
