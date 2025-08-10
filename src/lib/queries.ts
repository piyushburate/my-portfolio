import { gql } from "graphql-request";

export const GET_BLOGS = gql`
  query GetBlogs($first: Int!, $skip: Int!) {
    blogs(orderBy: publishedAt_DESC, first: $first, skip: $skip) {
      title
      slug
      coverImage {
        url
      }
      description
      publishedAt
    }
    blogsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const GET_FEATURED_BLOGS = gql`
  query GetFeaturedBlogs {
    featuredSetting(where: {slug: "main"}) {
      featuredBlogs {
        title
        slug
        coverImage {
          url
        }
        description
        publishedAt
      }
    }
  }
`;

export const GET_LATEST_BLOGS = gql`
  query GetLatestBlogs {
    blogs(orderBy: publishedAt_DESC, first: 5) {
      title
      slug
      coverImage {
        url
      }
      description
      publishedAt
    }
  }
`;

export const GET_SINGLE_BLOG = gql`
  query GetSingleBlog($slug: String!) {
    blog(where: {slug: $slug}) {
      title
      slug
      content {
        raw
        text
      }
      coverImage {
        url
      }
      tags
      description
      publishedAt
    }
  }
`;

export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    featuredSetting(where: {slug: "main"}) {
      featuredProjects {
        title
        slug
        techStack
        coverImage {
          url
        }
        description
        publishedAt
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query ($featuredIds: [String!], $first: Int!, $skip: Int!) {
    projects(
      where: {
        slug_not_in: $featuredIds},
        orderBy: publishedAt_DESC,
        first: $first,
        skip: $skip
      ) {
      title
      slug
      techStack
      coverImage {
        url
      }
      description
      publishedAt
    }
    projectsConnection(where: {slug_not_in: $featuredIds}) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_SINGLE_PROJECT = gql`
  query GetSingleBlog($slug: String!) {
    project(where: {slug: $slug}) {
      title
      slug
      techStack
      content {
        raw
      }
      coverImage {
        url
      }
      description
      sourceCodeUrl
      liveDemoUrl
      publishedAt
    }
  }
`;

export const GET_SIDEBAR_DATA = gql`
  query GetSidebarPageData {
    globalContent(where: {slug: "main"}) {
      firstName
      lastName
      username
      profilePhoto {
        url
      }
    }
  }
`;
export const GET_HOME_PAGE_DATA = gql`
  query GetHomePageData {
    globalContent(where: {slug: "main"}) {
      firstName
      location
      workingMode
      description
    }
  }
`;

export const GET_ABOUT_PAGE_DATA = gql`
  query GetAboutPageData {
    globalContent(where: {slug: "main"}) {
      introduction {
        raw
      }
      resume {
        url
        width
        height
      }
      careerDetails {
        jobTitle
        companyName
        companyDetail
        location
        startDate
        endDate
        jobType
        workMode
        logo {
          url
        }
        responsibilities
      }
      educationDetails {
        schoolName
        degree
        specialization
        duration
        location
        logo {
          url
        }
      }
    }
  }
`;

export const GET_CONTACT_PAGE_DATA = gql`
  query GetContactPageData {
    globalContent(where: {slug: "main"}) {
      email
      linkedIn
      twitter
      instagram
      github
    }
  }
`;