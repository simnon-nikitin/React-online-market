import React from "react"
import ContentLoader from "react-content-loader"

const CartLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={187}
    viewBox="0 0 150 187"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="540" y="228" rx="3" ry="3" width="88" height="6" /> 
    <rect x="548" y="217" rx="3" ry="3" width="52" height="26" /> 
    <rect x="553" y="229" rx="3" ry="3" width="410" height="6" /> 
    <rect x="480" y="224" rx="3" ry="3" width="380" height="6" /> 
    <rect x="520" y="236" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="585" cy="236" r="20" /> 
    <rect x="123" y="87" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="18" ry="18" width="150" height="91" /> 
    <rect x="85" y="45" rx="0" ry="0" width="0" height="1" /> 
    <rect x="38" y="66" rx="0" ry="0" width="0" height="2" /> 
    <rect x="0" y="107" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="162" rx="8" ry="8" width="80" height="24" /> 
    <rect x="149" y="191" rx="8" ry="8" width="32" height="32" /> 
    <rect x="0" y="126" rx="3" ry="3" width="93" height="15" /> 
    <rect x="108" y="155" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)

export default CartLoader   