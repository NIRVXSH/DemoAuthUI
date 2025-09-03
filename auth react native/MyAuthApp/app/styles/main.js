const { StyleSheet } = require("react-native");

const mainStyles=StyleSheet.create({
  view:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
  },
  navButton: {
      width: 100,
      height: 20,
      backgroundColor: "coral",
      borderRadius: 8,
      textAlign: "center",
  },
   title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  
});

export default mainStyles;