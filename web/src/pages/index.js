import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './index.css';
import HeroContent from '../components/hero-content';
import HeroImage from '../components/hero-image';
import HeroIcons from '../components/hero-icons';
import { graphql } from 'gatsby';

export const query = graphql`
fragment SanityImage on SanityMainImage {
  crop {
    _key
    _type
    top
    bottom
    left
    right
  }
  hotspot {
    _key
    _type
    x
    y
    height
    width
  }
  asset {
    _id
  }
}

query IndexPageQuery {
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    title
    description
    keywords
  }
  posts: allSanityPost(
    limit: 6
    sort: { fields: [publishedAt], order: DESC }
    filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
  ) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          ...SanityImage
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
}
`;

const IndexPage = (props) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`andrew hill`, `portfolio`, `web developer`, `freelance`]}
    />
    <section className="hero">
      <HeroContent />
      <HeroImage />
    </section>
  </Layout>
);

export default IndexPage;