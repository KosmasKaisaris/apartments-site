export type Locale = "en" | "el";

export const LOCALE_COOKIE = "site_locale";

const DICT = {
  en: {
    header: {
      title: "Luxery Apartments",
      parga: "Parga",
      nafplio: "Nafplio",
    },
    home: {
      kicker: "Luxury stays in Greece",
      title: "Choose your apartment",
      subtitle:
        "Two beautiful apartments with photos, amenities, and direct contact. No booking platform — reach us instantly.",
      info1Title: "Direct contact",
      info1Desc:
        "Call or email us to check availability, ask questions, and confirm your stay.",
      info2Title: "What you’ll find",
      info2Desc:
        "Fast Wi‑Fi, comfort-focused amenities, and carefully photographed spaces.",
      info3Title: "Quick decision",
      info3Desc:
        "Open an apartment page to see highlights, amenities, and the full gallery.",
    },
    apartment: {
      email: "Email",
      call: "Call",
      whyLoveEyebrow: "Why you’ll love it",
      highlightsTitle: "Highlights",
      highlightsDesc: "A quick overview of what makes this apartment special.",
      comfortEyebrow: "Comfort",
      amenitiesTitle: "Amenities",
      amenitiesDesc: "Everything you need for a smooth, easy stay.",
      photosEyebrow: "Photos",
      galleryTitle: "Gallery",
      galleryDesc: "Tap a photo to view full screen. Use arrows to browse.",
    },
    footer: {
      directBooking: "Direct booking — contact us anytime.",
      about:
        "Explore each apartment’s highlights, amenities, and gallery photos. When you’re ready, call or email us to check availability.",
      contact: "Contact",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      phoneSoon: "Phone available soon",
      emailSoon: "Email available soon",
    },
  },
  el: {
    header: {
      title: "Luxery Apartments",
      parga: "Πάργα",
      nafplio: "Ναύπλιο",
    },
    home: {
      kicker: "Πολυτελείς διαμονές στην Ελλάδα",
      title: "Διάλεξε το κατάλυμά σου",
      subtitle:
        "Δύο υπέροχα καταλύματα με φωτογραφίες, παροχές και άμεση επικοινωνία. Χωρίς πλατφόρμες — επικοινώνησε απευθείας.",
      info1Title: "Άμεση επικοινωνία",
      info1Desc:
        "Κάλεσέ μας ή στείλε email για διαθεσιμότητα, απορίες και επιβεβαίωση κράτησης.",
      info2Title: "Τι θα βρεις",
      info2Desc:
        "Γρήγορο Wi‑Fi, προσεγμένες παροχές και φωτογραφίες που δείχνουν τον χώρο όπως είναι.",
      info3Title: "Γρήγορη επιλογή",
      info3Desc:
        "Άνοιξε τη σελίδα του καταλύματος για highlights, παροχές και πλήρη gallery.",
    },
    apartment: {
      email: "Email",
      call: "Κλήση",
      whyLoveEyebrow: "Γιατί θα σου αρέσει",
      highlightsTitle: "Highlights",
      highlightsDesc:
        "Μια γρήγορη εικόνα για το τι κάνει το κατάλυμα ξεχωριστό.",
      comfortEyebrow: "Άνεση",
      amenitiesTitle: "Παροχές",
      amenitiesDesc: "Ό,τι χρειάζεσαι για μια άνετη και εύκολη διαμονή.",
      photosEyebrow: "Φωτογραφίες",
      galleryTitle: "Gallery",
      galleryDesc:
        "Πάτησε σε φωτογραφία για πλήρη οθόνη. Χρησιμοποίησε τα βελάκια για περιήγηση.",
    },
    footer: {
      directBooking: "Απευθείας κράτηση — επικοινώνησε οποιαδήποτε στιγμή.",
      about:
        "Δες highlights, παροχές και φωτογραφίες. Όταν είσαι έτοιμος/η, κάλεσε ή στείλε email για διαθεσιμότητα.",
      quickInfo: "Πληροφορίες",
      q1: "Γρήγορο Wi‑Fi",
      q2: "Παροχές άνεσης",
      q3: "Photo galleries",
      contact: "Επικοινωνία",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      privacy: "Απόρρητο",
      terms: "Όροι",
      phoneSoon: "Σύντομα διαθέσιμο τηλέφωνο",
      emailSoon: "Σύντομα διαθέσιμο email",
    },
  },
} as const;

type Dict = typeof DICT.en;

export function t<L extends Locale>(locale: L): Dict {
  return (DICT[locale] ?? DICT.en) as Dict;
}
