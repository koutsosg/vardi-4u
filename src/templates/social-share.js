import React from "react"
import "semantic-ui-css/semantic.min.css"
import { Icon } from "semantic-ui-react"
const shares = [
  {
    icon: "facebook",
    url: "https://www.facebook.com/Foteini.Vardi/",
    /*     circular: true, */

    color: "blue",
  },

  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/fotini-vardi-ba643a27",
    /* circular: true, */

    color: "blue",
  },
]

const Share = () => {
  return (
    <div className="flex">
      <>Κοινοποίηση: </>
      {shares.map(share => (
        <a
          className={share.sicon}
          href={share.url}
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            className={share.siconl}
            circular={share.circular}
            name={share.icon}
            size="big"
            color={share.blue}
          />
        </a>
      ))}
    </div>
  )
}
export default Share
