import React from "react";
import { Image } from "semantic-ui-react";

import { Header, Modal, Button } from "semantic-ui-react";
const Services = ({ services = {}, info = {}, color, classes = {} }) => {
  return (
    <div style={{ backgroundColor: color }} className={`${classes.maindiv}`}>
      <div className={`${classes.container}`}>
        <h3 className={`${classes.title}`}>ΥΠΗΡΕΣΙΕΣ</h3>
        <div className={`${classes.row}`}>
          {services.map((service) => (
            <div className={`${classes.col}`}>
              <div className="border">
                <Image src={service.imag} alt={service.alt} />
                <hr></hr>
                <h3>{service.title}</h3>
                <hr></hr>
                {service.modout}

                <Modal closeIcon trigger={<Button>Περισσότερα</Button>}>
                  <Header content={service.modtitle} icon={service.modicon} />
                  <Modal.Content>
                    {service.modinside}
                    <a
                      href={service.link}
                      aria-label="Σύνδεσμος για πηγή κειμένου απο τη σελίδα της Εθνικής Ασφαλιστικής"
                    >
                      Πηγή απο τη Σελίδα τής Εθνικής Ασφαλιστικής
                    </a>
                  </Modal.Content>
                  <Modal.Actions>
                    {/*         <a
                      aria-label="Πατήστε το κουμπί για να με καλέσετε"
                      title="Καλέστε με τώρα"
                      className="btn btn-secondary"
                      href="tel:6987556787"
                      role="button"
                    >
                      Επικοινωνία
                    </a> */}
                    <a
                      className="btn btn-secondary"
                      href="tel:+306936997712"
                      title="Καλέστε με τώρα"
                    >
                      <span class="act">Επικοινωνία</span>
                      <span class="hov b">6936997712</span>
                    </a>
                  </Modal.Actions>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
