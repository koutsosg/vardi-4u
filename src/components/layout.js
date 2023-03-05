import * as React from "react"

import OmgSidebar from "./OmgSidebar/sidebar"
import OmgFooter from "./OmgPrefooter/prefooter-info"
import { Button, Header, Icon, Modal, List } from "semantic-ui-react"
import logo from "../images/logo.png"
import overlay from "../images/overlay.png"
import imgback from "../images/backimg.jpg"
import Articles from "../components/PdfReader/articles/articles"
import BackToTop from "../components/Backtotop"
import MessengerCustomerChat from "react-messenger-customer-chat"
function ModalExampleCloseIcon() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      id="modal"
      closeIcon
      open={open}
      trigger={<Button>Περισσότερα...</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="mail" content="Λίγα λόγια για να με γνωρίσετε." />
      <Modal.Content className="px-5">
        {/* <Helmet>
          <title>Λίγα λόγια για να με γνωρίσετε. - Φωτεινή Βαρδή</title>
          <meta
            name="description"
            content="Για εσάς τους ασφαλισμένους μας η δύναμη μας αυτή είναι η δική σας δύναμη στην έμπειρη, υπεύθυνη και αποτελεσματική διαχείριση των συμβολαίων σας ."
          />
          <meta
            name="keywords"
            content="Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet> */}
        <h6>
          Είμαι η <strong>Φωτεινή Βαρδή</strong> διακεκριμένη ασφαλιστική
          σύμβουλος στην Εθνική Ασφαλιστική.
        </h6>
        <p>
          Δραστηριοποιούμαι στην εταιρία από το 2002 και διαθέτω εξειδικευμένη
          εμπειρία στην αποτελεσματική διαχείριση κινδύνων συνάπτοντας συμβόλαια
          για φυσικά και νομικά πρόσωπα σχετικά με τη ζωή , την υγεία, την
          περιουσία, τα θέματα της κληρονομιάς, της αστικής ευθύνης και του
          σύνθετου κλάδου των εταιρικών ασφαλίσεων .
        </p>
        <h6>Αυτό πιστοποιείται από τις διακρίσεις μου όπως</h6>
        <List bulleted>
          <List.Item>
            Τιμήθηκα το 2006 με τον τίτλο της κορυφαίας ασφαλιστικής συμβούλου
            της χρονιάς.
          </List.Item>
          <List.Item>
            Είμαι ισόβιο μέλος κορυφαίων ασφαλιστικών συμβούλων της LIMRA
            INTERNATIONAL (Ευρωπαϊκός εκπαιδευτικός οργανισμός ασφαλιστικών
            συμβούλων) από το 2009.
          </List.Item>
          <List.Item>
            Κατέχω στην εταιρία από τα μεγαλύτερα και μακροβιότερα χαρτοφυλάκια
            με τους υψηλότερους δείκτες διατήρησης μακροχρόνιας σχέσης με τους
            ασφαλισμένους μου με γνώμονα τη συνεχή αναβάθμιση του γνωστικού μου
            αντικειμένου, την επικοινωνία και την άριστη εξυπηρέτηση τους .
          </List.Item>
        </List>
        <p>
          Είναι επίσης σημαντικό ότι διαθέτω δίπλα μου συνεργάτες με τους
          οποίους ηγούμαστε σήμερα στην ελληνική ασφαλιστική αγορά βραβευόμενοι
          ως το ποιοτικότερο και παραγωγικότερο γραφείο πανελλαδικά της Εθνικής
          Ασφαλιστικής, το Γραφείο Σπ Τότολου .
        </p>
        <p>
          Ανήκουμε δε στη δομή της Επιθεώρησης του κ Γ.Φουφόπουλου η οποία
          βραβεύεται τα τελευταία 17 συναπτά έτη ως η ΠΡΩΤΗ της ΠΡΩΤΗΣ εταιρίας
          στο χώρο μας και η οποία αριθμεί 100.000 ασφαλισμένους και 60.000.000
          τζίρο για το 2020.
        </p>
        <p>
          Για εσάς τους ασφαλισμένους μας η δύναμη μας αυτή είναι η δική σας
          δύναμη στην έμπειρη, υπεύθυνη και αποτελεσματική διαχείριση των
          συμβολαίων σας .
        </p>
        <p>
          Θα χαρώ να βρείτε ωφέλιμη την πρόταση που μελέτησα για εσάς και να
          συνεργαστούμε.
        </p>
        <p>Φιλικά</p>
        <p>Φωτεινή Βαρδή</p>
      </Modal.Content>
      <Modal.Actions>
        <a
          className="btn btn-secondary"
          href="tel:+306936997712"
          title="Καλέστε με τώρα"
        >
          <span class="act">Επικοινωνία</span>
          <span class="hov b">6936997712</span>
        </a>

        <Button color="gray" onClick={() => setOpen(false)}>
          <Icon name="checkmark" color="black" />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

const website = {
  name: "Φωτεινή Βαρδή",
  url: "/",
  h1: (
    /* "Φωτεινή Βαρδή" */ <a
      className="name"
      href="tel:+306936997712"
      title="Καλέστε με τώρα"
    >
      <span className="nameicon ">
        <Icon link name="phone square" size="large" />
      </span>
      <span className="name">Φωτεινή Βαρδή</span>
    </a>
  ),
  h2: "Διακεκριμένη Ασφαλιστική Σύμβουλος",
  p: "στην Εθνική Ασφαλιστική. Δραστηριοποιούμαι στην εταιρία από το 2002 και διαθέτω εξειδικευμένη εμπειρία στην αποτελεσματική διαχείριση κινδύνων...",
  quicklink: "",
  quicklinkt: "",
  modal: <ModalExampleCloseIcon />,
  frame: (
    <iframe
      title="Fb Page"
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFoteini.Vardi&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=2350696075242646"
      width="280"
      height="70"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  ),
}

const links = [
  { to: "/", text: "Αρχική" },

  /* {
      to: "/about",
      text: "ΥΠΗΡΕΣΙΕΣ ",
      submenu: [
        { text: "ΦΥΣΙΚΑ ΠΡΟΣΩΠΑ", to: "/φυσικά-πρόσωπα" },
        { text: "ΝΟΜΙΚΑ ΠΡΟΣΩΠΑ ", to: "/νομικά-πρόσωπα" },
      ],
    }, */
  { to: "/#services", text: "Υπηρεσίες" },
  { to: "/#didyouknow", text: "Ήξερες Οτι..." },
  {
    to: "/about",
    text: "Χρήσιμες Ερωτήσεις",
    submenu: [
      { text: "Υγεία", to: "/xrisimes-erwtisis/faq-ygeia" },
      { text: "Σύνταξη", to: "/xrisimes-erwtisis/faq-suntaksh" },
    ],
  },
]
const slinks = [
  {
    icon: "facebook",
    url: "https://www.facebook.com/Foteini.Vardi/",
  },
  /*  {
      icon: "instagram",
      url: "/",
    }, */
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/fotini-vardi-ba643a27",
  },
  {
    icon: "phone square",
    url: "tel:6936997712",
  },
  {
    icon: "whatsapp square",
    url: "https://wa.me/306936997712",
  },

  {
    icon: "at",
    url: "mailto:fotvardi@gmail.com",
  },
]

