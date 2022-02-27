import React, { useContext } from "react"
import Post from "./Post"
import WritingSvgHeader from "./svgComponent/WritingSvgHeader"


const Writing = ({ allWpPost: { nodes } }) => {

  return (
    <div>
      <div className="writing">
        <div className="writing__header">
          {/* <img src={headerWriting} /> */}
          <WritingSvgHeader />
          <h3> Recent Posts </h3>
        </div>

        <div className="writing__body">
          {nodes.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Writing
