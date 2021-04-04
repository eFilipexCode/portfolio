import { WebsitesContext } from "../../contexts/WebsitesContext";
import "./SectionSelector.css";
import { useContext } from "react";
import websites from "../../utils/websites.json";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SectionSelector() {
  const { setTitle, setDescription, setImage, setLink, title } = useContext(
    WebsitesContext
  );
  const { currentPalette } = useContext(ThemeContext);

  function handleChangeContextData({ title, link, imageUrl, description }) {
    setTitle(title);
    setDescription(description);
    setImage(imageUrl);
    setLink(link);
  }

  const selectedColor = "#10AC84";
  return (
    <div className="sections-container">
      <div className="project-buttons">
        {[...websites].map((website) => (
          <a href={`#${website.title}`}>
            <button
              style={{
                borderColor:
                  title === website.title
                    ? selectedColor
                    : currentPalette.tertiary,
                color:
                  title === website.title
                    ? selectedColor
                    : currentPalette.black,
                background: currentPalette.secondary,
              }}
              onClick={() => handleChangeContextData(website)}
            >
              {website.title}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
