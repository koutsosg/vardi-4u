import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/Video/video"
import Services from "../components/Services/servicesinfo"
/* import PdfReaderFinl from "../components/PdfReader/Modal/Articlesinfo" */
const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title=" Ασφαλιστική Σύμβουλος" />
      <div className="pb-5 text-left">
        <h1 id="intro" className="px-5 text-center py-5 gray">
          Σε καιρούς μεγάλων αλλαγών
        </h1>
        <div className="px-5 gray">
          <p>
            ....όπου η κοινωνία και οι δομές της δοκιμάζεται από απρόβλεπτα
            φυσικά και μη γεγονότα ,κάθε πολύτιμο αγαθό για εμάς γίνεται πιο
            εύθραυστο.
          </p>
          <p>
            Η υγεία μας , η ακεραιότητα της κατοικίας μας ,η εργασία μας, οι
            οικονομίες μας, -κόποι μια ζωής- για να γίνουν αληθινά όσα
            ονειρευτήκαμε…
          </p>
          <p>
            Ζώντας μέσα στο χώρο της ασφάλισης από το 2002 ,τον αγάπησα ,έλαβα
            πολλή γνώση και εμπειρία από τους καλύτερους του είδους και σήμερα
            είμαι η ασφαλιστική σύμβουλος μεγάλου αριθμού συμπολιτών μας και
            επιχειρήσεων.
          </p>
          <p>
            Απολαμβάνω αμέριστη χαρά και ικανοποίηση από τα χαμόγελα των
            ανθρώπων που βιώνουν την υπόσχεση που δώσαμε στο συμβόλαιο τους να
            γίνεται πράξη.
          </p>
          <p>
            Με εμψυχώνουν τα καλά τους λόγια ,οι ευχές τους ,οι αναρτήσεις τους
            στα κοινωνικά δίκτυα.Ξέρουν ότι είμαι πάντα δίπλα τους, αρωγός και
            συνοδοιπόρος τους.
          </p>
          <p>
            Στην ερώτηση γιατί φτιάχνω αυτή τη σελίδα η απάντηση είναι απλή ,ο
            καλύτερος τρόπος ασφάλισης με έμπειρο προσωπικό σύμβουλο είναι τώρα
            για εσάς άμεσα προσβάσιμος,πρακτικός και απόλυτα ασφαλής.
          </p>
        </div>
      </div>
      <Video />
      <Services />
      {/* 
      <PdfReaderFinl /> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
