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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b090/bb7a/58f955c13f97a2c0a2dbc7a40c5ef564"
        }}
        style={styles.ImageBackground_14_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af54/0dd6/a5d4521c4a093318e709bb84c2d1cb34"
        }}
        style={styles.ImageBackground_14_4}
      />
      <View style={styles.View_16_36} />
      <View style={styles.View_16_39}>
        <Text style={styles.Text_16_39}>Attend driving lessons</Text>
      </View>
      <View style={styles.View_14_3} />
      <View style={styles.View_16_40}>
        <Text style={styles.Text_16_40}>Attend driving lessons</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2643/51b5/d6846e4e0f75b887c20c4da601f51ee9"
        }}
        style={styles.ImageBackground_14_36}
      />
      <View style={styles.View_14_24}>
        <Text style={styles.Text_14_24}>Repeat</Text>
      </View>
      <View style={styles.View_14_25}>
        <Text style={styles.Text_14_25}>Add File</Text>
      </View>
      <View style={styles.View_14_26}>
        <Text style={styles.Text_14_26}>Add Note</Text>
      </View>
      <View style={styles.View_14_27}>
        <Text style={styles.Text_14_27}>Created 3 minutes ago</Text>
      </View>
      <View style={styles.View_14_28}>
        <Text style={styles.Text_14_28}>Inno’s To Do </Text>
      </View>
      <View style={styles.View_14_21}>
        <Text style={styles.Text_14_21}>Remind Me</Text>
      </View>
      <View style={styles.View_14_22}>
        <Text style={styles.Text_14_22}>Add Due Date</Text>
      </View>
      <View style={styles.View_14_19}>
        <Text style={styles.Text_14_19}>Add Step</Text>
      </View>
      <View style={styles.View_14_20}>
        <Text style={styles.Text_14_20}>Add to My Day</Text>
      </View>
      <View style={styles.View_14_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/6f88/ad2fb0741f24d6293d0d0da66ee0fba9"
        }}
        style={styles.ImageBackground_16_14}
      />
      <View style={styles.View_16_35} />
      <View style={styles.View_14_11}>
        <Text style={styles.Text_14_11}>Search</Text>
      </View>
      <View style={styles.View_14_12}>
        <Text style={styles.Text_14_12}>My Day</Text>
      </View>
      <View style={styles.View_14_13}>
        <Text style={styles.Text_14_13}>Important</Text>
      </View>
      <View style={styles.View_14_14}>
        <Text style={styles.Text_14_14}>Planned</Text>
      </View>
      <View style={styles.View_14_15}>
        <Text style={styles.Text_14_15}>Assigned to you</Text>
      </View>
      <View style={styles.View_14_16}>
        <Text style={styles.Text_14_16}>Tasks</Text>
      </View>
      <View style={styles.View_14_17}>
        <Text style={styles.Text_14_17}>New List</Text>
      </View>
      <View style={styles.View_14_30}>
        <Text style={styles.Text_14_30}>Inno’s To Do</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2643/51b5/d6846e4e0f75b887c20c4da601f51ee9"
        }}
        style={styles.ImageBackground_14_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ba/8a27/9429a43e74133d97b7a85b5dd9c75a2a"
        }}
        style={styles.ImageBackground_14_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2643/51b5/d6846e4e0f75b887c20c4da601f51ee9"
        }}
        style={styles.ImageBackground_14_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2643/51b5/d6846e4e0f75b887c20c4da601f51ee9"
        }}
        style={styles.ImageBackground_14_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2e8/8fc1/720695b642d5d7ea6bd8012fb8ce4950"
        }}
        style={styles.ImageBackground_14_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f747/ce3a/dd4b77d7aebfad0ae928e4bcae3cd891"
        }}
        style={styles.ImageBackground_14_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d39f/2306/d381e9f43cef1c214cb68903369f5401"
        }}
        style={styles.ImageBackground_16_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe4d/edbc/169a2b735021d67c622df809d660928e"
        }}
        style={styles.ImageBackground_16_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4af/bef1/4d832f476b2da54e986a7ce5ad3e0ddf"
        }}
        style={styles.ImageBackground_16_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b88/0138/f68a941586d12fbcf45e165216e558d1"
        }}
        style={styles.ImageBackground_16_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00ac/eb45/61276d82629f3a2e8ce901740bbbce83"
        }}
        style={styles.ImageBackground_16_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c95f/8ff8/367b9a104fab4885bfe079b0cad7724a"
        }}
        style={styles.ImageBackground_16_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e8/30fa/79abb422de658bd71f97b701b1173dc7"
        }}
        style={styles.ImageBackground_16_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a4/49b8/ca6eef61a913dae1e9c32db492f0f899"
        }}
        style={styles.ImageBackground_17_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59a4/49b8/ca6eef61a913dae1e9c32db492f0f899"
        }}
        style={styles.ImageBackground_17_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3efd/ef78/10717c9b2c1f116695ee41ac2027d46f"
        }}
        style={styles.ImageBackground_16_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddeb/0a16/967f8b3a3b4552d6409479956500b4c2"
        }}
        style={styles.ImageBackground_16_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e4/1f0a/f67de1e34c0a0b753caca51ec3f449f3"
        }}
        style={styles.ImageBackground_16_22}
      />
      <View style={styles.View_16_21} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0888/0837/c40886281ee631b4ef4cc5b138ea60b6"
        }}
        style={styles.ImageBackground_16_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2862/8218/5153a3846a1d4e936928043854bad6cd"
        }}
        style={styles.ImageBackground_16_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0283/9563/80661eba74a472042f5ed3993225a04a"
        }}
        style={styles.ImageBackground_16_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0283/9563/80661eba74a472042f5ed3993225a04a"
        }}
        style={styles.ImageBackground_16_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c22/508c/225e84614480ec862bec23d785c5fe7f"
        }}
        style={styles.ImageBackground_16_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d0d/fce5/5f2afaf3c68ba16ee1b367d8825972c3"
        }}
        style={styles.ImageBackground_16_32}
      />
      <View style={styles.View_16_34} />
      <View style={styles.View_14_18}>
        <Text style={styles.Text_14_18}>Add a Task</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c586/e146/0eaa0db8f398c15720d46d364e9de8ee"
        }}
        style={styles.ImageBackground_16_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c7/b5f1/1beeb73fff84191e0c6bae3c876cdcbb"
        }}
        style={styles.ImageBackground_17_4}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 170, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_14_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_14_4: {
    width: wp("52.1875%"),
    minWidth: wp("52.1875%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: hp("4.166666666666666%"),
    resizeMode: "cover"
  },
  View_16_36: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("11.38888888888889%"),
    minHeight: hp("11.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.09375%"),
    top: hp("31.38888888888889%"),
    backgroundColor: "rgba(209, 185, 209, 1)"
  },
  View_16_39: {
    width: wp("17.34375%"),
    minWidth: wp("17.34375%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.3125%"),
    top: hp("35.27777777777778%"),
    justifyContent: "center"
  },
  Text_16_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_3: {
    width: wp("21.5625%"),
    minWidth: wp("21.5625%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.78125%"),
    top: hp("4.166666666666666%"),
    backgroundColor: "rgba(212, 198, 212, 1)"
  },
  View_16_40: {
    width: wp("12.65625%"),
    minWidth: wp("12.65625%"),
    minHeight: hp("7.222222222222221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.625%"),
    top: hp("11.666666666666666%"),
    justifyContent: "center"
  },
  Text_16_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_36: {
    width: wp("18.28125%"),
    minWidth: wp("18.28125%"),
    height: hp("3.917989488400053e-8%"),
    minHeight: hp("3.917989488400053e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.125%"),
    top: hp("31.38888888888889%")
  },
  View_14_24: {
    width: wp("5.46875%"),
    minWidth: wp("5.46875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.15625%"),
    top: hp("53.888888888888886%"),
    justifyContent: "center"
  },
  Text_14_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_25: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.15625%"),
    top: hp("61.111111111111114%"),
    justifyContent: "center"
  },
  Text_14_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_26: {
    width: wp("7.187499999999999%"),
    minWidth: wp("7.187499999999999%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("68.33333333333333%"),
    justifyContent: "center"
  },
  Text_14_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_27: {
    width: wp("14.21875%"),
    minWidth: wp("14.21875%"),
    minHeight: hp("3.0555555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.375%"),
    top: hp("90%"),
    justifyContent: "center"
  },
  Text_14_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_28: {
    width: wp("30.46875%"),
    minWidth: wp("30.46875%"),
    minHeight: hp("11.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.6875%"),
    top: hp("11.666666666666666%"),
    justifyContent: "center"
  },
  Text_14_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_21: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.15625%"),
    top: hp("39.44444444444444%"),
    justifyContent: "center"
  },
  Text_14_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_22: {
    width: wp("10.46875%"),
    minWidth: wp("10.46875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.15625%"),
    top: hp("46.666666666666664%"),
    justifyContent: "center"
  },
  Text_14_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_19: {
    width: wp("7.03125%"),
    minWidth: wp("7.03125%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.625%"),
    top: hp("25.555555555555554%"),
    justifyContent: "center"
  },
  Text_14_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_20: {
    width: wp("11.09375%"),
    minWidth: wp("11.09375%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.15625%"),
    top: hp("32.22222222222222%"),
    justifyContent: "center"
  },
  Text_14_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_2: {
    width: wp("21.5625%"),
    minWidth: wp("21.5625%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.34375%"),
    top: hp("4.444444444444445%"),
    backgroundColor: "rgba(206, 198, 205, 1)"
  },
  ImageBackground_16_14: {
    width: wp("2.03125%"),
    height: hp("4.166666666666666%"),
    top: hp("37.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5937499999999996%")
  },
  View_16_35: {
    width: wp("12.65625%"),
    minWidth: wp("12.65625%"),
    height: hp("4.722222222222222%"),
    minHeight: hp("4.722222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.9375%"),
    top: hp("9.166666666666666%"),
    backgroundColor: "rgba(102, 98, 98, 1)"
  },
  View_14_11: {
    width: wp("5.46875%"),
    minWidth: wp("5.46875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.09375%"),
    top: hp("9.722222222222223%"),
    justifyContent: "center"
  },
  Text_14_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_12: {
    width: wp("5.78125%"),
    minWidth: wp("5.78125%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("16.666666666666664%"),
    justifyContent: "center"
  },
  Text_14_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_13: {
    width: wp("7.656250000000001%"),
    minWidth: wp("7.656250000000001%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("23.61111111111111%"),
    justifyContent: "center"
  },
  Text_14_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_14: {
    width: wp("6.406249999999999%"),
    minWidth: wp("6.406249999999999%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("31.38888888888889%"),
    justifyContent: "center"
  },
  Text_14_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_15: {
    width: wp("12.34375%"),
    minWidth: wp("12.34375%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("38.611111111111114%"),
    justifyContent: "center"
  },
  Text_14_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_16: {
    width: wp("4.53125%"),
    minWidth: wp("4.53125%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("46.38888888888889%"),
    justifyContent: "center"
  },
  Text_14_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_17: {
    width: wp("6.71875%"),
    minWidth: wp("6.71875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("89.72222222222223%"),
    justifyContent: "center"
  },
  Text_14_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_30: {
    width: wp("9.21875%"),
    minWidth: wp("9.21875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.406249999999999%"),
    top: hp("55.27777777777778%"),
    justifyContent: "center"
  },
  Text_14_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_35: {
    width: wp("18.28125%"),
    minWidth: wp("18.28125%"),
    height: hp("2.0177676813343876e-8%"),
    minHeight: hp("2.0177676813343876e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.125%"),
    top: hp("38.611111111111114%")
  },
  ImageBackground_14_32: {
    width: wp("18.28125%"),
    minWidth: wp("18.28125%"),
    height: hp("0.277777761220932%"),
    minHeight: hp("0.277777761220932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.125%"),
    top: hp("66.38888888888889%")
  },
  ImageBackground_14_39: {
    width: wp("18.28125%"),
    minWidth: wp("18.28125%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.125%"),
    top: hp("86.66666666666667%")
  },
  ImageBackground_14_33: {
    width: wp("18.28125%"),
    minWidth: wp("18.28125%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.125%"),
    top: hp("58.88888888888889%")
  },
  ImageBackground_14_38: {
    width: wp("17.96875%"),
    minWidth: wp("17.96875%"),
    height: hp("0.277777761220932%"),
    minHeight: hp("0.277777761220932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.53125%"),
    top: hp("52.22222222222223%")
  },
  ImageBackground_14_41: {
    width: wp("2.34375%"),
    height: hp("3.3333333333333335%"),
    top: hp("55.27777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.75%")
  },
  ImageBackground_16_3: {
    width: wp("1.875%"),
    height: hp("4.166666666666666%"),
    top: hp("30.833333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5937499999999996%")
  },
  ImageBackground_16_5: {
    width: wp("2.03125%"),
    height: hp("4.166666666666666%"),
    top: hp("46.111111111111114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.8125%")
  },
  ImageBackground_16_7: {
    width: wp("1.40625%"),
    height: hp("3.3333333333333335%"),
    top: hp("39.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.8125%")
  },
  ImageBackground_16_9: {
    width: wp("2.5%"),
    height: hp("4.444444444444445%"),
    top: hp("15.833333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.28125%")
  },
  ImageBackground_16_10: {
    width: wp("1.875%"),
    height: hp("3.3333333333333335%"),
    top: hp("32.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.8125%")
  },
  ImageBackground_16_12: {
    width: wp("2.1875%"),
    height: hp("5.555555555555555%"),
    top: hp("44.72222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5937499999999996%")
  },
  ImageBackground_16_16: {
    width: wp("2.1875%"),
    height: hp("4.722222222222222%"),
    top: hp("22.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5937499999999996%")
  },
  ImageBackground_17_2: {
    width: wp("2.1875%"),
    height: hp("4.722222222222222%"),
    top: hp("34.166666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.5625%")
  },
  ImageBackground_17_3: {
    width: wp("2.1875%"),
    height: hp("4.722222222222222%"),
    top: hp("12.777777777777777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.21875%")
  },
  ImageBackground_16_18: {
    width: wp("1.7187500000000002%"),
    height: hp("3.888888888888889%"),
    top: hp("61.111111111111114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.65625%")
  },
  ImageBackground_16_20: {
    width: wp("3.28125%"),
    height: hp("5.555555555555555%"),
    top: hp("15.277777777777779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_16_22: {
    width: wp("1.875%"),
    height: hp("4.444444444444445%"),
    top: hp("89.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.53125%")
  },
  View_16_21: {
    width: wp("3.90625%"),
    minWidth: wp("3.90625%"),
    height: hp("6.944444444444445%"),
    minHeight: hp("6.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.4375%"),
    top: hp("61.111111111111114%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_16_24: {
    width: wp("1.40625%"),
    height: hp("3.888888888888889%"),
    top: hp("89.16666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.1875%")
  },
  ImageBackground_16_26: {
    width: wp("3.7841796875%"),
    height: hp("1.953125%"),
    top: hp("18.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6875%")
  },
  ImageBackground_16_30: {
    width: wp("2.34375%"),
    height: hp("3.6111111111111107%"),
    top: hp("88.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5937499999999996%")
  },
  ImageBackground_16_29: {
    width: wp("2.34375%"),
    height: hp("3.6111111111111107%"),
    top: hp("83.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.937500000000004%")
  },
  ImageBackground_16_28: {
    width: wp("2.1875%"),
    height: hp("3.888888888888889%"),
    top: hp("25.27777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.8125%")
  },
  ImageBackground_16_32: {
    width: wp("1.7187500000000002%"),
    height: hp("3.888888888888889%"),
    top: hp("8.61111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.75%")
  },
  View_16_34: {
    width: wp("24.6875%"),
    minWidth: wp("24.6875%"),
    height: hp("4.722222222222222%"),
    minHeight: hp("4.722222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.4375%"),
    top: hp("83.61111111111111%"),
    backgroundColor: "rgba(102, 98, 98, 1)"
  },
  View_14_18: {
    width: wp("9.21875%"),
    minWidth: wp("9.21875%"),
    minHeight: hp("3.6111111111111107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.375%"),
    top: hp("84.16666666666667%"),
    justifyContent: "center"
  },
  Text_14_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_38: {
    width: wp("3.7841796875%"),
    height: hp("6.727430555555555%"),
    top: hp("33.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.500000000000004%")
  },
  ImageBackground_17_4: {
    width: wp("2.1875%"),
    height: hp("4.166666666666666%"),
    top: hp("12.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.40625%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
