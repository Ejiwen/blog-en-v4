import React, { useContext } from "react"
import Post from "./Post"
import headerWriting from "../../static/images/writingBg.svg"
import ThemeContext from "./ThemeContext";

const Writing = ({ allWpPost: { nodes } }) => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div>
      <div className="writing">
        <div className="writing__header">
          <img src={headerWriting} />
          <h3> Recent Posts </h3>
        </div>
        <h1 style={{ backgroundColor: theme }}>Test the context learned from Frontend Master</h1>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
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
