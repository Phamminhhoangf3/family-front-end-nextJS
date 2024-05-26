const Footer = () => {
  return (
    <footer className="footer">
      <div className="above">
        <div className="content">
          <p>
            Lewis family roots reach back to late <strong>19th century</strong>{" "}
            England. Founded by <i>John Lewis</i>, the middle-class
            entrepreneur, who married <i>Mary Wright</i> and together they
            started a family which now spans over four generations.
          </p>
        </div>
        <div className="tag-a">
          <ul>
            <li>
              <a href="#">Members Directory</a>
            </li>
            <li>
              <a href="#" className="active">Family Tree</a>
            </li>
            <li>
              <a href="#">Family Timeline</a>
            </li>
          </ul>
        </div>
        <div className="tag-b">
          <ul>
            <li>
              <a href="#">Lewis History</a>
            </li>
            <li>
              <a href="#">Family Blog</a>
            </li>
            <li>
              <a href="#">Galleries</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="below">
        
      </div>
    </footer>
  );
};

export default Footer;
