import React from 'react';
import "./ChannelRow.css"
import {Avatar} from "@material-ui/core";
import {CheckCircleOutlineOutlined} from "@material-ui/icons";

const ChannelRow = ({channel, description, image, numberOfVideos, subs, verified}) => {
   return (
      <div className={"channelRow"}>
         <Avatar className={"channelRow__logo"} alt={channel} src={image}/>
         <div className="channelRow__text">
            <h4>{channel} {verified && <CheckCircleOutlineOutlined />}</h4>
            <p>{subs} subscribers - {numberOfVideos} videos</p>
            <p>{description}</p>
         </div>
      </div>
   )
}

export default ChannelRow;