const classes = {
  headermain: "omg-sidebar_layout",
  headerin: "inner",
  avatarlink: "image avatar",
  avatarlogo: "",
  h1: "text-light h4",
  h2: "text-light h6",
  p: "h6 text-light",
  quicklink: "text-light App-link",
  footer: "innerfoot",
  sicon: "gray",
  siconl: "white",
  circular: true /* true / false */,
  copyright: "text-white",
  copyrightl: "",
  children:
    "d-flex flex-column h-100 omg-layout_main text-center bg-light omg-layout_main_pad omg-layout_main_1280pad omg-layout_main_980pad omg-layout_main_736pad",
  menu: "w-100 m-0 ",
  menuitem: "px-4",
  menulink: "text-light justify-content-center",
  dropdown: "text-light  px-4 ",
  dropdownmenu: "w-100 omg-layout_dropitem justify-content-end ",
  droplink: "",
  dropitem: "",
  contactli: "gray",
}

const Layout = ({ children }) => {
  return (
    <>
      <OmgSidebar
        logo={logo}
        overlay={overlay}
        imgback={imgback}
        website={website}
        classes={classes}
        links={links}
        slinks={slinks}
      >
        {children}
        <Articles />
        <OmgFooter classes={classes} slinks={slinks} />
      </OmgSidebar>
      <MessengerCustomerChat pageId="306526283400988" />
      {/* <MessengerCustomerChat
              title="Facebook Messenger Customer Chat"
              pageId="306526283400988"
            /> */}
      <BackToTop />
    </>
  )
}
export default Layout
