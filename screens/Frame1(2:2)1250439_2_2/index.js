import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_3_19}>
        <Text style={styles.Text_3_19}>Sign Up</Text>
      </View>
      <View style={styles.View_4_5}>
        <Text style={styles.Text_4_5}>Inno’s To Do</Text>
      </View>
      <View style={styles.View_3_18}>
        <Text style={styles.Text_3_18}>Login</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1df2/a41a/478bf49d1db4a085375c8d2a6ea4f9e8"
        }}
        style={styles.ImageBackground_3_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e173/6ae5/700df5e379ec43d9dee398f9ec2f5cd0"
        }}
        style={styles.ImageBackground_5_3}
      />
      <View style={styles.View_2_6}>
        <Text style={styles.Text_2_6}>SIGN IN</Text>
      </View>
      <View style={styles.View_2_7}>
        <Text style={styles.Text_2_7}>SIGN IN TO CONTINUE TO THE LIST</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bf1/e9c6/a90adc2a4493f603ace3386acf792969"
        }}
        style={styles.ImageBackground_2_5}
      />
      <View style={styles.View_4_6}>
        <Text style={styles.Text_4_6}>Youremail.gmail.com</Text>
      </View>
      <View style={styles.View_4_8}>
        <Text style={styles.Text_4_8}>Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b74/78b6/3c88124dca8b73f6b21826af2f64c394"
        }}
        style={styles.ImageBackground_3_11}
      />
      <View style={styles.View_5_10}>
        <Text style={styles.Text_5_10}>Forgot Password ?</Text>
      </View>
      <View style={styles.View_5_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8633/8ada/d09e1bce51437555aced2a3d0433a5f2"
          }}
          style={styles.ImageBackground_3_16}
        />
        <View style={styles.View_3_17}>
          <Text style={styles.Text_3_17}>Sign In</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b86f/35ba/f468f57d0528b9a74a3a16fcdda18e0f"
        }}
        style={styles.ImageBackground_17_6}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 245, 255, 1)" },
  View_2: { height: hp("100%") },
  View_3_19: {
    width: wp("6.09375%"),
    minWidth: wp("6.09375%"),
    minHeight: hp("4.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.6875%"),
    top: hp("7.777777777777778%"),
    justifyContent: "flex-start"
  },
  Text_3_19: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_5: {
    width: wp("23.125%"),
    minWidth: wp("23.125%"),
    minHeight: hp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9375%"),
    top: hp("4.166666666666666%"),
    justifyContent: "center"
  },
  Text_4_5: {
    color: "rgba(108, 16, 109, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_18: {
    width: wp("4.53125%"),
    minWidth: wp("4.53125%"),
    minHeight: hp("4.444444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.406250000000004%"),
    top: hp("7.777777777777778%"),
    justifyContent: "flex-start"
  },
  Text_3_18: {
    color: "rgba(108, 105, 108, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_9: {
    width: wp("35.6249737739563%"),
    minWidth: wp("35.6249737739563%"),
    height: hp("0.2878785795635647%"),
    minHeight: hp("0.2878785795635647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("65.55555555555556%")
  },
  ImageBackground_5_3: {
    width: wp("3.1281095743179317%"),
    height: hp("4.174859788682726%"),
    top: hp("59.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.68750059604645%")
  },
  View_2_6: {
    width: wp("17.65625%"),
    minWidth: wp("17.65625%"),
    minHeight: hp("4.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("32.77777777777778%"),
    justifyContent: "flex-start"
  },
  Text_2_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_7: {
    width: wp("49.53125%"),
    minWidth: wp("49.53125%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("41.94444444444444%"),
    justifyContent: "flex-start"
  },
  Text_2_7: {
    color: "rgba(106, 106, 106, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_5: {
    width: wp("53.125%"),
    minWidth: wp("53.125%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.5625%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_4_6: {
    width: wp("19.0625%"),
    minWidth: wp("19.0625%"),
    minHeight: hp("3.888888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("57.49999999999999%"),
    justifyContent: "center"
  },
  Text_4_6: {
    color: "rgba(132, 125, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_4_8: {
    width: wp("9.6875%"),
    minWidth: wp("9.6875%"),
    minHeight: hp("4.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("70.55555555555556%"),
    justifyContent: "center"
  },
  Text_4_8: {
    color: "rgba(151, 148, 151, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.52,
    textTransform: "none"
  },
  ImageBackground_3_11: {
    width: wp("35.625%"),
    minWidth: wp("35.625%"),
    height: hp("4.578309089866808e-9%"),
    minHeight: hp("4.578309089866808e-9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("78.33333333333333%")
  },
  View_5_10: {
    width: wp("23.90625%"),
    minWidth: wp("23.90625%"),
    minHeight: hp("12.777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.71875%"),
    top: hp("78.33333333333333%"),
    justifyContent: "center"
  },
  Text_5_10: {
    color: "rgba(151, 148, 151, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_5_9: {
    width: wp("27.34375%"),
    minWidth: wp("27.34375%"),
    height: hp("6.111111111111111%"),
    minHeight: hp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("94.16666666666667%")
  },
  ImageBackground_3_16: {
    width: wp("27.34375%"),
    minWidth: wp("27.34375%"),
    height: hp("6.111111111111111%"),
    minHeight: hp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_17: {
    width: wp("6.932218074798584%"),
    minWidth: wp("6.932218074798584%"),
    minHeight: hp("4.400000042385526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.14157772064209%"),
    top: hp("0.733339786529541%"),
    justifyContent: "center"
  },
  Text_3_17: {
    color: "rgba(254, 251, 251, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_6: {
    width: wp("3.125%"),
    height: hp("4.166666666666666%"),
    top: hp("71.94444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.6875%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
