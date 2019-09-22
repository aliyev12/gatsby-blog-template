import useFetchMd from "./useFetchMd";
import useFetchContentful from "./useFetchContentful";

export default () => {
  const GATSBY_CONTENT_FROM = process.env.GATSBY_CONTENT_FROM;

  if (GATSBY_CONTENT_FROM === "contentful") {
    return useFetchContentful();
  } else if (GATSBY_CONTENT_FROM === "md") {
    return useFetchMd();
  } else {
    throw new Error(
      '.env received an unknown argument. Make sure to either pass "contentful" or "md" to CONTENT_FROM.'
    );
  }
};
