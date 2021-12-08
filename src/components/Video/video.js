import * as React from "react";
import { Embed } from "semantic-ui-react";
import ytcover from "../../images/eeae.jpg";

const Video = () => {
  return (
    <div className="p-5">
      <Embed
        autoplay={false}
        brandedUI
        color="white"
        hd={false}
        id="JqTNZ2zxu3M"
        placeholder={ytcover}
        alt="Ένωση Aσφαλιστικών Eταιριών"
        source="youtube"
      />
    </div>
  );
};
export default Video;
