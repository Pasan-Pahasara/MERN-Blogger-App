import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import images from "../../constants/Images/images";
import { Link } from "react-router-dom";
import SuggestPosts from "./container/SuggestedPosts/SuggestPosts";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: `/blog/1` },
];

// start added tempory data to the posts
const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
];
// end added tempory data to the posts

// start tempory tag data
const tagsData = [
  "UI UX",
  "Theams",
  "React",
  "React Native",
  "Tailwind CSS",
  "Education",
];
// end tempory tag data

const ArticleDetails = () => {
  return (
    <div>
      <MainLayout>
        {/* start articleDetails section */}
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
          <article className="flex-1 ">
            <BreadCrumbs data={breadCrumbsData} />
            {/* image start  */}
            <img
              className="rounded-xl w-full"
              src={images.Post1Image}
              alt="ui ux"
            />
            {/* image end  */}
            {/* start discription */}
            <Link
              to={"/blog?category=selectedCategory"}
              className="text-purplu-600 text-sm font-Ubuntu inline-block mt-4"
            >
              EDUCATION
            </Link>
            <h1 className="text-xl font-medium font-Ubuntu mt-4 text-dark-hard">
              Help ui ux engineer get better education
            </h1>
            <div className="mt-4 text-dark-soft">
              <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit doloremque totam voluptas possimus recusandae?
                Quia, similique! Fuga, laboriosam! Iure odit hic in dolore animi
                repellat praesentium quod vero cupiditate adipisci?
              </p>
            </div>
            {/* end discription */}
          </article>
          {/* start suggested posts */}
          <SuggestPosts
            header={"Latest Articles"}
            posts={postsData}
            tags={tagsData}
          />
          {/* end suggested posts */}
        </section>
        {/* end articleDetails section */}
      </MainLayout>
    </div>
  );
};

export default ArticleDetails;
