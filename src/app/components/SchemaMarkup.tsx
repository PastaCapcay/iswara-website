export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Iswara",
    "url": "https://iswara.com",
    "logo": "https://iswara.com/logo.png",
    "description": "Produsen kopi dan vanili premium dari lereng Gunung Telomoyo. Produk berkualitas tinggi dengan proses budidaya ramah lingkungan.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dusun Kendal Duwur RT 2 RW 2",
      "addressLocality": "Wirogomo",
      "addressRegion": "Banyubiru",
      "addressCountry": "ID",
      "postalCode": "50664"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-822-2139-2314",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://facebook.com/iswara",
      "https://instagram.com/iswara"
    ],
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Kopi Telomoyo",
          "description": "Kopi premium dari lereng Gunung Telomoyo",
          "image": "https://iswara.com/gambar/kopi-closeup.jpg"
        },
        "price": "85000",
        "priceCurrency": "IDR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Vanili Telomoyo",
          "description": "Vanili premium dari lereng Gunung Telomoyo",
          "image": "https://iswara.com/gambar/vanili-kering.jpg"
        },
        "price": "120000",
        "priceCurrency": "IDR"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 