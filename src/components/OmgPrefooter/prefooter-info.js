import React from "react";
import { OmgSocialSmall } from "omgad-component/lib";
import { List } from "semantic-ui-react";
import { Link } from "gatsby";

const Prefooter = ({ slinks, classes = {} }) => {
  return (
    <div className=" p-4">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 col-lg-4 pt-3">
            <h3 lang="en" className="h5 text-left">
              Πληροφορίες
            </h3>

            <List className={`${classes.contact}  text-left`} divided relaxed>
              <List.Item
                className={`${classes.contactli}`}
                content="Φωτεινή Βαρδή"
              />
              <List.Item
                className={`${classes.contactli}`}
                content=" Διακεκριμένη Ασφαλιστική Σύμβουλος"
              />
              <List.Item
                className={`${classes.contactli}`}
                content="Εθνική Ασφαλιστική Α.Ε.Ε.Γ.Α."
              />
              <List.Item
                className={`${classes.contactli}`}
                content={<OmgSocialSmall slinks={slinks} classes={classes} />}
              />
            </List>
          </div>
          <div className="col-md-6 col-lg-4 pt-3">
            <h3 className="h5 text-left ">Επικοινωνία</h3>
            <List className={`${classes.contact}  text-left`} divided relaxed>
              <List.Item
                icon="map marker alternate"
                className={`${classes.contactli}`}
                content=" Λ.Συγγρου 135 & Κράτητος 2 (3ος)"
              />
              <List.Item
                className={`${classes.contactli}`}
                content="Ν.Σμυρνη 17121"
              />

              <List.Item
                icon="phone square"
                className={`${classes.contactli}`}
                content={<a href="tel:6936997712"> 6936997712</a>}
              />

              <List.Item
                icon="mail"
                className={`${classes.contactli}`}
                content={
                  <a href="mailto:fotvardi@gmail.com"> fotvardi@gmail.com</a>
                }
              />
            </List>
          </div>
          <div className="col-md-12 col-lg-4 pt-3">
            <h3 className="h5 text-left ">Χρήσιμα</h3>
            <div className="row mt-3">
              <div className="col-6">
                <List
                  className={`${classes.contact} text-left`}
                  divided
                  relaxed
                >
                  <List.Item
                    className={`${classes.contactli}`}
                    content={<Link to="/">Αρχική</Link>}
                  />
                  <List.Item
                    className={`${classes.contactli}`}
                    content={<a href="/#services">Υπηρεσίες</a>}
                  />
                  {/*    <List.Item
                    className={`${classes.contactli}`}
                    content={<a href="/">Αρχική</a>}
                  /> */}
                </List>
              </div>{" "}
              <div className="col-6">
                <List
                  className={`${classes.contact}  text-left`}
                  divided
                  relaxed
                >
                  <List.Item
                    className={`${classes.contactli}`}
                    content={<Link to="/ερωτήσεις-υγεία">FAQs Υγεία</Link>}
                  />

                  <List.Item
                    className={`${classes.contactli}`}
                    content={<Link to="/ερωτήσεις-σύνταξη">FAQs Σύνταξη</Link>}
                  />

                  {/*  <List.Item
                    className={`${classes.contactli}`}
                    content={<a href="/">Αρχική</a>}
                  /> */}
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prefooter;
