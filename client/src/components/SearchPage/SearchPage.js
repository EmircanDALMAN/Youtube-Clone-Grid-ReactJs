import React from 'react';
import "./SearchPage.css"
import {TuneOutlined} from "@material-ui/icons";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

const SearchPage = () => {
   return (
      <div className={"searchPage"}>
         <div className="searchPage__filter">
            <TuneOutlined />
            <h2>FILTER</h2>
         </div>
         <hr/>
         <ChannelRow
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
            channel={"Emircan"}
            verified
            subs={"659K"}
            numberOfVideos={300}
            description={"Mükemmel açıklamaMükemmel açıklamaMükemmel açıklamaMükemmel açıklamaMükemmel açıklamaMükemmel açıklama"}
         />
         <hr/>
         <VideoRow
            views={"1.4m"}
            subs={"659k"}
            description={"AÇIKLAMA"}
            timestamp={"59 seconds ago"}
            channel={"Emircan"}
            title={"Lets''"}
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
         />
         <VideoRow
            views={"1.4m"}
            subs={"659k"}
            description={"AÇIKLAMA"}
            timestamp={"59 seconds ago"}
            channel={"Emircan"}
            title={"Lets''"}
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
         />
         <VideoRow
            views={"1.4m"}
            subs={"659k"}
            description={"AÇIKLAMA"}
            timestamp={"59 seconds ago"}
            channel={"Emircan"}
            title={"Lets''"}
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
         />
         <VideoRow
            views={"1.4m"}
            subs={"659k"}
            description={"AÇIKLAMA"}
            timestamp={"59 seconds ago"}
            channel={"Emircan"}
            title={"Lets''"}
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
         />
         <VideoRow
            views={"1.4m"}
            subs={"659k"}
            description={"AÇIKLAMA"}
            timestamp={"59 seconds ago"}
            channel={"Emircan"}
            title={"Lets''"}
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
         />
         <VideoRow
            views={"1.4m"}
            subs={"659k"}
            description={"AÇIKLAMA"}
            timestamp={"59 seconds ago"}
            channel={"Emircan"}
            title={"Lets''"}
            image={"https://avatars.githubusercontent.com/u/75789956?v=4"}
         />
      </div>
   )
}

export default SearchPage;
