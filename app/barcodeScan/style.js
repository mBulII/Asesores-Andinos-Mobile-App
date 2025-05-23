import { StyleSheet } from "react-native";
import { wp, hp } from "../../constants/device";
import { colors } from "../../constants/colors";

export default style = StyleSheet.create({
  scanContainer: {
    flex: 1,
    alignItems: "center",
  },
  
  titleContainer: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    backgroundColor: colors.main,
    paddingVertical: hp(5),
  },
  titleIcon: {
    zIndex: 1,
    width: wp(8),
  },
  titleCenterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: -wp(8),
  },
  titleText: {
    fontSize: wp(8),
    fontFamily: "Nunito-Bold",
    color: colors.white,
    textAlign: "center",
    width: "100%",
  },

  noPermissionText: {
    fontSize: wp(8),
    color: colors.black,
    textAlign: "center",
  },
  noPermissionTextHighlight: {
    fontSize: wp(8),
    color: colors.main,
    textAlign: "center",
  },

  cameraContainer: {
    flex: 1,
    width: "100%",
  },

  scannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  scannerFrame: {
    width: wp(70),
    height: wp(70),
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: wp(2),
    backgroundColor: "rgba(255,255,255,0.1)",
  },

  scannerHelpText: {
    marginTop: hp(3),
    color: colors.white,
    fontSize: wp(4),
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: wp(2),
    borderRadius: wp(1),
  },

  rescanButton: {
    position: "absolute",
    bottom: hp(8),
    alignSelf: "center",
    backgroundColor: colors.main,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: wp(2),
  },

  rescanButtonText: {
    color: colors.white,
    fontSize: wp(4),
    fontFamily: "Nunito-Bold",
  },

  alertContainer: {
    borderRadius: wp(4),
    padding: wp(4),
  },
  alertContainerSuccess: {
    backgroundColor: colors.main,
  },
  alertContainerError: {
    backgroundColor: colors.redError,
  },
  alertTitle: {
    color: colors.white,
    fontFamily: "Nunito-Bold",
    fontSize: wp(5),
  },
  alertText: {
    color: colors.white,
    fontSize: wp(4),
    marginVertical: hp(1),
  },
  alertButton: {
    marginRight: wp(4),
    backgroundColor: colors.white,
    height: hp(6),
    width: wp(22),
    justifyContent: "center",
  },
  alertButtonContent: {
    height: "100%",
  },
  alertButtonText: {
    fontSize: wp(4.5),
  },
  alertButtonTextSuccess: {
    color: colors.main,
  },
  alertButtonTextError: {
    color: colors.redError,
  },
});
