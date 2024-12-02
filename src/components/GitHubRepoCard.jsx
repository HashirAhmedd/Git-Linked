import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "bootstrap/dist/css/bootstrap.min.css";
import {updateLikedRepo} from "../Firestore"
import VITE_GITHUB_TOKEN from "../token"

const GitHubRepoCard = ({ repoUrl, gitId }) => {
  const [repoData, setRepoData] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [isSwiped, setIsSwiped] = useState(null); 

  // Fetch repository details
  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(repoUrl, {
          headers: {
            Authorization: `token ${VITE_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchRepoData();
  }, [repoUrl]);

  // Fetch repository languages
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`${repoUrl}/languages`, {
          headers: {
            Authorization: `token ${VITE_GITHUB_TOKEN}`,  
          },
        });
        const languagesData = await response.json();
        setLanguages(languagesData);
      } catch (error) {
        console.error("Error fetching GitHub languages:", error);
      }
    };

    fetchLanguages();
  }, [repoUrl]);

  const lang = Object.keys(languages);

  const  changeData = async ()=>{

      do{
        try {
          var id = Math.round(Math.random()*9999999)
          var response = await fetch(`https://api.github.com/repositories?since=${id}`, {
            headers: {
              Authorization: `token ${VITE_GITHUB_TOKEN}`,
            },
          });
          var data = await response.json();
          setRepoData(data[0]);
          setLanguages([]);
          const languagesResponse = await fetch(
            `https://api.github.com/repositories/${data[0].id}/languages`,
            {
              headers: {
                Authorization: `token ${VITE_GITHUB_TOKEN}`,
              },
            }
          );
          const languagesData = await languagesResponse.json();
          setLanguages(languagesData);
          setIsSwiped(null);
      } 
      catch(error){
        console.error("Error fetching new GitHub data:", error);
      }
    } while(!response.ok)
      
  }

  // Swipeable Handlers
  const onSwipedLeft = async () => {
    setIsSwiped("left");
    changeData();
  };
  
  const onSwipedRight = () => {
    setIsSwiped("right");
    updateLikedRepo(gitId ,repoData.id )
    changeData();
  };
  
  const handlers = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    trackMouse: true,
  });
  

  if (!repoData) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`card ${isSwiped ? `swiped-${isSwiped}` : ""}`}
      style={{ width: "18rem", margin: "1rem auto" }}
      {...handlers} // Attach swipe handlers here
    >
      {/* Owner's Avatar */}
      <img
        src={repoData.owner.avatar_url}
        className="card-img-top"
        alt={`${repoData.owner.login}'s avatar`}
        style={{ borderRadius: "50%", width: "100px", margin: "1rem auto" }}
      />

      <div className="card-body text-center">
        {/* Repository Name */}
        <h5 className="card-title">{repoData.name}</h5>

        {/* Owner Name */}
        <p className="card-text">Owner: {repoData.owner.login}</p>

        {/* Programming Languages */}
        <div>
          {lang.map((topic, index) => (
            <span
              key={index}
              className="badge bg-secondary me-1"
              style={{ marginBottom: "5px" }}
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Repository Link */}
        <a
          href={repoData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-3"
        >
          View Repository
        </a>
        <div className="tick-cross">
              <button className="btn btn-danger" onClick={onSwipedLeft}>✗</button>
              <button className="btn btn-success" onClick={onSwipedRight}>✓</button>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepoCard;
