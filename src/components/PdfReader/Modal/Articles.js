import React, { useState, useEffect } from "react";
import { Modal, Card } from "semantic-ui-react";

import PdfReader from "../PdfReader";
/* import { useParams } from "react-router-dom"; */
const Articles = ({ articles = {}, color, classes = {} }) => {
  const [open, setOpen] = React.useState(false);
  /*   const { arthra } = useParams(),
    [active_alias, setAllias] = useState(arthra),
    closeModal = () => {
      setAllias("!");
    },
    openModal = (name) => {
      setAllias(name || "!");
    };
  useEffect(() => {
    setAllias(arthra);
  }, [arthra]);
   */
  return (
    <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
      <div className={`${classes.container}`}>
        <h3 className={`${classes.title}`}>ΗΞΕΡΕΣ ΟΤΙ...</h3>

        <div className={`${classes.row}`}>
          {articles.map((article) => (
            <div className={`${classes.col}`}>
              <div className="">
                <Modal
                  basic
                  open={open}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  /*       onClose={closeModal} */
                  /*   open={article.alias || "" === active_alias} */
                  closeIcon
                  trigger={
                    <Card
                      className="text-left"
                      link
                      header={article.header}
                      meta={article.meta}
                      description={[`${article.description}`].join("")}
                      /*   onClick={() => {
                        openModal(article.alias || "");
                      }} */
                    />
                  }
                >
                  <Modal.Content className="pdf-modal-content text-center">
                    {article.modinside}
                    <PdfReader file={article.file} />
                    Πηγη:
                    <a href={article.link} aria-label={article.arialabel}>
                      {article.source}
                    </a>
                  </Modal.Content>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
