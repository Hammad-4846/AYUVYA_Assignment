import React from "react";
import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import {motion} from "framer-motion"

import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

import Star from "@/Components/Star";

function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);

  const handleChangeUnLike = () => {
    setUnlike(true);
    setLike(false);
  };

  const handleChangeLike = () => {
    setLike(true);
    setUnlike(false);
  };

  return (
    <div className="app__container">
      <div className="body__section">
        <button onClick={() => setModalOpen(true)} className="btn">
          Review A Product
        </button>

        <AnimatePresence>
          {modalOpen && (
            <motion.div initial = {{y:"-100vh"}} animate = {{y:0}} exit = {{y: "-100vh"}} className="Modal">
              <div className="Modal__body">
                <div className="icon">
                  <RxCross1 onClick = {() => setModalOpen(false)}/>
                </div>

                <div className="Modal__section">
                  <h3 className="heading">Leave a Review</h3>

                  <div className="rating__component">
                    <Star
                      title={"Safety"}
                      description={"We will Ensure Safety For you"}
                    />

                    <Star
                      title={"Communication"}
                      description={"We will Contact to solve your issues"}
                    />
                  </div>

                  <div className="like__component">
                    <h2>Would you recommend Trausti ?</h2>
                    <p>Help Other to Chose What's Right for them.</p>

                    <div className="icons">
                      <div className="unlike flex" onClick={handleChangeUnLike}>
                        {unlike ? <FaThumbsDown  className= "clr"/> : <FaRegThumbsDown />}
                        <p>No</p>
                      </div>
                      <div className="like flex" onClick={handleChangeLike}>
                        {like ? <FaThumbsUp className = "clr" /> : <FaRegThumbsUp />}
                        <p>Yes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default index;
