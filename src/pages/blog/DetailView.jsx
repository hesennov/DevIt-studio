import Blogphoto from "../../assets/blog-details1.jpg";
import Blogphoto1 from "../../assets/blog-big-4.jpg";
import Blogphoto2 from "../../assets/blog-sm-5.jpg";
import { useState } from "react";
import Container from "../../components/lib/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faUser,
  faClock,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const DetailView = () => {
  const [state] = useState({
    web: 26,
    development: 15,
    branding: 20,
    motion: 18,
    uiux: 30,
    graphic: 99,
    user: "Alextina",
    clock: "MARCH.23.2003",
    comment: 21,
    eye: 1.426,
  });

  return (
    <Container>
      <div className="container flex my-10 mx-auto max-sm:flex-col max-sm:my-0 max-sm:mx-auto max-sm:px-4 sm:flex-col  md:flex-row justify-between mt-14 pt-4 min-h-screen">
        <div className="container max-sm:w-full main w-4/6">
          <img
            src={Blogphoto}
            alt=""
            className="relative w-full max-sm:w-full mb-10 border rounded"
          />
          <FontAwesomeIcon icon="fa-solid fa-check-square" />
          <div className="flex sm:flex-wrap sm:gap-x-12 sm:gap-y-2 max-sm:flex-col mb-10 ">
            <div className="flex justify-between md:justify-between sm:gap-20 max-sm:gap-12">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} className="w-3.5 h-3.5" />
                <span>{state.user}</span>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                <span>{state.clock}</span>
              </div>
            </div>
            <div className="flex justify-between sm:gap-20 max-sm:gap-12 ">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faComments} className="w-3.5 h-3.5" />
                <span>{state.comment} comments</span>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faEye} className="w-3.5 h-3.5" />
                <span>{state.eye} VIEWS</span>
              </div>
            </div>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold my-5 ">
            How To Create A Vanilla JavaScript Gantt Chart: Adding Task Editing
            Features
          </h3>
          <div className="content">
            <p className="my-9">
              One in four people in the world will be affected by mental or
              neurological disorders at some point in their lives, says the
              World Health Organization. Still, we spend more time brushing our
              teeth than taking care of our mental health, said Guy Winch in his
              TED talk.
            </p>
            <p className="my-9">
              One in four people in the world will be affected by mental or
              neurological disorders at some point in their lives, says the
              World Health Organization. Still, we spend more time brushing our
              teeth than taking care of our mental health, said Guy Winch in his
              TED talk.
            </p>
            <p className="my-9 text-#8A90A2">
              One in four people in the world will be affected by mental or
              neurological disorders at some point in their lives, says the
              World Health Organization. Still, we spend more time brushing our
              teeth than taking care of our mental health, said Guy Winch in his
              TED talk.
            </p>
          </div>
          <div className="imgs flex gap-20 max-sm:gap-7 mb-5 mt-12 max-xl:flex-col justify-between">
            <img
              className="w-full max-xl:w-full border rounded"
              src={Blogphoto2}
              alt=""
            />
            <img
              className="w-full max-xl:w-full border rounded"
              src={Blogphoto1}
              alt=""
            />
          </div>
          <div className="buttons-container flex justify-between max-sm:flex-col">
            <div className="buttons flex flex-wrap  max-sm:mb-8">
              <h1 className={"mx-4"}>Tags</h1>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-4 border hover:border-transparent rounded mx-2">
                BUSINESS
              </button>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-3 border hover:border-transparent rounded mx-2">
                DESIGN
              </button>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-3 border hover:border-transparent rounded mx-2">
                APPS
              </button>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-3 border hover:border-transparent rounded mx-2">
                DATA
              </button>
            </div>
          </div>
        </div>
        <div className="leftbar w-3/6 sm:w-3/6 md:w-1/6 lg:w-1/6 flex flex-col sm:flex-row md:flex-col lg:mx-auto">
          <div className="recent-post flex flex-col">
            <h1 className="mb-4">Recent Posts</h1>
            <div className="flex max-w-xs mb-3 max-sm:h-28">
              <img
                className="rounded-xl max-sm:w-32 "
                src={Blogphoto2}
                alt=""
              />
              <div className="m-2">
                <p className="text-xs">FEBRUARY.20.2022</p>
                <a href="#">
                  <h3> How to add a count up animated the...</h3>
                </a>
              </div>
            </div>
            <div className="flex max-w-xs mb-3 max-sm:h-28">
              <img className="rounded-xl max-sm:w-32 " src={Blogphoto} alt="" />
              <div className="m-2">
                <p className="text-xs">FEBRUARY.20.2022</p>
                <a href="#">
                  <h3> When and how to use Freelancers In ...</h3>
                </a>
              </div>
            </div>
            <div className="flex max-w-xs  max-sm:h-28">
              <img
                className="rounded-xl max-sm:w-32 "
                src={Blogphoto1}
                alt=""
              />
              <div className="m-2">
                <p className="text-xs">MARCH.20.2022</p>
                <a href="#">
                  <h3> How to grow your business with coll...</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailView;
