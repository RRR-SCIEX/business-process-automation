import React from 'react';
import { Text } from '@fluentui/react-northstar'
import logo from "./logo.svg";

const HeaderComponent = (props) => {
    
    return (
        <div
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        color: "white",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{ textAlign: "left", marginLeft: "10px" }}
        size="large"
        content="Customer Room - Artificial Intelligence Systems (Language)"
      />

      <img
        src={logo}
        alt="Logo"
        style={{ height: "70px", width: "100px", marginRight: "10px" }}
      />
            {/* <Header content='Business Process Automation Accelerator' className="header" style={{ fontSize: "20px", color: "white", backgroundColor: "rgb(0, 120, 212)" }} /> */}
            </div>
        // <div className="header" style={{fontFamily: props.theme.siteVariables.bodyFontFamily,  backgroundColor: props.theme.siteVariables.colorScheme.brand.background, color : props.theme.siteVariables.colorScheme.brand.foreground, fontSize: props.theme.siteVariables.fontSizes.larger}}>
        //     Business Process Automation Accelerator
        // </div>
    )
}

export default HeaderComponent
