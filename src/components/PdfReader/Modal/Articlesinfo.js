import React from "react"
import Articles from "../components/PdfReader/Modal/Articles"
import { Helmet } from "react-helmet"

const bcolour = "white"
const classes = {
  maindiv: "p-5",
  container: "",
  title: "gray",
  subtitle: "",
  span: "omg-lines",
  row: "row",
  col: " p-2 mx-auto",
  coldiv: "p-2",
  image: "",
  header: "",
  parag: "p-3 ",
}

const articles = [
  {
    alias: "rali-sta-ependitika-proioda",
    header: "Ασφαλιστικές εταιρείες: Ράλι στα επενδυτικά προϊόντα",
    meta: "Στέφανος Kοτζαμάνης",
    description: "",
    file: "/static/8ce5334f49bfa00abe01ade648c151b2/sintaxiodotikozitima.pdf",

    /*  modinside: (
      <>
        <Helmet>
          <title>Ράλι στα επενδυτικά προϊόντα</title>
          <meta name="description" content="Ράλι στα επενδυτικά προϊόντα" />
          <meta
            name="keywords"
            content="Ράλι στα επενδυτικά προϊόντα, μικτά χαρτοφυλάκια, επενδύσεις, αύξηση καταθέσεων, ζημιάς ανά ηλικία, Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
          <meta
            property="og:url"
            content="https://fvardi-4u.gr/rali-sta-ependitika-proioda"
          />
          <meta property="og:type" content="article" />
          <meta property="article:author" content="Στέφανος Kοτζαμάνης" />

          <meta
            property="og:description"
            content="Ιδιαίτερα ενδιαφέρον στοιχείο για την ασφαλιστική βιομηχανία είναι πως τα επενδυτικά προϊόντα του κλάδου ζωής ανεβάζουν τους ρυθμούς αύξησης της παραγωγής τους μήνα..."
          />
          <meta
            property="og:image"
            content="https://fvardi-4u.gr/logo200.png"
          />
        </Helmet>
      </>
    ), */
    link: "https://www.euro2day.gr/news/enterprises/article/2099993/asfalistikes-etaireies-rali-paragoghs-sta-ependyti.html",
    source: "euro2day.gr",
    arialabel: "Σύνδεσμος για euro2day.gr",
  },
  /* {
    alias: "afksanomeno-endiaferon-gia-unit-link",
    header: "Όλο και αυξανόμενο το ενδιαφέρον για Unit Linked",
    meta: "Βάιος Κρόκος",
    description: "",
    file: "/assets/Documents/Unit Linked.pdf",

    modinside: (
      <>
        <Helmet>
          <title>Όλο και αυξανόμενο το ενδιαφέρον για Unit Linked</title>
          <meta
            name="description"
            content="Όλο και αυξανόμενο το ενδιαφέρον για Unit Linked"
          />
          <meta
            name="keywords"
            content="Unit Linked,  αύξηση καταθέσεων, ζημιάς ανά ηλικία, Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet>
      </>
    ),
    link: "https://insuranceworld.gr/102223/eidiseis/asfalistikes-eidiseis/olo-kai-ayxanomeno-to-endiaferon-gia-unit-linked/?utm_source=email&utm_medium=social-media&utm_campaign=addtoany",
    source: "Insuranceworld",
    arialabel: "Σύνδεσμος για Insuranceworld",
  },
  {
    alias: "suhnotita-emfanisis-zimias-ana-ilikia",
    header: "Διάγραμμα Συχνότητας Εμφάνισης Ζημιάς Ανά Ηλικία.",
    meta: "ΕΑΕΕ",
    description: "",
    file: "/assets/Documents/diagram.pdf",

    modinside: (
      <>
        <Helmet>
          <title>Συχνότητα Εμφάνισης Ζημιάς Ανά Ηλικία</title>
          <meta
            name="description"
            content="Συχνότητα εμφάνισης ζημιάς ανά ηλικία "
          />
          <meta
            name="keywords"
            content="ζημιάς ανά ηλικία, Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet>
      </>
    ),
    link: "http://www.eaee.gr/",
    source: "ΕΑΕΕ",
    arialabel: "Σύνδεσμος για Ένωση Ασφαλιστικών Εταιριών Ελλάδος",
  },
  {
    alias: "arxes-leitourgias-asfaliseon",
    header: "Αρχές Λειτουργίας Ασφαλίσεων",
    meta: "ΕΑΕΕ",
    description: "",
    file: "/assets/Documents/1asfalistro.pdf",

    modinside: (
      <>
        <Helmet>
          <title>
            Αρχές Λειτουργίας Ασφαλίσεων Καθορισμός Πρώτου Ασφαλίστρου
          </title>
          <meta
            name="description"
            content="Αρχές Λειτουργίας Καθορισμός Πρώτου Ασφαλίστρου"
          />
          <meta
            name="keywords"
            content="Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet>
      </>
    ),
    link: "http://www.eaee.gr/",
    source: "ΕΑΕΕ",
    arialabel: "Σύνδεσμος για Ένωση Ασφαλιστικών Εταιριών Ελλάδος",
  },
  {
    alias: "to-doro-tis-makrozoias",
    header: "Το Δώρο Της Μακροζωίας Και Ποιοι Θα Το... Απολαύσουν",
    meta: "Ζαχαρίας Καλαϊτζάκης,",
    description: "",
    file: "/assets/Documents/kalaitzakis.pdf",

    modinside: (
      <>
        <Helmet>
          <title>Το Δώρο Της Μακροζωίας Και Ποιοι Θα Το... Απολαύσουν</title>
          <meta
            name="description"
            content="Το Δώρο Της Μακροζωίας Και Ποιοι Θα Το... Απολαύσουν του  Ζαχαρία Καλαϊτζάκη"
          />
          <meta
            name="keywords"
            content="Ζαχαρίας Καλαϊτζάκης, Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet>
      </>
    ),
    link: "https://www.euro2day.gr/specials/opinions/article/1646017/to-doro-ths-makrozoias-kai-poioi-tha-to-apolaysoyn.html",
    source: "https://www.euro2day.gr/",
    arialabel: "Σύνδεσμος για euro2day.gr",
  },
  {
    alias: "politika-adieksoda-sydaksiodotikoy",
    header: "Τα Πολιτικά Αδιέξοδα του Συνταξιοδοτικού Ζήτηματος",
    meta: "Nextdeal.gr",
    description: "",
    file: "/assets/Documents/sintaxiodotiko zitima.pdf",

    modinside: (
      <>
        <Helmet>
          <title>Τα Πολιτικά Αδιέξοδα του Συνταξιοδοτικού Ζήτηματος</title>
          <meta
            name="description"
            content="Χριστόφορος Σαρδελής: Τα μαθηματικά δείχνουν τα πολιτικά αδιέξοδα του συνταξιοδοτικού - Μια ομιλία που θα συζητηθεί"
          />
          <meta
            name="keywords"
            content="Nextdeal.gr, Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet>
      </>
    ),
    link: "https://www.nextdeal.gr/epikairotita/asfalistika-nea/idiotiki-asfalisi/78705/hristoforos-sardelis-ta-mathimatika-deihnoyn-ta",
    source: "nextdeal.gr",
    arialabel: "Σύνδεσμος για nextdeal.gr",
  }, */
  /* {
    header: "Titlos",
    meta: "author",
    description: "perigrafh",
    file: "/assets/Documents/1asfalistro.pdf",

    modinside: (
      <>
        <Helmet>
          <title>Υπηρεσίες - Υγεία</title>
          <meta
            name="description"
            content="πειδή λοιπόν η υγεία μας είναι η πρώτη προτεραιότητα, εμπιστευτείτε την στην πρώτη ασφαλιστική, την Εθνική Ασφαλιστική. "
          />
          <meta
            name="keywords"
            content="Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή, Συνταξιοδοτικό Πρόγραμμα, Συνταξη, Γ.Φουφόπουλου"
          />
        </Helmet>
      </>
    ),
    link: "https://www.ethniki-asfalistiki.gr/defaultMRB.aspx?Page=health",
    source: "eeaa",
    arialabel: "συνδεσμοσ για εααε",
  }, */
]
const Table = () => {
  return (
    <div id="services2">
      <Articles color={bcolour} articles={articles} classes={classes} />
    </div>
  )
}
export default Table
