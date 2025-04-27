import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apikey = "6d0d6ffd13ba38859e1bd5d542a3b756";
      const category = "general";
      const targetUrl =
        "https://gnews.io/api/v4/top-headlines?category=" +
        category +
        "&lang=en&country=us&max=10&apikey=" +
        apikey;
      const response = await fetch(targetUrl);
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
    }
  };

  return (
    <div>
      <Navbar />

      {/* container data ko fitch karne keliya*/}
      <div style={styles.container}>
        {articles.length > 0 ? (
          // grid layout keliya
          <div style={styles.grid}>
            {articles.map((article, index) => (
              // article ko tile me dikhane keliya
              <div key={index} style={styles.tile}>
                {/* image ko  dikhane keliya title*/}
                <div style={styles.imageContainer}>
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      style={styles.image}
                    />
                  ) : (
                    <div style={styles.placeholder}>No Image Available</div>
                  )}
                </div>
                {/* article ki title aur description ko dikhane keliya */}
                <div style={styles.content}>
                  <h3 style={styles.title}>{article.title}</h3>
                  <p style={styles.description}>{article.description}</p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.readMore}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // jab tak data nahi aata tab tak loading dikhane keliya
          <div style={styles.loading}>
            <h2>Loading news...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
    padding: "20px",
  },
  tile: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  imageContainer: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
  },
  content: {
    padding: "16px",
  },
  title: {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#333",
    lineHeight: "1.4",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "16px",
    lineHeight: "1.6",
  },
  readMore: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  loading: {
    textAlign: "center",
    padding: "40px",
    color: "#666",
  },
};

export default Home;
