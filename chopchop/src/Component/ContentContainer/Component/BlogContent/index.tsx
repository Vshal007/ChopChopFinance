import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RapidApiStockNews } from "../../../../api/test";
import { ContainerBox } from "../../styled";
import "./Styles.css";
import { BlogLinkContaniner, StyledTypography } from "./styled";

interface Article {
  article_photo_url: string;
  article_title: string;
  article_url: string;
  post_time_utc: string;
}

const Blog = () => {
  const [news, setStockNews] = useState<Article[] | null>(null);
  useEffect(() => {
    // getNews();
  }, []);
  async function getNews() {
    try {
      const data = await RapidApiStockNews();
      setStockNews(data?.data?.data.news);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <ContainerBox height={"400px"} width={"300px"} scrollable={true}>
        {!news ? (
          <>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
            <div className="shimmerClass"></div>
          </>
        ) : (
          news
            .sort((a, b) => {
              const timeA = new Date(a.post_time_utc);
              const timeB = new Date(b.post_time_utc);
              return timeB.getTime() - timeA.getTime();
            })
            .map((blog: Article, index: number) => {
              const currentTime = new Date();
              const blogTime = new Date(blog.post_time_utc);
              const timeDifference = Math.abs(
                currentTime.getTime() - blogTime.getTime()
              );
              const hoursDifference = Math.floor(
                timeDifference / (1000 * 60 * 60)
              );

              return (
                <BlogLinkContaniner key={index}>
                  <StyledTypography>
                    {blog.article_title.split(" ").slice(0, 14).join(" ")} ...{" "}
                    <Link to={blog.article_url}>read more</Link>
                    <p>
                      {" "}
                      {hoursDifference > 24
                        ? `${Math.round(hoursDifference / 24)} days ago`
                        : `${hoursDifference} hours ago`}
                    </p>
                  </StyledTypography>
                </BlogLinkContaniner>
              );
            })
        )}
      </ContainerBox>
    </>
  );
};

export default Blog;
