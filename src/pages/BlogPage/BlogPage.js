import React, { useEffect, useState } from "react";
import LogoComponent from "../../components/LogoComponent";
import SocialIcons from "../../components/SocialIcons";
import PowerButton from "../../components/PowerButton";

import { Blogs } from "../../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../../components/Anchor";
import BigTitle from "../../components/BigTitle";
import { MainContainer, Container, Center, Grid, container } from "./styles";

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
